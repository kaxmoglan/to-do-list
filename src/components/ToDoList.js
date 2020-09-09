import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import ToDo from "./ToDo";

const ToDoList = (props) => {
  return (
    <ul className="toDoList">
      <TransitionGroup className="toDoList">
        {props.filteredList.map((item) => (
          <CSSTransition
            key={item.id}
            timeout={500}
            classNames="toDoList__item"
          >
            <ToDo
              title={item.title}
              completed={item.completed}
              key={item.id}
              item={item}
              toDoList={props.toDoList}
              setToDoList={props.setToDoList}
              editToDo={props.editToDo}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ToDoList;
