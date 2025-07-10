import express from 'express';
import dotenv from 'dotenv';
import pool from './db/connection';
import cors from 'cors';
import helloRoutes from './src/routes/hello';
import companyRoutes from './src/routes/companies';


// Load environment variables from .env
dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // for parsing application/json
app.use(cors()); // Enable CORS for all routes

app.use('/api/hello', helloRoutes);
app.use('/api/companies', companyRoutes);



// Default route
app.get('/', (req, res) => {
  res.send('🧠 Psychiatry Scheduler API is running!');
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
