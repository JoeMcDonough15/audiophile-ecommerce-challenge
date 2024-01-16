import React from "react";
import Button from "../Button/Button";
import Quantity from "../Quantity/Quantity";
import "./specify-quantity.sass";

const SpecifyQuantity = () => {
  return (
    <div className="quantity-container">
      <div className="quantity-buttons-container">
        <Button className="specify-quantity-button" buttonText="-" />
        <Quantity quantity={1} />
        <Button className="specify-quantity-button" buttonText="+" />
      </div>
    </div>
  );
};

export default SpecifyQuantity;
