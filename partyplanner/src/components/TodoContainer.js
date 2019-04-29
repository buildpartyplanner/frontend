import React from "react";
// import sampleData from "../sampleData";
import Todos from "./Todos";

const TodoContainer = props => {
  console.log(props.sampleData);
  return (
    <div>
      {props.sampleData.map(sample => (
        <ul>
          <li>hi</li>
        </ul>
      ))}
    </div>
  );
};

export default TodoContainer;
