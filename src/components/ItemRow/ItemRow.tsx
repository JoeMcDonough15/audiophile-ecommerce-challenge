import ImageSlab from "../ImageSlab/ImageSlab";
import ItemNameAndPrice from "../ItemNameAndPrice/ItemNameAndPrice";
import Quantity from "../Quantity/Quantity";
import { CartContext, ItemToPurchase } from "../Context/CartContext";
import "./item-row.sass";
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
    <div className="row item-row with-specify-quantity">
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
    <div className="row item-row">
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
