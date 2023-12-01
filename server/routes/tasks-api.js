const express = require('express');
const router = express.Router();

const tasksController = require('../controllers/tasksController');

// Create a new task
router.post('/', tasksController.createTask);

// Retrieve all tasks
router.get('/', tasksController.getAllTasks);

// Retrieve a single task by id
router.get('/:id', tasksController.getTaskById);

// Update a task by id
router.put('/:id', tasksController.updateTask);

// Delete a task by id
router.delete('/:id', tasksController.deleteTask);

module.exports = router;
