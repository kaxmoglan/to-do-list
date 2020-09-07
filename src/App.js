import React, { useState } from "react";
import "./App.css";

// Components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  // State
  const [input, setInput] = useState("");
  const [toDoList, setToDoList] = useState([]);

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <Form
        input={input}
        setInput={setInput}
        toDoList={toDoList}
        setToDoList={setToDoList}
      />

      <ToDoList toDoList={toDoList} />
    </div>
  );
}

export default App;
