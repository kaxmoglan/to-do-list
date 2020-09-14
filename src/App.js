import React, { useState } from "react";
import "./App.css";

// Components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import Filter from "./components/Filter";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  // State
  const [input, setInput] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredList, setFilteredList] = useState([]);
  const [filterBtnClass, setFilterBtnClass] = useState({
    all: "__active",
    active: "",
    completed: "",
  });
  const [theme, setTheme] = useState("theme_darkblue");

  return (
    <div className={`App ${theme}`}>
      <h1 className={`title ${theme}`}>Obligatory React To-Do List</h1>
      <Form
        input={input}
        setInput={setInput}
        toDoList={toDoList}
        setToDoList={setToDoList}
        theme={theme}
      />
      <Filter
        filter={filter}
        setFilter={setFilter}
        filterBtnClass={filterBtnClass}
        setFilterBtnClass={setFilterBtnClass}
        setFilteredList={setFilteredList}
        toDoList={toDoList}
        theme={theme}
      />

      <ToDoList
        toDoList={toDoList}
        setToDoList={setToDoList}
        filteredList={filteredList}
        setFilteredList={setFilteredList}
        theme={theme}
      />

      <ThemeSwitcher theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
