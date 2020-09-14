import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";

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
      editToDo(props.item.id, newName);
      setIsEditing(false);
    }
  };

  const editToDo = (id, newName) => {
    const editedToDoList = props.toDoList.map((todo) => {
      if (id === todo.id) {
        return { ...todo, title: newName };
      }
      return todo;
    });
    props.setToDoList(editedToDoList);
  };

  const liClass = () => {
    const className = `toDoList__item ${props.theme}`;
    if (props.item.completed) {
      return `toDoList__item ${props.theme} completed`;
    }
    return className;
  };

  // View Templates
  const viewTemplate = (
    <>
      <i className={`fas fa-sort ${props.theme}`}></i>
      <p
        className={
          props.item.completed
            ? `toDoList__item-title ${props.theme} completed`
            : `toDoList__item-title ${props.theme}`
        }
      >
        {props.item.title}
      </p>
      <div className={`btn-group ${props.theme}`}>
        <button
          className={`viewBtn edit ${props.theme}`}
          onClick={() => setIsEditing(true)}
        >
          <i className="far fa-edit"></i>
        </button>
        <button
          className={`viewBtn trash ${props.theme}`}
          onClick={handleDelete}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
        <button
          className={
            props.item.completed
              ? `viewBtn check ${props.theme} completed`
              : `viewBtn check ${props.theme}`
          }
          onClick={handleCompleted}
        >
          <i className="far fa-check-square"></i>
        </button>
      </div>
    </>
  );

  const editTemplate = (
    <>
      <i className={`fas fa-sort ${props.theme}`}></i>
      <form className={`${props.theme}`} onSubmit={handleEditSubmit}>
        <input
          value={newName}
          id="todo-edit"
          className={`${props.theme}`}
          type="text"
          onChange={handleEditInput}
          autoFocus
        />
        <div className={`btn-group ${props.theme}`}>
          <button
            className={`editBtn cancel ${props.theme}`}
            type="button"
            onClick={handleEditCancel}
          >
            <i className="far fa-times-circle"></i>
          </button>
          <button className={`editBtn submit ${props.theme}`} type="submit">
            <i className="far fa-check-circle"></i>
          </button>
        </div>
      </form>
    </>
  );

  return (
    <Draggable
      key={props.index}
      draggableId={props.index + ""}
      index={props.index}
    >
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={liClass()}
        >
          {isEditing ? editTemplate : viewTemplate}
        </li>
      )}
    </Draggable>
  );
};

export default ToDo;
