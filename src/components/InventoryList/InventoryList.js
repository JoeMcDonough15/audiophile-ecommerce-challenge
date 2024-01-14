import React from "react";
import Quantity from "../Quantity/Quantity";
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
            <Quantity
              quantity={listItem.quantity}
              customClass="dark-orange-text"
              withTimes
            />
            <p className="inventory-item-text">{listItem.item}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default InventoryList;
