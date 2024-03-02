import fixPrice from "../../fixPrice";

interface Props {
  productName: string;
  productDescription: string;
  headerClass: string;
  descriptionClass: string;
  price?: number;
}

const ProductInfo = ({
  productName,
  productDescription,
  price,
  headerClass,
  descriptionClass,
}: Props): JSX.Element => {
  return (
    <>
      <h1 className={`small-featured-product-header black-text ${headerClass}`}>
        {productName}
      </h1>
      <p className={descriptionClass}>{productDescription}</p>

      {price && (
        <p className="product-price black-text">{`${fixPrice(price)}`}</p>
      )}
    </>
  );
};
export default ProductInfo;
