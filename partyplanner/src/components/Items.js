import React from "react";

const Items = props => {
  return (
    <div className="todo">
      <h3>{props.item.item}</h3>
    </div>
  );
};

export default Items;
