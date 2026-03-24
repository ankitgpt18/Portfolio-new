import { neon, type NeonQueryFunction } from '@neondatabase/serverless'

let _sql: NeonQueryFunction<false, false> | null = null

function getSql() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not set')
  }
  if (!_sql) {
    _sql = neon(process.env.DATABASE_URL)
  }
  return _sql
}

export interface VisitorData {
  uniqueVisitors: number
}

export function generateVisitorId(ip: string | null, userAgent: string | null, fingerprint?: string): string {
  if (fingerprint) {
    return `fp:${fingerprint}`
  }

  const ipPart = ip || 'unknown'
  const uaPart = userAgent || 'unknown'
  return Buffer.from(`${ipPart}-${uaPart}`).toString('base64').slice(0, 32)
}

export async function initVisitorTable(): Promise<void> {
  await getSql()`
    CREATE TABLE IF NOT EXISTS visitors (
      id SERIAL PRIMARY KEY,
      visitor_id TEXT UNIQUE NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `
}

export async function trackVisit(visitorId: string): Promise<VisitorData> {
  try {
    // Insert visitor if not exists
    await getSql()`
      INSERT INTO visitors (visitor_id)
      VALUES (${visitorId})
      ON CONFLICT (visitor_id) DO NOTHING
    `

    // Get count
    const result = await getSql()`SELECT COUNT(*) as count FROM visitors`
    const uniqueCount = parseInt(result[0]?.count || '0', 10)

    return { uniqueVisitors: uniqueCount }
  } catch (error) {
    console.error('Error tracking visitor:', error)
    return { uniqueVisitors: 0 }
  }
}

export async function getVisitorStats(): Promise<{ uniqueVisitors: number }> {
  try {
    const result = await getSql()`SELECT COUNT(*) as count FROM visitors`
    const uniqueCount = parseInt(result[0]?.count || '0', 10)
    return { uniqueVisitors: uniqueCount }
  } catch (error) {
    console.error('Error getting visitor stats:', error)
    return { uniqueVisitors: 0 }
  }
}
