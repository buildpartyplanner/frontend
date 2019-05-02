import React from "react";
import Items from "./Items";
import ShoppingForm from "./ShoppingForm";

const ShoppingList = props => {
  return (
    <div>
      <h1>SHOPPING LIST of things I need to make this party awesome.</h1>
      <ShoppingForm shoppingList={props.sampleData.shoppingList} />
      {props.users.shoppingList.map(item => (
        <Items key={item.item} item={item} />
      ))}
    </div>
  );
};

export default ShoppingList;
