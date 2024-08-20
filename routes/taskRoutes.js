// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const taskController = require ("../controllers/taskController");

// Define routes
router.get('/', taskController.getTasks);

module.exports = router;
