import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInputs, setTaskInputs] = useState(["", "", ""]);

  const handleInputChange = (index, value) => {
    const newInputs = [...taskInputs];
    newInputs[index] = value;
    setTaskInputs(newInputs);
  };

  const addTask = () => {
    if (taskInputs.every(task => task.trim() !== "")) {
      setTasks([...tasks, taskInputs.join(" : ")]);
      setTaskInputs(["", "", ""]);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", padding: "10px", border: "1px solid #ccc" }}>
      <h2>To-Do List</h2>
      {taskInputs.map((task, index) => (
        <input
          key={index}
          type="text"
          value={task}
          onChange={(e) => handleInputChange(index, e.target.value)}
          placeholder={`Enter task ${index + 1}`}
          style={{ display: "block", marginBottom: "5px", padding: "5px", width: "100%" }}
        />
      ))}
      <button onClick={addTask} style={{ padding: "5px", background: "blue", color: "white", border: "none", cursor: "pointer" }}>
        Add
      </button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
