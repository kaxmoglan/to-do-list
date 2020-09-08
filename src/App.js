import React, { useState } from "react";
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

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <Form
        input={input}
        setInput={setInput}
        toDoList={toDoList}
        setToDoList={setToDoList}
      />

      <ToDoList
        toDoList={toDoList}
        setToDoList={setToDoList}
        editToDo={editToDo}
      />
    </div>
  );
}

export default App;
