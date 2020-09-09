import React, { useEffect } from "react";

const Filter = (props) => {
  const handleFilter = (e) => {
    props.setFilter(e.target.value);
    changeClass(e.target.value);
  };

  const changeClass = (filter) => {
    switch (filter) {
      case "active":
        props.setFilterBtnClass({ all: "", active: "__active", completed: "" });
        break;
      case "completed":
        props.setFilterBtnClass({ all: "", active: "", completed: "__active" });
        break;
      default:
        props.setFilterBtnClass({ all: "__active", active: "", completed: "" });
        break;
    }
  };

  useEffect(() => {
    switch (props.filter) {
      case "completed":
        props.setFilteredList(
          props.toDoList.filter((todo) => todo.completed === true)
        );
        break;
      case "active":
        props.setFilteredList(
          props.toDoList.filter((todo) => todo.completed === false)
        );
        break;
      default:
        props.setFilteredList(props.toDoList);
    }
  }, [props.filter, props.toDoList]);
  return (
    <div className={`filter ${props.theme}`}>
      <ul>
        <li>
          <button
            value="all"
            className={`filter-btn ${props.theme} ${props.filterBtnClass.all}`}
            onClick={handleFilter}
          >
            All
          </button>
        </li>
        <li>
          <button
            value="active"
            className={`filter-btn ${props.theme} ${props.filterBtnClass.active}`}
            onClick={handleFilter}
          >
            Active
          </button>
        </li>
        <li>
          <button
            value="completed"
            className={`filter-btn ${props.theme} ${props.filterBtnClass.completed}`}
            onClick={handleFilter}
          >
            Completed
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
