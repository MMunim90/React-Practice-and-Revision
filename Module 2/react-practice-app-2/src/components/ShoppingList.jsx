import React, { useState } from "react";

const ShoppingList = () => {
  const [list, setList] = useState([
    "Milk",
    "Soap",
    "Body Spray",
    "Light",
    "Potato",
  ]);

  const handleRemoveItem = (item) => {
    console.log(item);
    const newShoppingList = list.filter((listItem) => listItem != item)

    console.log(newShoppingList);
    setList(newShoppingList);
  }

  const handleAdd = (newItem) => {
    // setList([...list, newItem]);
    setList((prevList) => [...prevList, newItem]);
  }
  return (
    <div className="shopping-list">
      <h1>Shopping List: </h1>

      <button onClick={() => handleAdd("salt")}>Salt</button>
      <button onClick={() => handleAdd("oil")}>Oil</button>

      <div className="items-parent">
        {list.map((item, index) => {
          return <h2 key={index} onClick={() => handleRemoveItem(item)}>{item}</h2>;
        })}
      </div>
    </div>
  );
};

export default ShoppingList;
