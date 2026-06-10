import { randomUUID } from "node:crypto";
import helmet from "@fastify/helmet";
import Fastify, {
  type FastifyInstance,
  type FastifyReply,
} from "fastify";
import { z } from "zod";
import type { BridgeConfig } from "./config.js";
import {
  dispatchRunSchema,
  notificationEventSchema,
} from "./contracts.js";
import {
  HermesRequestError,
  type HermesClient,
} from "./hermes-client.js";
import {
  requestHash,
  type IdempotencyStore,
} from "./idempotency.js";
import {
  bearerTokenFromHeader,
  constantTimeEqual,
} from "./security.js";
import type { N8nClient } from "./n8n-client.js";

export interface AppDependencies {
  config: BridgeConfig;
  hermes: HermesClient;
  idempotency: IdempotencyStore;
  n8n: N8nClient;
}

export async function buildApp(
  dependencies: AppDependencies,
): Promise<FastifyInstance> {
  const app = Fastify({
    logger: dependencies.config.NODE_ENV !== "test",
    bodyLimit: 64 * 1024,
    genReqId: () => randomUUID(),
  });

  await app.register(helmet, { global: true });

  app.get("/health", async (_request, reply) => {
    const [hermesAvailable, databaseAvailable] = await Promise.all([
      dependencies.hermes.health(),
      dependencies.idempotency.health(),
    ]);
    const isHealthy = hermesAvailable && databaseAvailable;

    return reply.code(isHealthy ? 200 : 503).send({
      status: isHealthy ? "ok" : "degraded",
      hermes: hermesAvailable ? "available" : "unavailable",
      database: databaseAvailable ? "available" : "unavailable",
    });
  });

  app.addHook("onRequest", async (request, reply) => {
    if (request.url === "/health") {
      return;
    }

    const token = bearerTokenFromHeader(request.headers.authorization);
    if (
      token === null ||
      !constantTimeEqual(token, dependencies.config.BRIDGE_ADMIN_TOKEN)
    ) {
      return reply.code(401).send({
        error: {
          code: "UNAUTHORIZED",
          message: "Valid bridge credentials are required.",
        },
      });
    }
  });

  app.post("/v1/hermes/runs", async (request, reply) => {
    const idempotencyKey = request.headers["idempotency-key"];
    if (
      typeof idempotencyKey !== "string" ||
      !z.string().uuid().safeParse(idempotencyKey).success
    ) {
      return reply.code(400).send({
        error: {
          code: "IDEMPOTENCY_KEY_REQUIRED",
          message: "A UUID Idempotency-Key header is required.",
        },
      });
    }

    const parsed = dispatchRunSchema.safeParse(request.body);
    if (!parsed.success) {
      return reply.code(422).send({
        error: {
          code: "VALIDATION_ERROR",
          message: "Invalid Hermes run request.",
          details: parsed.error.flatten(),
        },
      });
    }

    const scope = "hermes-run";
    let claim;
    try {
      claim = await dependencies.idempotency.claim(
        scope,
        idempotencyKey,
        requestHash(parsed.data),
      );
    } catch {
      return reply.code(503).send({
        error: {
          code: "IDEMPOTENCY_STORE_UNAVAILABLE",
          message: "The request cannot be safely processed right now.",
        },
      });
    }

    if (claim.state === "cached") {
      return reply.code(claim.statusCode).send(claim.responseBody);
    }
    if (claim.state === "conflict") {
      return reply.code(409).send({
        error: {
          code: "IDEMPOTENCY_KEY_CONFLICT",
          message: "This idempotency key was used with a different request.",
        },
      });
    }
    if (claim.state === "in_progress") {
      return reply.code(409).send({
        error: {
          code: "REQUEST_IN_PROGRESS",
          message: "A request with this idempotency key is still running.",
        },
      });
    }

    try {
      const run = await dependencies.hermes.createRun(
        parsed.data,
        idempotencyKey,
      );
      const responseBody = {
        data: {
          runId: run.runId,
          status: run.status,
          taskId: parsed.data.taskId,
          requestId: request.id,
        },
      };
      await dependencies.idempotency.complete(
        scope,
        idempotencyKey,
        202,
        responseBody,
      );
      return reply.code(202).send(responseBody);
    } catch (error) {
      await dependencies.idempotency.release(scope, idempotencyKey);
      return sendUpstreamError(error, reply);
    }
  });

  app.get<{ Params: { runId: string } }>(
    "/v1/hermes/runs/:runId",
    async (request, reply) => {
      try {
        const run = await dependencies.hermes.getRun(request.params.runId);
        return reply.send({ data: run });
      } catch (error) {
        return sendUpstreamError(error, reply);
      }
    },
  );

  app.post<{ Params: { runId: string } }>(
    "/v1/hermes/runs/:runId/stop",
    async (request, reply) => {
      try {
        const result = await dependencies.hermes.stopRun(request.params.runId);
        return reply.code(202).send({ data: result });
      } catch (error) {
        return sendUpstreamError(error, reply);
      }
    },
  );

  app.post("/v1/notifications", async (request, reply) => {
    const idempotencyKey = request.headers["idempotency-key"];
    if (
      typeof idempotencyKey !== "string" ||
      !z.string().uuid().safeParse(idempotencyKey).success
    ) {
      return reply.code(400).send({
        error: {
          code: "IDEMPOTENCY_KEY_REQUIRED",
          message: "A UUID Idempotency-Key header is required.",
        },
      });
    }

    const parsed = notificationEventSchema.safeParse(request.body);
    if (!parsed.success) {
      return reply.code(422).send({
        error: {
          code: "VALIDATION_ERROR",
          message: "Invalid notification event.",
          details: parsed.error.flatten(),
        },
      });
    }

    const scope = "n8n-notification";
    let claim;
    try {
      claim = await dependencies.idempotency.claim(
        scope,
        idempotencyKey,
        requestHash(parsed.data),
      );
    } catch {
      return reply.code(503).send({
        error: {
          code: "IDEMPOTENCY_STORE_UNAVAILABLE",
          message: "The request cannot be safely processed right now.",
        },
      });
    }

    if (claim.state === "cached") {
      return reply.code(claim.statusCode).send(claim.responseBody);
    }
    if (claim.state === "conflict") {
      return reply.code(409).send({
        error: {
          code: "IDEMPOTENCY_KEY_CONFLICT",
          message: "This idempotency key was used with a different request.",
        },
      });
    }
    if (claim.state === "in_progress") {
      return reply.code(409).send({
        error: {
          code: "REQUEST_IN_PROGRESS",
          message: "A request with this idempotency key is still running.",
        },
      });
    }

    try {
      await dependencies.n8n.send(parsed.data, idempotencyKey);
      const responseBody = {
        data: {
          accepted: true,
          eventId: parsed.data.eventId,
          requestId: request.id,
        },
      };
      await dependencies.idempotency.complete(
        scope,
        idempotencyKey,
        202,
        responseBody,
      );
      return reply.code(202).send(responseBody);
    } catch {
      await dependencies.idempotency.release(scope, idempotencyKey);
      return reply.code(502).send({
        error: {
          code: "N8N_UNAVAILABLE",
          message: "The notification service is currently unavailable.",
        },
      });
    }
  });

  return app;
}

function sendUpstreamError(error: unknown, reply: FastifyReply) {
  if (error instanceof HermesRequestError) {
    return reply.code(502).send({
      error: {
        code: "HERMES_UPSTREAM_ERROR",
        message: "Hermes rejected or failed the request.",
      },
    });
  }

  return reply.code(502).send({
    error: {
      code: "HERMES_UNAVAILABLE",
      message: "Hermes is currently unavailable.",
    },
  });
}
