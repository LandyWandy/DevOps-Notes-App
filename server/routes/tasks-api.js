const express = require('express');
const router = express.Router();

// Assuming you have a tasks controller with appropriate functions
const tasksController = require('../controllers/tasksController');

// Create a new task
router.post('/tasks', tasksController.createTask);

// Retrieve all tasks
router.get('/tasks', tasksController.getAllTasks);

// Retrieve a single task by id
router.get('/tasks/:id', tasksController.getTaskById);

// Update a task by id
router.put('/tasks/:id', tasksController.updateTask);

// Delete a task by id
router.delete('/tasks/:id', tasksController.deleteTask);

module.exports = router;
