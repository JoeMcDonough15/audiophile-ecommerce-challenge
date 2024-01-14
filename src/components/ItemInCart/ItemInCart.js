import React from "react";
import ImageSlab from "../ImageSlab/ImageSlab";
import ItemAndPriceCol from "../ItemAndPriceCol/ItemAndPriceCol";
import Quantity from "../Quantity/Quantity";
import SpecifyQuantity from "../SpecifyQuantity/SpecifyQuantity";
import data from "../../data.json";

// grab products from json
// import image (I think one image file will suffice since the thumbnail on the ImageSlab is sized to 64px x 64px at all device sizes)

const ItemInCart = (props) => {
  const { withSpecifyQuantity } = props;
  return (
    <div className="row item-in-cart">
      <ImageSlab
        deviceSize="one-size"
        imageData={{ imageSrc: "", imageAltText: "" }}
      />
      <ItemAndPriceCol product={product} />
      {withSpecifyQuantity ? <SpecifyQuantity /> : <Quantity withTimes />}
    </div>
  );
};

export default ItemInCart;

// SummaryDetails component will call this ItemInCart component as many times as there are items in the cart
