# Admin Application Integration

This file is the handoff contract for the `/admin` application.

## Environment

The admin application needs:

```text
AGENT_BRIDGE_URL=http://hermes-admin-bridge:8787
AGENT_BRIDGE_TOKEN=<same value as BRIDGE_ADMIN_TOKEN>
```

These values are server-only. Never expose them through public browser
JavaScript or `NEXT_PUBLIC_*` variables.

## Dispatch Flow

The server-side admin action:

1. Loads the authoritative task and current handoff from PostgreSQL.
2. Creates a UUID idempotency key and stores it with the dispatch attempt.
3. Calls `POST /v1/hermes/runs`.
4. Stores the returned `runId` against the task.
5. Polls `GET /v1/hermes/runs/:runId` from a background job.
6. Writes the final output into the admin result-intake transaction.

Example server-only request:

```ts
const response = await fetch(`${process.env.AGENT_BRIDGE_URL}/v1/hermes/runs`, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.AGENT_BRIDGE_TOKEN}`,
    "Content-Type": "application/json",
    "Idempotency-Key": dispatch.idempotencyKey,
  },
  body: JSON.stringify({
    taskId: task.id,
    projectId: task.projectId,
    handoffVersion: handoff.version,
    title: task.title,
    instructions: executor.instructions,
    handoff: handoff.markdown,
    metadata: {
      executorId: task.executorId,
      riskLevel: String(task.riskLevel),
    },
  }),
});
```

Do not generate a new idempotency key when retrying the same logical dispatch.

## Notifications

After a committed business transaction, call:

```text
POST /v1/notifications
```

The bridge signs and forwards the event to n8n. A notification failure must not
roll back the business transaction. Store notification delivery state and
retry it separately.

## Security Boundary

- The browser never calls the bridge directly.
- The bridge token identifies only the admin service.
- The bridge cannot approve tasks or edit business state.
- Hermes output is untrusted input and must pass the same review and validation
  gates as any external executor result.
- Never treat model text as an instruction to change credentials, permissions,
  deployments, or approvals.
