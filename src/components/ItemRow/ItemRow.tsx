import ImageSlab from "../ImageSlab/ImageSlab";
import ItemNameAndPrice from "../ItemNameAndPrice/ItemNameAndPrice";
import Quantity from "../Quantity/Quantity";
import SpecifyQuantity from "../SpecifyQuantity/SpecifyQuantity";
import { ItemToPurchase } from "../Context/CartContext";
import "./item-in-cart.sass";

interface Props {
  itemData: ItemToPurchase;
  withSpecifyQuantity?: boolean;
}
const ItemRow = ({ itemData, withSpecifyQuantity }: Props): JSX.Element => {
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
      <SpecifyQuantity quantity={quantity} />
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
