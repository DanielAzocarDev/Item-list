import React from "react";

const ItemList = ({ items, deleteItem }) => {
  const listItems = items.length ? (
    items.map((item) => {
      return (
        <div className="item" onClick={() => deleteItem(item.id)}>
          <h3>{item.title}</h3>
          <span>Price: {item.price}</span>
          <span>Cost: {item.cost}</span>
          <span>Units: {item.units}</span>
        </div>
      );
    })
  ) : (
    <p>There is no Item</p>
  );
  return <div>{listItems}</div>;
};

export default ItemList;
