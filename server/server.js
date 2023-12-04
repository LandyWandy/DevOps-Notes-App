const express = require('express');
const app = express();
const tasksRoutes = require('./routes/tasks-api');
require('dotenv').config();

// Middleware to parse JSON
app.use(express.json());

// API routes
app.use('/api/tasks', tasksRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
