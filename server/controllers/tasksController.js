const pool = require('../db/db'); 

const tasksController = {
  // Create a new task
  createTask: async (req, res) => {
    const { name, description, status } = req.body;
    try {
      const newTask = await pool.query(
        "INSERT INTO tasks (name, description, status) VALUES ($1, $2, $3) RETURNING *",
        [name, description, status || 'Pending']
      );
      res.json(newTask.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  },

  // Get all tasks
  getAllTasks: async (req, res) => {
    try {
      const allTasks = await pool.query("SELECT * FROM tasks");
      res.json(allTasks.rows);
    } catch (err) {
      console.error(err.message);
    }
  },

  // Get a specific task by ID
  getTaskById: async (req, res) => {
    const { id } = req.params;
    try {
      const task = await pool.query("SELECT * FROM tasks WHERE id = $1", [id]);
      res.json(task.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  },

  // Update a task
  updateTask: async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
      const updatedTask = await pool.query(
        "UPDATE tasks SET status = $1 WHERE id = $2 RETURNING *",
        [status, id]
      );
      res.json(updatedTask.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  },
  

  // Delete a task
  deleteTask: async (req, res) => {
    const { id } = req.params;
    try {
      await pool.query("DELETE FROM tasks WHERE id = $1", [id]);
      res.json("Task was deleted!");
    } catch (err) {
      console.error(err.message);
    }
  }
};

module.exports = tasksController;
