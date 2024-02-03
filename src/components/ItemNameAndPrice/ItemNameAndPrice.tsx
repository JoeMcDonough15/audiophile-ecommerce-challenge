import fixPrice from "../../fixPrice";
import "./item-name-and-price.sass";

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
