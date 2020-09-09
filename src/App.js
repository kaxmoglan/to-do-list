import React, { useState } from "react";
import "./App.css";

import { nanoid } from "nanoid";

// Components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import Filter from "./components/Filter";
import ThemeSwitcher from "./components/ThemeSwitcher";

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
  const [theme, setTheme] = useState("theme_darkblue");

  return (
    <div className={`App ${theme}`} data-theme={theme}>
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
        filteredList={filteredList}
      />

      <ThemeSwitcher />
    </div>
  );
}

export default App;
