import { createHmac } from "node:crypto";
import type { NotificationEvent } from "./contracts.js";

export interface N8nClient {
  send(event: NotificationEvent, idempotencyKey: string): Promise<void>;
}

export class HttpN8nClient implements N8nClient {
  constructor(
    private readonly webhookUrl: string,
    private readonly authToken: string,
    private readonly signingSecret: string,
    private readonly timeoutMs: number,
    private readonly fetcher: typeof fetch = fetch,
  ) {}

  async send(
    event: NotificationEvent,
    idempotencyKey: string,
  ): Promise<void> {
    const body = JSON.stringify(event);
    const timestamp = Math.floor(Date.now() / 1_000).toString();
    const signature = createHmac("sha256", this.signingSecret)
      .update(`${timestamp}.${body}`)
      .digest("hex");

    const response = await this.fetcher(this.webhookUrl, {
      method: "POST",
      signal: AbortSignal.timeout(this.timeoutMs),
      headers: {
        "Content-Type": "application/json",
        "Idempotency-Key": idempotencyKey,
        "X-HELYRO-Webhook-Token": this.authToken,
        "X-HELYRO-Timestamp": timestamp,
        "X-HELYRO-Signature": `sha256=${signature}`,
      },
      body,
    });

    if (!response.ok) {
      throw new N8nRequestError(response.status);
    }
  }
}

export class N8nRequestError extends Error {
  constructor(readonly statusCode: number) {
    super(`n8n webhook failed with status ${statusCode}`);
  }
}
