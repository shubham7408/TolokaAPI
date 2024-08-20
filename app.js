// app.js
const express = require('express');
const app = express();
const taskRoutes = require("./routes/taskRoutes");

// Middleware
app.use(express.json());

// Routes
app.use('/api/tasks', taskRoutes);

// Export the app
module.exports = app;
