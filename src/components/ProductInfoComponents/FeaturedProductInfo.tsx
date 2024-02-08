interface Props {
  productName: string;
  productDescription: string;
  headerClass: string;
  descriptionClass: string;
}

const FeaturedProductInfo = (props: Props): JSX.Element => {
  const { productName, productDescription, headerClass, descriptionClass } =
    props;
  return (
    <>
      <h1 className={`white-text ${headerClass}`}>{productName}</h1>
      <p className={descriptionClass}>{productDescription}</p>
    </>
  );
};
export default FeaturedProductInfo;
