import { createHash } from "node:crypto";
import type { Pool } from "pg";

export type IdempotencyClaim =
  | { state: "new" }
  | { state: "cached"; statusCode: number; responseBody: unknown }
  | { state: "conflict" }
  | { state: "in_progress" };

export interface IdempotencyStore {
  claim(
    scope: string,
    key: string,
    requestHash: string,
  ): Promise<IdempotencyClaim>;
  complete(
    scope: string,
    key: string,
    statusCode: number,
    responseBody: unknown,
  ): Promise<void>;
  release(scope: string, key: string): Promise<void>;
  health(): Promise<boolean>;
}

export function requestHash(input: unknown): string {
  return createHash("sha256").update(JSON.stringify(input)).digest("hex");
}

interface MemoryRecord {
  requestHash: string;
  state: "in_progress" | "completed";
  statusCode?: number;
  responseBody?: unknown;
}

export class MemoryIdempotencyStore implements IdempotencyStore {
  private readonly records = new Map<string, MemoryRecord>();

  async claim(
    scope: string,
    key: string,
    hash: string,
  ): Promise<IdempotencyClaim> {
    const recordKey = `${scope}:${key}`;
    const existing = this.records.get(recordKey);

    if (!existing) {
      this.records.set(recordKey, {
        requestHash: hash,
        state: "in_progress",
      });
      return { state: "new" };
    }
    if (existing.requestHash !== hash) {
      return { state: "conflict" };
    }
    if (existing.state === "completed") {
      return {
        state: "cached",
        statusCode: existing.statusCode ?? 200,
        responseBody: existing.responseBody,
      };
    }
    return { state: "in_progress" };
  }

  async complete(
    scope: string,
    key: string,
    statusCode: number,
    responseBody: unknown,
  ): Promise<void> {
    const recordKey = `${scope}:${key}`;
    const existing = this.records.get(recordKey);
    if (!existing) {
      throw new Error("Cannot complete an unclaimed idempotency key.");
    }

    this.records.set(recordKey, {
      ...existing,
      state: "completed",
      statusCode,
      responseBody,
    });
  }

  async release(scope: string, key: string): Promise<void> {
    this.records.delete(`${scope}:${key}`);
  }

  async health(): Promise<boolean> {
    return true;
  }
}

export class PostgresIdempotencyStore implements IdempotencyStore {
  constructor(private readonly pool: Pool) {}

  async claim(
    scope: string,
    key: string,
    hash: string,
  ): Promise<IdempotencyClaim> {
    const inserted = await this.pool.query(
      `
        INSERT INTO agent_bridge.idempotency_requests
          (scope, idempotency_key, request_hash, state)
        VALUES ($1, $2, $3, 'IN_PROGRESS')
        ON CONFLICT (scope, idempotency_key) DO NOTHING
        RETURNING idempotency_key
      `,
      [scope, key, hash],
    );

    if (inserted.rowCount === 1) {
      return { state: "new" };
    }

    const existing = await this.pool.query<{
      request_hash: string;
      state: string;
      status_code: number | null;
      response_body: unknown;
    }>(
      `
        SELECT request_hash, state, status_code, response_body
        FROM agent_bridge.idempotency_requests
        WHERE scope = $1 AND idempotency_key = $2
      `,
      [scope, key],
    );
    const record = existing.rows[0];

    if (!record || record.request_hash !== hash) {
      return { state: "conflict" };
    }
    if (record.state === "COMPLETED" && record.status_code !== null) {
      return {
        state: "cached",
        statusCode: record.status_code,
        responseBody: record.response_body,
      };
    }
    return { state: "in_progress" };
  }

  async complete(
    scope: string,
    key: string,
    statusCode: number,
    responseBody: unknown,
  ): Promise<void> {
    await this.pool.query(
      `
        UPDATE agent_bridge.idempotency_requests
        SET state = 'COMPLETED',
            status_code = $3,
            response_body = $4::jsonb,
            completed_at = NOW()
        WHERE scope = $1 AND idempotency_key = $2
      `,
      [scope, key, statusCode, JSON.stringify(responseBody)],
    );
  }

  async release(scope: string, key: string): Promise<void> {
    await this.pool.query(
      `
        DELETE FROM agent_bridge.idempotency_requests
        WHERE scope = $1
          AND idempotency_key = $2
          AND state = 'IN_PROGRESS'
      `,
      [scope, key],
    );
  }

  async health(): Promise<boolean> {
    try {
      await this.pool.query("SELECT 1");
      return true;
    } catch {
      return false;
    }
  }
}
