import React from "react";
import { nanoid } from "nanoid";

const Form = (props) => {
  const handleInput = (e) => {
    props.setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setToDoList([
      ...props.toDoList,
      {
        title: props.input,
        id: nanoid(),
        completed: false,
      },
    ]);
    props.setInput("");
  };

  return (
    <form>
      <input
        value={props.input}
        onChange={handleInput}
        type="text"
        name="input-text"
        id="input-text"
      />
      <button onClick={handleSubmit} type="submit">
        <i className="fas fa-plus"></i>
      </button>
    </form>
  );
};

export default Form;
