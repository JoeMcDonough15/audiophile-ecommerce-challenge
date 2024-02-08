import fixPrice from "../../fixPrice";
import { FeaturedProductObject } from "../App";
import "./item-name-and-price.sass";

interface Props {
  product: FeaturedProductObject;
}

const ItemNameAndPrice = ({ product }: Props): JSX.Element => {
  const { abbreviatedName, price } = product;
  return (
    <div className="col item-name-and-price">
      <p className="item-name">{abbreviatedName}</p>
      <p className="item-price">{fixPrice(price)}</p>
    </div>
  );
};

export default ItemNameAndPrice;
