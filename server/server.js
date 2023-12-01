const express = require('express');
const path = require('path');
const app = express();
const tasksRoutes = require('./routes/tasks-api');
require('dotenv').config();

// Middleware to parse JSON
app.use(express.json());

// API routes
app.use('/api/tasks', tasksRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
