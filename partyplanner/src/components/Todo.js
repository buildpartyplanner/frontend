import React from "react";

const Todo = props => {
  return (
    <div className="todo">
      <h3>{props.todo.item}</h3>
    </div>
  );
};

export default Todo;
