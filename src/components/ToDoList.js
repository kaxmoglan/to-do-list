import React from "react";

import ToDo from "./ToDo";

const ToDoList = (props) => {
  return (
    <ul>
      {props.toDoList.map((item) => (
        <ToDo
          title={item.title}
          completed={item.completed}
          key={item.id}
          item={item}
          toDoList={props.toDoList}
          setToDoList={props.setToDoList}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
