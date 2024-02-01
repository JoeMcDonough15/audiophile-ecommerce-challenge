import React from "react";
import ImageSlab from "../ImageSlab/ImageSlab";
import ItemNameAndPrice from "../ItemNameAndPrice/ItemNameAndPrice";
import Quantity from "../Quantity/Quantity";
import SpecifyQuantity from "../SpecifyQuantity/SpecifyQuantity";
import "./item-in-cart.sass";

interface FeaturedProductObject {
  id: number;
  slug: string;
  name: string;
  abbreviatedName: string;
  image: { mobile: string; tablet: string; desktop: string };
  category: string;
  categoryImage: { mobile: string; tablet: string; desktop: string };
  isNewProduct: boolean;
  price: number;
  description: string;
  teaserDescription?: string;
  features: string;
  includes: { quantity: number; item: string }[];
  gallery: {
    first: { mobile: string; tablet: string; desktop: string };
    second: { mobile: string; tablet: string; desktop: string };
    third: { mobile: string; tablet: string; desktop: string };
  };
  others: {
    slug: string;
    name: string;
    image: { mobile: string; tablet: string; desktop: string };
  }[];
}

interface CartImageData {
  imageSrc: string;
  imageAltText: string;
  className?: string;
}

interface CartItemData {
  quantity: number;
  product: FeaturedProductObject;
  imageData: CartImageData;
}

interface Props {
  itemData: CartItemData;
  withSpecifyQuantity?: boolean;
}
const ItemInCart = ({ itemData, withSpecifyQuantity }: Props): JSX.Element => {
  const { quantity, product, imageData } = itemData;
  const { imageSrc, imageAltText } = imageData;
  return withSpecifyQuantity ? (
    <div className="row item-in-cart with-specify-quantity">
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
