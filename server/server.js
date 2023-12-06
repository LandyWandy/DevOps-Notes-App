const express = require('express');
const cors = require('cors');
const app = express();
const tasksRoutes = require('./routes/tasks-api');
const healthRoutes = require('./routes/healthRoutes');
require('dotenv').config();

// Middleware setup
app.use(cors());
app.use(express.json());

// API and Health routes
app.use('/api/tasks', tasksRoutes);
app.use('/health', healthRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
