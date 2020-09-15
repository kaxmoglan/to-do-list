import React, { useState, useEffect } from "react";
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
  const [menu, setMenu] = useState("menu_closed");

  // RUN ONCE when the app starts
  useEffect(() => {
    getLocalTodos();
  }, []);

  // Use Effect
  useEffect(() => {
    // filterHandler();
    saveLocalTodos();
  }, [filteredList, toDoList]);

  // Save to local
  const saveLocalTodos = () => {
    localStorage.setItem("to-do-list", JSON.stringify(toDoList));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("to-do-list") === null) {
      localStorage.setItem("to-do-list", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("to-do-list"));
      setToDoList(todoLocal);
    }
  };

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

      <ThemeSwitcher
        theme={theme}
        setTheme={setTheme}
        menu={menu}
        setMenu={setMenu}
      />
    </div>
  );
}

export default App;
