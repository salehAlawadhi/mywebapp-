import {
  hermesRunResponseSchema,
  hermesRunStatusSchema,
  type DispatchRunInput,
  type HermesRunStatus,
} from "./contracts.js";

export interface HermesClient {
  createRun(input: DispatchRunInput): Promise<{ runId: string; status: string }>;
  getRun(runId: string): Promise<HermesRunStatus>;
  stopRun(runId: string): Promise<{ status: string }>;
  health(): Promise<boolean>;
}

export class HttpHermesClient implements HermesClient {
  constructor(
    private readonly baseUrl: string,
    private readonly apiKey: string,
    private readonly timeoutMs: number,
  ) {}

  async createRun(
    input: DispatchRunInput,
  ): Promise<{ runId: string; status: string }> {
    const response = await this.request("/v1/runs", {
      method: "POST",
      body: JSON.stringify({
        session_id: `helyro-task:${input.taskId}`,
        instructions: input.instructions,
        input: [
          `Task: ${input.title}`,
          `Project ID: ${input.projectId}`,
          `Handoff version: ${input.handoffVersion}`,
          "",
          input.handoff,
        ].join("\n"),
      }),
    });
    const body = hermesRunResponseSchema.parse(await response.json());

    return { runId: body.run_id, status: body.status };
  }

  async getRun(runId: string): Promise<HermesRunStatus> {
    const response = await this.request(`/v1/runs/${encodeURIComponent(runId)}`);
    return hermesRunStatusSchema.parse(await response.json());
  }

  async stopRun(runId: string): Promise<{ status: string }> {
    const response = await this.request(
      `/v1/runs/${encodeURIComponent(runId)}/stop`,
      { method: "POST" },
    );
    const body = zStatus.parse(await response.json());
    return body;
  }

  async health(): Promise<boolean> {
    try {
      await this.request("/health");
      return true;
    } catch {
      return false;
    }
  }

  private async request(path: string, init: RequestInit = {}): Promise<Response> {
    const response = await fetch(new URL(path, this.baseUrl), {
      ...init,
      signal: AbortSignal.timeout(this.timeoutMs),
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
        ...init.headers,
      },
    });

    if (!response.ok) {
      throw new HermesRequestError(response.status);
    }

    return response;
  }
}

const zStatus = {
  parse(input: unknown): { status: string } {
    if (
      typeof input !== "object" ||
      input === null ||
      typeof (input as { status?: unknown }).status !== "string"
    ) {
      throw new Error("Invalid Hermes stop response");
    }
    return { status: (input as { status: string }).status };
  },
};

export class HermesRequestError extends Error {
  constructor(readonly statusCode: number) {
    super(`Hermes request failed with status ${statusCode}`);
  }
}
