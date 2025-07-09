import express from 'express';
import dotenv from 'dotenv';
import pool from './db/connection';
import cors from 'cors';

// Load environment variables from .env
dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // for parsing application/json
app.use(cors()); // Enable CORS for all routes

// Test route: Get all companies
app.get('/api/companies', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM companies');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching companies:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Default route
app.get('/', (req, res) => {
  res.send('🧠 Psychiatry Scheduler API is running!');
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
