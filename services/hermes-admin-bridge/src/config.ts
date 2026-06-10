import { z } from "zod";

const configSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  HOST: z.string().default("127.0.0.1"),
  PORT: z.coerce.number().int().min(1).max(65_535).default(8787),
  BRIDGE_ADMIN_TOKEN: z.string().min(32),
  DATABASE_URL: z.string().url(),
  HERMES_API_URL: z.string().url(),
  HERMES_API_KEY: z.string().min(32),
  N8N_WEBHOOK_URL: z.string().url(),
  N8N_WEBHOOK_SIGNING_SECRET: z.string().min(32),
  REQUEST_TIMEOUT_MS: z.coerce.number().int().min(1_000).max(300_000).default(120_000),
});

export type BridgeConfig = z.infer<typeof configSchema>;

export function loadConfig(
  environment: NodeJS.ProcessEnv = process.env,
): BridgeConfig {
  return configSchema.parse(environment);
}
