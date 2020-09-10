import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import ToDo from "./ToDo";

const ToDoList = (props) => {
  return (
    <ul className={`toDoList ${props.theme}`}>
      <TransitionGroup className="toDoList">
        {props.filteredList.map((item) => (
          <CSSTransition
            key={item.id}
            timeout={500}
            classNames="toDoList__item"
          >
            <ToDo
              item={item}
              toDoList={props.toDoList}
              setToDoList={props.setToDoList}
              theme={props.theme}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ToDoList;
