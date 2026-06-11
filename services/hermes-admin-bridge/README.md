# HELYRO Hermes Admin Bridge

Private integration service between the HELYRO admin application, Hermes
Agent, and n8n.

## Responsibilities

- Authenticate calls from the admin application.
- Validate task handoffs before dispatching Hermes runs.
- Preserve request idempotency in PostgreSQL.
- Proxy Hermes run status and cancellation.
- Authenticate and sign notification events sent to n8n.

It does not own clients, projects, task state, approvals, or deliverables.
Those remain authoritative in the admin application database.

## API

All routes except `/health` require:

```text
Authorization: Bearer <BRIDGE_ADMIN_TOKEN>
```

Mutating routes also require:

```text
Idempotency-Key: <uuid>
```

Routes:

```text
GET  /health
POST /v1/hermes/runs
GET  /v1/hermes/runs/:runId
POST /v1/hermes/runs/:runId/stop
POST /v1/notifications
```

The complete request contract is in `openapi.yaml`.

## Local Verification

```bash
npm ci
npm run typecheck
npm test
npm run build
npm audit --omit=dev
```

## Database Migration

Set `DATABASE_URL`, then run:

```bash
npm run migrate
```

Migrations use a PostgreSQL advisory lock and are recorded in
`agent_bridge.schema_migrations`.

## Deployment

- Deploy as a separate Coolify application.
- Base directory: `/services/hermes-admin-bridge`.
- Build pack: Dockerfile.
- Exposed container port: `8787`.
- Do not assign a public domain.
- Connect only to the private admin, PostgreSQL, Hermes, and n8n network.
- Store all secrets as runtime-only Coolify variables.
- Configure the n8n Webhook node with Header Auth using
  `X-HELYRO-Webhook-Token` and `N8N_WEBHOOK_AUTH_TOKEN`.

Hermes API Server must be enabled on its private Docker interface. Never expose
port `8642` publicly.
