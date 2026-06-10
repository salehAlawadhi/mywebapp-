import { randomUUID } from "node:crypto";
import helmet from "@fastify/helmet";
import Fastify, {
  type FastifyInstance,
  type FastifyReply,
} from "fastify";
import { z } from "zod";
import type { BridgeConfig } from "./config.js";
import { dispatchRunSchema } from "./contracts.js";
import {
  HermesRequestError,
  type HermesClient,
} from "./hermes-client.js";
import {
  bearerTokenFromHeader,
  constantTimeEqual,
} from "./security.js";

export interface AppDependencies {
  config: BridgeConfig;
  hermes: HermesClient;
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
    const hermesAvailable = await dependencies.hermes.health();
    return reply.code(hermesAvailable ? 200 : 503).send({
      status: hermesAvailable ? "ok" : "degraded",
      hermes: hermesAvailable ? "available" : "unavailable",
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

    try {
      const run = await dependencies.hermes.createRun(parsed.data);
      return reply.code(202).send({
        data: {
          runId: run.runId,
          status: run.status,
          taskId: parsed.data.taskId,
          requestId: request.id,
        },
      });
    } catch (error) {
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
