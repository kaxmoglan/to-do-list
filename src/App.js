import React, { useState, useEffect } from "react";
import "./App.css";

import { nanoid } from "nanoid";

// Components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import Filter from "./components/Filter";

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
  const [filterBtnClass, setFilterBtnClass] = useState({
    all: "__active",
    active: "",
    completed: "",
  });

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

  return (
    <div className="App">
      <h1 id="title">Obligatory React To-Do List</h1>
      <Form
        input={input}
        setInput={setInput}
        toDoList={toDoList}
        setToDoList={setToDoList}
      />
      <Filter
        filter={filter}
        setFilter={setFilter}
        filterBtnClass={filterBtnClass}
        setFilterBtnClass={setFilterBtnClass}
        filteredList={filteredList}
        setFilteredList={setFilteredList}
        toDoList={toDoList}
      />

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
