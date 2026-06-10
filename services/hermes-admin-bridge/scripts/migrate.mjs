import { readdir, readFile } from "node:fs/promises";
import { resolve } from "node:path";
import pg from "pg";

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error("DATABASE_URL is required.");
}

const pool = new pg.Pool({ connectionString: databaseUrl, max: 1 });
const client = await pool.connect();

try {
  await client.query("SELECT pg_advisory_lock(726384291)");
  await client.query("CREATE SCHEMA IF NOT EXISTS agent_bridge");
  await client.query(`
    CREATE TABLE IF NOT EXISTS agent_bridge.schema_migrations (
      filename TEXT PRIMARY KEY,
      applied_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);

  const migrationsDirectory = resolve("migrations");
  const filenames = (await readdir(migrationsDirectory))
    .filter((filename) => filename.endsWith(".sql"))
    .sort();

  for (const filename of filenames) {
    const applied = await client.query(
      `
        SELECT 1
        FROM agent_bridge.schema_migrations
        WHERE filename = $1
      `,
      [filename],
    );
    if (applied.rowCount === 1) {
      continue;
    }

    const sql = await readFile(resolve(migrationsDirectory, filename), "utf8");
    await client.query("BEGIN");
    try {
      await client.query(sql);
      await client.query(
        `
          INSERT INTO agent_bridge.schema_migrations (filename)
          VALUES ($1)
        `,
        [filename],
      );
      await client.query("COMMIT");
      console.log(`Applied migration ${filename}`);
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    }
  }
} finally {
  await client.query("SELECT pg_advisory_unlock(726384291)");
  client.release();
  await pool.end();
}
