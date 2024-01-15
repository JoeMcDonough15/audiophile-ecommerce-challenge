import React from "react";
import ImageSlab from "../ImageSlab/ImageSlab";
import ItemNameAndPrice from "../ItemNameAndPrice/ItemNameAndPrice";
import Quantity from "../Quantity/Quantity";
import SpecifyQuantity from "../SpecifyQuantity/SpecifyQuantity";
import "./item-in-cart.sass";

// SummaryDetails component will call this ItemInCart component as many times as there are items in the cart

const ItemInCart = (props) => {
  const { itemData, withSpecifyQuantity } = props;
  console.log("item data:", itemData);
  const { quantity, product, imageData } = itemData;
  const { imageSrc, imageAltText } = imageData;
  return withSpecifyQuantity ? (
    <div className="row item-in-cart">
      <ImageSlab
        slabSize="thumbnail"
        imageData={{
          imageSrc: imageSrc,
          imageAltText: imageAltText,
        }}
      />
      <ItemNameAndPrice product={product} />
      <SpecifyQuantity />
    </div>
  ) : (
    <div className="row item-in-cart">
      {" "}
      <div className="item-image-and-details row">
        <ImageSlab
          slabSize="thumbnail"
          imageData={{
            imageSrc: imageSrc,
            imageAltText: imageAltText,
          }}
        />
        <ItemNameAndPrice product={product} />
      </div>
      <Quantity quantity={quantity} withTimes />
    </div>
  );
};

export default ItemInCart;
