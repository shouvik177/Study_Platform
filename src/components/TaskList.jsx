import React, { useState, useEffect } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Load tasks from localStorage on mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Function to add a new task
  const addTask = () => {
    if (newTask.trim() === "") return;

    const updatedTasks = [...tasks, { text: newTask, completed: false }];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setNewTask("");
  };

  // Function to mark a task as completed
  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div className="task-container">
      <h2>Pending Tasks</h2>
      <input
        type="text"
        placeholder="Add a new task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.length === 0 ? (
          <p>No pending tasks! 🎉</p>
        ) : (
          tasks.map((task, index) => (
            <li key={index} className={task.completed ? "completed" : ""}>
              <span onClick={() => toggleTask(index)}>
                {task.completed ? "✅ " : "⏳ "} {task.text}
              </span>
              <button onClick={() => deleteTask(index)}>❌</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TaskList;
