import pg from "pg";
import { buildApp } from "./app.js";
import { loadConfig } from "./config.js";
import { HttpHermesClient } from "./hermes-client.js";
import { PostgresIdempotencyStore } from "./idempotency.js";

const config = loadConfig();
const pool = new pg.Pool({ connectionString: config.DATABASE_URL });
const hermes = new HttpHermesClient(
  config.HERMES_API_URL,
  config.HERMES_API_KEY,
  config.REQUEST_TIMEOUT_MS,
);
const idempotency = new PostgresIdempotencyStore(pool);
const app = await buildApp({ config, hermes, idempotency });

app.addHook("onClose", async () => {
  await pool.end();
});

await app.listen({ host: config.HOST, port: config.PORT });
