import ImageSlab from "../ImageSlab/ImageSlab";
import ItemNameAndPrice from "../ItemNameAndPrice/ItemNameAndPrice";
import Quantity from "../Quantity/Quantity";
// import SpecifyQuantity from "../SpecifyQuantity/SpecifyQuantity"; // commented out because I don't want to pass onClicks affecting CartContext into a sub component.
import { CartContext, ItemToPurchase } from "../Context/CartContext";
import "./item-in-cart.sass";
import "../SpecifyQuantity/specify-quantity.sass"; // so that lines 31-47 get the correct styles
import { useContext } from "react";
import ButtonSpecifyQuantity from "../ButtonSpecifyQuantity/ButtonSpecifyQuantity";

interface Props {
  itemData: ItemToPurchase;
  withSpecifyQuantity?: boolean;
}
const ItemRow = ({ itemData, withSpecifyQuantity }: Props): JSX.Element => {
  // @ts-ignore
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);
  const { quantity, product } = itemData;
  const { image } = product;
  const { mobile, imageAltText } = image;
  return withSpecifyQuantity ? (
    <div className="row item-in-cart with-specify-quantity">
      <ImageSlab
        slabSize="thumbnail"
        imageData={{
          imageSrc: mobile,
          imageAltText: imageAltText,
        }}
      />
      <ItemNameAndPrice product={product} />
      <div className="quantity-container">
        <div className="quantity-buttons-container">
          <ButtonSpecifyQuantity
            buttonText="-"
            onClick={() => {
              removeItemFromCart({ product: product, quantity: quantity });
            }}
          />
          <Quantity quantity={quantity} />
          <ButtonSpecifyQuantity
            buttonText="+"
            onClick={() => {
              addItemToCart({ product: product, quantity: 1 });
            }}
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="row item-in-cart">
      {" "}
      <div className="item-image-and-details row">
        <ImageSlab
          slabSize="thumbnail"
          imageData={{
            imageSrc: mobile,
            imageAltText: imageAltText,
          }}
        />
        <ItemNameAndPrice product={product} />
      </div>
      <Quantity quantity={quantity} withTimes />
    </div>
  );
};

export default ItemRow;
