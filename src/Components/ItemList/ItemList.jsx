import React from "react";
import "./ItemList.scss";

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
    <p className="no-items">There is no Item</p>
  );
  return <div className="items-container">{listItems}</div>;
};

export default ItemList;
