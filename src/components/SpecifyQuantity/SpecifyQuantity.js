import React from "react";
import Quantity from "../Quantity/Quantity";
import "./specify-quantity.sass";

const SpecifyQuantity = () => {
  return (
    <div className="quantity-container">
      <div className="quantity-buttons-container">
        <span className="button-minus">-</span>
        <Quantity quantity={1} />
        <span className="button-plus">+</span>
      </div>
    </div>
  );
};

export default SpecifyQuantity;
