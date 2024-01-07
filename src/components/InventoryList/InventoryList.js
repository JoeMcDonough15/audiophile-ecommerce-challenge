import React from "react";
import "./inventory-list.sass";

const InventoryList = (props) => {
  const { productIncludes } = props;
  let keyCount = 0;
  return (
    <ul className="product-includes-list">
      {productIncludes.map((listItem) => {
        keyCount++;
        return (
          <li key={keyCount} className="row inventory-list-row">
            <p className="inventory-item dark-orange-text inventory-item-one">
              {listItem.quantity}x
            </p>
            <p className="inventory-item inventory-item-two">{listItem.item}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default InventoryList;
