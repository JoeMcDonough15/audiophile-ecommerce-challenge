import React from "react";
import "./product-details.sass";

interface Props {
  detailsText: string;
}

const ProductDetails = ({ detailsText }: Props) => {
  return (
    <div className="product-details col">
      <h5 className="black-text">Features</h5>
      <div className="product-details-text col">
        <p className="details-text">{detailsText}</p>
      </div>
    </div>
  );
};

export default ProductDetails;