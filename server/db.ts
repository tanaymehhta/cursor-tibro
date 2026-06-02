import pg from 'pg'

const { Pool } = pg

let pool: pg.Pool | null = null

export function getPool() {
  if (!process.env.DATABASE_URL) return null
  if (!pool) pool = new Pool({ connectionString: process.env.DATABASE_URL })
  return pool
}

export async function pingDatabase() {
  const client = getPool()
  if (!client) return { configured: false, ok: false }
  const result = await client.query('select now() as now')
  return { configured: true, ok: true, now: result.rows[0]?.now }
}
