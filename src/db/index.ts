import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

import { env } from '@/env.mjs';

import * as schema from './schema';

export const pool = new Pool({
  connectionString: env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  },
  connectionTimeoutMillis: 0,
  idleTimeoutMillis: 0,
  max: 20,
});

export const db = drizzle(pool, {
  schema,
  logger: false,
});
