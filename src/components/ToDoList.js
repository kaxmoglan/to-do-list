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
        />
      ))}
    </ul>
  );
};

export default ToDoList;
