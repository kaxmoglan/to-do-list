import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import ToDo from "./ToDo";

const ToDoList = (props) => {
  // DRAG AND DROP REQUIRED FUNCTION
  const onDragEnd = (result) => {
    const { destination, source, reason } = result;

    if (!destination || reason === "CANCEL") {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const newList = props.filteredList;
    const droppedItem = props.filteredList[source.index];

    newList.splice(source.index, 1);
    newList.splice(destination.index, 0, droppedItem);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="dp1">
        {(provided) => (
          <ul
            className={`toDoList ${props.theme}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <TransitionGroup className="toDoList">
              {props.filteredList.map((item, index) => (
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
                    index={index}
                  />
                </CSSTransition>
              ))}
            </TransitionGroup>
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ToDoList;
