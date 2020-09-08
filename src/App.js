import React, { useState, useEffect } from "react";
import "./App.css";

import { nanoid } from "nanoid";

// Components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  // State
  const [input, setInput] = useState("");
  const [toDoList, setToDoList] = useState([
    {
      title: "one",
      completed: false,
      id: nanoid(),
    },
    {
      title: "two",
      completed: true,
      id: nanoid(),
    },
    {
      title: "three",
      completed: false,
      id: nanoid(),
    },
  ]);
  const [filter, setFilter] = useState("all");
  const [filteredList, setFilteredList] = useState([]);

  // Edit To Do Function
  const editToDo = (id, newName) => {
    const editedToDoList = toDoList.map((todo) => {
      if (id === todo.id) {
        return { ...todo, title: newName };
      }
      return todo;
    });
    setToDoList(editedToDoList);
  };

  // Filter
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    switch (filter) {
      case "completed":
        setFilteredList(toDoList.filter((todo) => todo.completed === true));
        break;
      case "active":
        setFilteredList(toDoList.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredList(toDoList);
    }
  }, [filter, toDoList]);

  return (
    <div className="App">
      <h1 id="title">Obligatory React To-Do List</h1>
      <Form
        input={input}
        setInput={setInput}
        toDoList={toDoList}
        setToDoList={setToDoList}
      />
      <div className="filter">
        <ul>
          <li>
            <button value="all" className="filter-btn" onClick={handleFilter}>
              All
            </button>
          </li>
          <li>
            <button
              value="active"
              className="filter-btn"
              onClick={handleFilter}
            >
              Active
            </button>
          </li>
          <li>
            <button
              value="completed"
              className="filter-btn"
              onClick={handleFilter}
            >
              Completed
            </button>
          </li>
        </ul>
      </div>
      <ToDoList
        toDoList={toDoList}
        setToDoList={setToDoList}
        editToDo={editToDo}
        filteredList={filteredList}
      />
    </div>
  );
}

export default App;
