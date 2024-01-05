import React from "react";
import "./specify-quantity.sass";

const SpecifyQuantity = () => {
  return (
    <div className="quantity-container">
      <div className="quantity-buttons-container">
        <span className="button-minus">-</span>
        <span className="quantity">1</span>
        <span className="button-plus">+</span>
      </div>
    </div>
  );
};

export default SpecifyQuantity;
