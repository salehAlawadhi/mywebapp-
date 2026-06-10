import { randomUUID } from "node:crypto";
import { describe, expect, it, vi } from "vitest";
import { buildApp } from "../src/app.js";
import type { BridgeConfig } from "../src/config.js";
import type { HermesClient } from "../src/hermes-client.js";
import { MemoryIdempotencyStore } from "../src/idempotency.js";
import type { N8nClient } from "../src/n8n-client.js";

const config: BridgeConfig = {
  NODE_ENV: "test",
  HOST: "127.0.0.1",
  PORT: 8787,
  BRIDGE_ADMIN_TOKEN: "a".repeat(32),
  DATABASE_URL: "postgresql://bridge:bridge@postgres:5432/bridge",
  HERMES_API_URL: "http://hermes:8642",
  HERMES_API_KEY: "b".repeat(32),
  N8N_WEBHOOK_URL: "http://n8n:5678/webhook/helyro",
  N8N_WEBHOOK_SIGNING_SECRET: "c".repeat(32),
  REQUEST_TIMEOUT_MS: 5_000,
};

function mockHermes(): HermesClient {
  return {
    health: vi.fn().mockResolvedValue(true),
    createRun: vi.fn().mockResolvedValue({
      runId: "run_test",
      status: "started",
    }),
    getRun: vi.fn().mockResolvedValue({
      run_id: "run_test",
      status: "completed",
      output: "done",
    }),
    stopRun: vi.fn().mockResolvedValue({ status: "stopping" }),
  };
}

function mockN8n(): N8nClient {
  return {
    send: vi.fn().mockResolvedValue(undefined),
  };
}

function testDependencies(
  hermes: HermesClient = mockHermes(),
  n8n: N8nClient = mockN8n(),
) {
  return {
    config,
    hermes,
    idempotency: new MemoryIdempotencyStore(),
    n8n,
  };
}

describe("Hermes admin bridge", () => {
  it("rejects requests without service credentials", async () => {
    const app = await buildApp(testDependencies());
    const response = await app.inject({
      method: "GET",
      url: "/v1/hermes/runs/run_test",
    });

    expect(response.statusCode).toBe(401);
    expect(response.json().error.code).toBe("UNAUTHORIZED");
    await app.close();
  });

  it("requires a UUID idempotency key for dispatch", async () => {
    const app = await buildApp(testDependencies());
    const response = await app.inject({
      method: "POST",
      url: "/v1/hermes/runs",
      headers: {
        authorization: `Bearer ${config.BRIDGE_ADMIN_TOKEN}`,
      },
      payload: {},
    });

    expect(response.statusCode).toBe(400);
    expect(response.json().error.code).toBe("IDEMPOTENCY_KEY_REQUIRED");
    await app.close();
  });

  it("dispatches a validated task to Hermes", async () => {
    const hermes = mockHermes();
    const app = await buildApp(testDependencies(hermes));
    const taskId = randomUUID();
    const response = await app.inject({
      method: "POST",
      url: "/v1/hermes/runs",
      headers: {
        authorization: `Bearer ${config.BRIDGE_ADMIN_TOKEN}`,
        "idempotency-key": randomUUID(),
      },
      payload: {
        taskId,
        projectId: randomUUID(),
        handoffVersion: 1,
        title: "Research client",
        instructions: "Use verified sources only.",
        handoff: "# Handoff\nResearch the supplied company.",
      },
    });

    expect(response.statusCode).toBe(202);
    expect(response.json()).toMatchObject({
      data: {
        runId: "run_test",
        status: "started",
        taskId,
      },
    });
    expect(hermes.createRun).toHaveBeenCalledOnce();
    await app.close();
  });

  it("reports degraded health when Hermes is unavailable", async () => {
    const hermes = mockHermes();
    vi.mocked(hermes.health).mockResolvedValue(false);
    const app = await buildApp(testDependencies(hermes));
    const response = await app.inject({ method: "GET", url: "/health" });

    expect(response.statusCode).toBe(503);
    expect(response.json()).toEqual({
      status: "degraded",
      hermes: "unavailable",
      database: "available",
    });
    await app.close();
  });

  it("returns the cached response for a repeated dispatch", async () => {
    const hermes = mockHermes();
    const idempotency = new MemoryIdempotencyStore();
    const app = await buildApp({
      config,
      hermes,
      idempotency,
      n8n: mockN8n(),
    });
    const idempotencyKey = randomUUID();
    const payload = {
      taskId: randomUUID(),
      projectId: randomUUID(),
      handoffVersion: 1,
      title: "Research client",
      instructions: "Use verified sources only.",
      handoff: "# Handoff\nResearch the supplied company.",
    };
    const request = {
      method: "POST" as const,
      url: "/v1/hermes/runs",
      headers: {
        authorization: `Bearer ${config.BRIDGE_ADMIN_TOKEN}`,
        "idempotency-key": idempotencyKey,
      },
      payload,
    };

    const first = await app.inject(request);
    const second = await app.inject(request);

    expect(first.statusCode).toBe(202);
    expect(second.statusCode).toBe(202);
    expect(second.json()).toEqual(first.json());
    expect(hermes.createRun).toHaveBeenCalledOnce();
    await app.close();
  });

  it("rejects an idempotency key reused with different input", async () => {
    const hermes = mockHermes();
    const app = await buildApp(testDependencies(hermes));
    const idempotencyKey = randomUUID();
    const payload = {
      taskId: randomUUID(),
      projectId: randomUUID(),
      handoffVersion: 1,
      title: "Research client",
      instructions: "Use verified sources only.",
      handoff: "# Handoff\nResearch the supplied company.",
    };
    const headers = {
      authorization: `Bearer ${config.BRIDGE_ADMIN_TOKEN}`,
      "idempotency-key": idempotencyKey,
    };

    await app.inject({
      method: "POST",
      url: "/v1/hermes/runs",
      headers,
      payload,
    });
    const response = await app.inject({
      method: "POST",
      url: "/v1/hermes/runs",
      headers,
      payload: { ...payload, title: "Different task" },
    });

    expect(response.statusCode).toBe(409);
    expect(response.json().error.code).toBe("IDEMPOTENCY_KEY_CONFLICT");
    expect(hermes.createRun).toHaveBeenCalledOnce();
    await app.close();
  });

  it("forwards a validated notification to n8n once", async () => {
    const n8n = mockN8n();
    const app = await buildApp(testDependencies(mockHermes(), n8n));
    const idempotencyKey = randomUUID();
    const payload = {
      eventId: randomUUID(),
      eventType: "APPROVAL_REQUIRED",
      occurredAt: new Date().toISOString(),
      taskId: randomUUID(),
      message: "A task is waiting for owner approval.",
      channels: ["telegram"],
    };
    const request = {
      method: "POST" as const,
      url: "/v1/notifications",
      headers: {
        authorization: `Bearer ${config.BRIDGE_ADMIN_TOKEN}`,
        "idempotency-key": idempotencyKey,
      },
      payload,
    };

    const first = await app.inject(request);
    const second = await app.inject(request);

    expect(first.statusCode).toBe(202);
    expect(second.json()).toEqual(first.json());
    expect(n8n.send).toHaveBeenCalledOnce();
    await app.close();
  });

  it("does not cache failed n8n delivery attempts", async () => {
    const n8n = mockN8n();
    vi.mocked(n8n.send)
      .mockRejectedValueOnce(new Error("offline"))
      .mockResolvedValueOnce(undefined);
    const app = await buildApp(testDependencies(mockHermes(), n8n));
    const request = {
      method: "POST" as const,
      url: "/v1/notifications",
      headers: {
        authorization: `Bearer ${config.BRIDGE_ADMIN_TOKEN}`,
        "idempotency-key": randomUUID(),
      },
      payload: {
        eventId: randomUUID(),
        eventType: "TASK_COMPLETED",
        occurredAt: new Date().toISOString(),
        message: "Task completed.",
        channels: ["telegram"],
      },
    };

    const failed = await app.inject(request);
    const retried = await app.inject(request);

    expect(failed.statusCode).toBe(502);
    expect(retried.statusCode).toBe(202);
    expect(n8n.send).toHaveBeenCalledTimes(2);
    await app.close();
  });
});
