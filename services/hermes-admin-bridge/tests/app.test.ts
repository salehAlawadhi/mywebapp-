import { randomUUID } from "node:crypto";
import { describe, expect, it, vi } from "vitest";
import { buildApp } from "../src/app.js";
import type { BridgeConfig } from "../src/config.js";
import type { HermesClient } from "../src/hermes-client.js";

const config: BridgeConfig = {
  NODE_ENV: "test",
  HOST: "127.0.0.1",
  PORT: 8787,
  BRIDGE_ADMIN_TOKEN: "a".repeat(32),
  HERMES_API_URL: "http://hermes:8642",
  HERMES_API_KEY: "b".repeat(32),
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

describe("Hermes admin bridge", () => {
  it("rejects requests without service credentials", async () => {
    const app = await buildApp({ config, hermes: mockHermes() });
    const response = await app.inject({
      method: "GET",
      url: "/v1/hermes/runs/run_test",
    });

    expect(response.statusCode).toBe(401);
    expect(response.json().error.code).toBe("UNAUTHORIZED");
    await app.close();
  });

  it("requires a UUID idempotency key for dispatch", async () => {
    const app = await buildApp({ config, hermes: mockHermes() });
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
    const app = await buildApp({ config, hermes });
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
    const app = await buildApp({ config, hermes });
    const response = await app.inject({ method: "GET", url: "/health" });

    expect(response.statusCode).toBe(503);
    expect(response.json()).toEqual({
      status: "degraded",
      hermes: "unavailable",
    });
    await app.close();
  });
});
