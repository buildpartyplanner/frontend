import React from "react";
import Todo from "./Todo";

const Todos = props => {
  return (
    <div className="todos">
      <h1>Todo List</h1>
      <ul>
        {props.todos.map(todo => {
          return <Todo todo={todo} />;
        })}
      </ul>
    </div>
  );
};

export default Todos;
