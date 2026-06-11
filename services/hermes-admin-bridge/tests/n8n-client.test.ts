import { createHmac, randomUUID } from "node:crypto";
import { describe, expect, it, vi } from "vitest";
import { HttpN8nClient } from "../src/n8n-client.js";

describe("HttpN8nClient", () => {
  it("signs the exact webhook body and timestamp", async () => {
    const fetcher = vi.fn().mockResolvedValue(new Response(null, { status: 200 }));
    const secret = "s".repeat(32);
    const client = new HttpN8nClient(
      "http://n8n:5678/webhook/helyro",
      "a".repeat(32),
      secret,
      5_000,
      fetcher,
    );
    const event = {
      eventId: randomUUID(),
      eventType: "TASK_READY" as const,
      occurredAt: new Date().toISOString(),
      message: "Task is ready.",
      channels: ["telegram" as const],
      data: {},
    };

    await client.send(event, randomUUID());

    expect(fetcher).toHaveBeenCalledOnce();
    const [, init] = fetcher.mock.calls[0] as [string, RequestInit];
    const headers = init.headers as Record<string, string>;
    const body = init.body as string;
    const expectedSignature = createHmac("sha256", secret)
      .update(`${headers["X-HELYRO-Timestamp"]}.${body}`)
      .digest("hex");

    expect(headers["X-HELYRO-Signature"]).toBe(
      `sha256=${expectedSignature}`,
    );
    expect(headers["X-HELYRO-Webhook-Token"]).toBe("a".repeat(32));
    expect(JSON.parse(body)).toEqual(event);
  });
});
