import React, { useState } from "react";
import "./styles.css";

import Header from "./components/header";
import Tasks from "./components/tasks";

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Dentist Appointment",
      day: "October 18th at 2:30pm",
      reminder: true
    },
    {
      id: 2,
      text: "Walk the dog",
      day: "October 17th at 7pm",
      reminder: true
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "October 19th at 5pm",
      reminder: false
    }
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="App">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks listed"
      )}
    </div>
  );
}
