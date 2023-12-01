import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ name: '', description: '', status: '' });

  const addTask = async () => {
    if (newTask.name && newTask.description) {
      try {
        const response = await fetch('/api/tasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newTask),
        });
        const data = await response.json();
        setTasks([...tasks, data]);
      } catch (error) {
        console.error('Error:', error);
      }
      setNewTask({ name: '', description: '', status: '' });
    }
  };

  const updateTaskStatus = async (taskId, newStatus) => {
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });
      if (response.ok) {
        const updatedTask = await response.json();
        setTasks(tasks.map(task => 
          task.id === taskId ? updatedTask : task
        ));
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  
  const deleteTask = async (taskId) => {
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        setTasks(tasks.filter(task => task.id !== taskId));
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('/api/tasks');
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);


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
          {tasks.map((task) => (
            <li key={task.id}>
              <div className="task-detail">
                <strong>Task Name:</strong> {task.name}<br/>
                <strong>Task Description:</strong> {task.description}<br/>
                <strong>Status:</strong> {task.status}
              </div>
              <div className="buttons">
                <button onClick={() => deleteTask(task.id)}>Delete</button>
                {task.status !== 'Completed' && (
                  <button onClick={() => updateTaskStatus(task.id, 'Completed')}>
                    Mark as Completed
                  </button>
                )}
                {task.status !== 'Pending' && (
                  <button onClick={() => updateTaskStatus(task.id, 'Pending')}>
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
