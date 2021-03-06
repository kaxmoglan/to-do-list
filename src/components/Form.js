import React from "react";
import { nanoid } from "nanoid";

const Form = (props) => {
  const handleInput = (e) => {
    props.setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.input.trim().match(/^\S/)) {
      props.setToDoList([
        ...props.toDoList,
        {
          title: props.input,
          id: nanoid(),
          completed: false,
        },
      ]);
      props.setInput("");
    }
  };

  return (
    <form className={`input-form ${props.theme}`}>
      <input
        value={props.input}
        onChange={handleInput}
        type="text"
        name="input-text"
        id="input-text"
        placeholder="New To-Do..."
        className={`input-text ${props.theme}`}
        autoFocus
      />
      <button
        className={`addBtn ${props.theme}`}
        onClick={handleSubmit}
        type="submit"
      >
        <i className="fas fa-plus"></i>
      </button>
    </form>
  );
};

export default Form;
