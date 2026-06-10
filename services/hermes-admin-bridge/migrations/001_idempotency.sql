CREATE SCHEMA IF NOT EXISTS agent_bridge;

CREATE TABLE IF NOT EXISTS agent_bridge.idempotency_requests (
  scope TEXT NOT NULL,
  idempotency_key UUID NOT NULL,
  request_hash TEXT NOT NULL,
  state TEXT NOT NULL CHECK (state IN ('IN_PROGRESS', 'COMPLETED')),
  status_code INTEGER,
  response_body JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  PRIMARY KEY (scope, idempotency_key)
);

CREATE INDEX IF NOT EXISTS idx_agent_bridge_idempotency_created_at
  ON agent_bridge.idempotency_requests (created_at);
