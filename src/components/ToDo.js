import React from "react";

const ToDo = (props) => {
  return (
    <div>
      <li>{props.title}</li>
      <button>
        <i className="far fa-check-square"></i>
      </button>
      <button>
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
};

export default ToDo;
