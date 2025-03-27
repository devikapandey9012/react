import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task1, setTask1] = useState("");
  const [task2, setTask2] = useState("");
  const [task3, setTask3] = useState("");

  const addTask = () => {
    if (task1.trim() !== "" && task2.trim() !== "" && task3.trim() !== "") {
      setTasks([...tasks, `${task1} : ${task2} : ${task3}`]);
      setTask1("");
      setTask2("");
      setTask3("");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">To-Do List</h2>
      <div className="flex flex-col gap-2 mb-4">
        <input
          type="text"
          value={task1}
          onChange={(e) => setTask1(e.target.value)}
          placeholder="Enter first task"
          className="border p-2 rounded"
        />
        <input
          type="text"
          value={task2}
          onChange={(e) => setTask2(e.target.value)}
          placeholder="Enter second task"
          className="border p-2 rounded"
        />
        <input
          type="text"
          value={task3}
          onChange={(e) => setTask3(e.target.value)}
          placeholder="Enter third task"
          className="border p-2 rounded"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white p-2 rounded mt-2"
        >
          Add
        </button>
      </div>
      
      <ul className="list-disc pl-5">
        {tasks.map((t, index) => (
          <li key={index} className="mb-1">{t}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
