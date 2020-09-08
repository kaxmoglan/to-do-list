import React from "react";

import ToDo from "./ToDo";

const ToDoList = (props) => {
  return (
    <ul>
      {props.filteredList.map((item) => (
        <ToDo
          title={item.title}
          completed={item.completed}
          key={item.id}
          item={item}
          toDoList={props.toDoList}
          setToDoList={props.setToDoList}
          editToDo={props.editToDo}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
