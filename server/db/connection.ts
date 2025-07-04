import dotenv from 'dotenv';
import { Pool } from 'pg';

// Load environment variables from server/.env
dotenv.config();

// Create a PostgreSQL connection pool
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME
});

// Optional: Test the connection immediately
pool.connect()
  .then(client => {
    return client
      .query('SELECT NOW()')
      .then(res => {
        console.log('✅ Connected to PostgreSQL:', res.rows[0]);
        client.release();
      })
      .catch(err => {
        client.release();
        console.error('❌ Error executing test query', err.stack);
      });
  })
  .catch(err => {
    console.error('❌ Error connecting to PostgreSQL', err.stack);
  });

export default pool;
