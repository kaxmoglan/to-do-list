import React from "react";

const ToDo = (props) => {
  const handleCompleted = () => {
    props.setToDoList(
      props.toDoList.map((item) => {
        if (item.id === props.item.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const handleDelete = () => {
    props.setToDoList(
      props.toDoList.filter((item) => item.id !== props.item.id)
    );
  };

  return (
    <div className="todo-block">
      <li>{props.title}</li>
      <button onClick={handleCompleted}>
        <i className="far fa-check-square"></i>
      </button>
      <button onClick={handleDelete}>
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
};

export default ToDo;
