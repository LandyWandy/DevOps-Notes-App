import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ name: '', description: '', status: '' });

  const addTask = () => {
    if (newTask.name && newTask.description) {
      setTasks([...tasks, { ...newTask, status: 'Pending' }]);
      setNewTask({ name: '', description: '', status: '' });
    }
  };

  const updateTaskStatus = (index, newStatus) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Task Manager</h1>
        <div>
          <input
            type="text"
            value={newTask.name}
            onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
            placeholder="Task Name"
          />
          <input
            type="text"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            placeholder="Task Description"
          />
          <button onClick={addTask}>Add Task</button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <div className="task-detail">
                <strong>Task Name:</strong> {task.name}<br/>
                <strong>Task Description:</strong> {task.description}<br/>
                <strong>Status:</strong> {task.status}
              </div>
              <div className="buttons">
                <button onClick={() => deleteTask(index)}>Delete</button>
                {task.status !== 'Completed' && (
                  <button onClick={() => updateTaskStatus(index, 'Completed')}>
                    Mark as Completed
                  </button>
                )}
                {task.status !== 'Pending' && (
                  <button onClick={() => updateTaskStatus(index, 'Pending')}>
                    Mark as Pending
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
