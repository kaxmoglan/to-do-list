import React, { useState } from "react";

const ToDo = (props) => {
  // State
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(props.item.title);

  // Methods
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

  const handleEditInput = (e) => {
    setNewName(e.target.value);
  };

  const handleEditCancel = () => {
    setIsEditing(false);
    setNewName(props.item.title);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (newName.trim().match(/^\S/)) {
      e.preventDefault();
      props.editToDo(props.item.id, newName);
      setNewName("");
      setIsEditing(false);
    }
  };

  // View Templates
  const viewTemplate = (
    <>
      <p className="toDoList__item-title">{props.title}</p>
      <div className="btn-group">
        <button className="viewBtn ellipsis" onClick={() => setIsEditing(true)}>
          <i className="far fa-edit"></i>
        </button>
        <button className="viewBtn" onClick={handleDelete}>
          <i className="fas fa-trash-alt"></i>
        </button>
        <button className="viewBtn" onClick={handleCompleted}>
          <i className="far fa-check-square"></i>
        </button>
      </div>
    </>
  );

  const editTemplate = (
    <>
      <form onSubmit={handleEditSubmit}>
        <label htmlFor="todo-edit">Edit</label>
        <input
          value={newName}
          id="todo-edit"
          type="text"
          onChange={handleEditInput}
          autoFocus
        />
        <button type="button" onClick={handleEditCancel}>
          <i className="far fa-times-circle"></i>
        </button>
        <button type="submit">
          <i className="far fa-check-circle"></i>
        </button>
      </form>
    </>
  );

  return (
    <li className="toDoList__item">
      {isEditing ? editTemplate : viewTemplate}
    </li>
  );
};

export default ToDo;
