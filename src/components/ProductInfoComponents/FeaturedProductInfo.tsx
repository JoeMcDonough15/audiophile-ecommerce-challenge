interface Props {
  productName: string;
  productDescription: string;
  headerClass: string;
  descriptionClass: string;
}

const FeaturedProductInfo = ({
  productName,
  productDescription,
  headerClass,
  descriptionClass,
}: Props): JSX.Element => {
  return (
    <>
      <h1 className={`white-text ${headerClass}`}>{productName}</h1>
      <p className={descriptionClass}>{productDescription}</p>
    </>
  );
};
export default FeaturedProductInfo;
