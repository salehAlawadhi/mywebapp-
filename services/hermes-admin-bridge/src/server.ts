import { buildApp } from "./app.js";
import { loadConfig } from "./config.js";
import { HttpHermesClient } from "./hermes-client.js";

const config = loadConfig();
const hermes = new HttpHermesClient(
  config.HERMES_API_URL,
  config.HERMES_API_KEY,
  config.REQUEST_TIMEOUT_MS,
);
const app = await buildApp({ config, hermes });

await app.listen({ host: config.HOST, port: config.PORT });
