import 'dotenv/config';

import { migrate } from 'drizzle-orm/node-postgres/migrator';

import { db, pool } from './index';

async function main() {
  console.log('🚀    MIGRATION STARTED\n');
  
  try {
    // Test database connection
    await pool.query('SELECT NOW()');
    console.log('✅    Database connection successful\n');

    // Run migrations
    await migrate(db, { migrationsFolder: 'src/db/migrations' });
    console.log('✅    MIGRATION COMPLETED\n');
  } catch (error) {
    console.error('❌    Migration failed:', error);
    throw error;
  } finally {
    console.log('🌱    Closing DB connection...\n');
    await pool.end();
  }
}

main()
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log('👋    Closing process...\n');
    process.exit(0);
  });
