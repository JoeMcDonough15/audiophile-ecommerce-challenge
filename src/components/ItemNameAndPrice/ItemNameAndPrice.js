import React from "react";
import fixPrice from "../../fixPrice";
import "./item-name-and-price.sass";

const ItemNameAndPrice = (props) => {
  const { product } = props;
  const { abbreviatedName, price } = product;
  return (
    <div className="col item-name-and-price">
      <p className="item-name">{abbreviatedName}</p>
      <p className="item-price">{fixPrice(price)}</p>
    </div>
  );
};

export default ItemNameAndPrice;
