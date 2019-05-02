import React from "react";
// import sampleData from "../sampleData";
import Todo from "./Todo";

const TodoContainer = props => {
  return (
    <div>
      <h1>Things TODO to make this party awesome.</h1>
      {props.users.todos.map(sample => (
        <Todo key={sample.item} sample={sample} />
      ))}
    </div>
  );
};

export default TodoContainer;
