import fixPrice from "../../fixPrice";
import { Product } from "../Context/ProductsContext";
import "./item-name-and-price.sass";

interface Props {
  product: Product;
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
