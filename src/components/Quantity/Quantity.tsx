import React from "react";
import "./quantity.sass";

interface Props {
  customClass?: string;
  quantity: number;
  withTimes?: boolean;
}

const Quantity = ({ customClass, quantity, withTimes }: Props) => {
  return withTimes ? (
    <p
      className={
        customClass
          ? `quantity quantity-row ${customClass}`
          : "quantity-row quantity"
      }
    >
      {" "}
      <span className="quantity-with-times">{quantity}</span>
      <span className="quantity-times">x</span>
    </p>
  ) : (
    <p className="quantity">
      <span>{quantity}</span>
    </p>
  );
};

export default Quantity;
