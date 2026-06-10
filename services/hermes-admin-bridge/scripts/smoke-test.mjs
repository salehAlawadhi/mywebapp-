import { randomUUID } from "node:crypto";

const baseUrl = process.env.BRIDGE_URL ?? "http://127.0.0.1:8787";
const token = process.env.BRIDGE_ADMIN_TOKEN;
const expectedText = process.env.SMOKE_EXPECT_TEXT;

if (!token) {
  throw new Error("BRIDGE_ADMIN_TOKEN is required.");
}

const response = await fetch(`${baseUrl}/v1/hermes/runs`, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    "Idempotency-Key": randomUUID(),
  },
  body: JSON.stringify({
    taskId: randomUUID(),
    projectId: randomUUID(),
    handoffVersion: 1,
    title: "Bridge integration check",
    instructions: "Return exactly BRIDGE_OK. Do not call tools.",
    handoff:
      "This is a private integration health check. Return exactly BRIDGE_OK.",
  }),
});
const dispatched = await response.json();

if (!response.ok) {
  throw new Error(`Dispatch failed: ${JSON.stringify(dispatched)}`);
}

const runId = dispatched.data.runId;
let finalStatus = "timeout";
let output = "";

for (let attempt = 0; attempt < 60; attempt += 1) {
  await new Promise((resolve) => setTimeout(resolve, 2_000));
  const statusResponse = await fetch(
    `${baseUrl}/v1/hermes/runs/${encodeURIComponent(runId)}`,
    { headers: { Authorization: `Bearer ${token}` } },
  );
  const statusBody = await statusResponse.json();

  if (!statusResponse.ok) {
    throw new Error(`Status failed: ${JSON.stringify(statusBody)}`);
  }

  finalStatus = statusBody.data.status;
  if (["completed", "failed", "cancelled"].includes(finalStatus)) {
    output = statusBody.data.output ?? "";
    break;
  }
}

console.log(
  JSON.stringify({
    dispatchStatus: dispatched.data.status,
    finalStatus,
    output,
  }),
);

if (
  finalStatus !== "completed" ||
  (expectedText && !output.includes(expectedText))
) {
  process.exitCode = 1;
}
