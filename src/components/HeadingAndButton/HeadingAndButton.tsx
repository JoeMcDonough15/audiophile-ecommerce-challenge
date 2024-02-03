import Button from "../Button/Button";

interface ButtonData {
  buttonColor: string;
  buttonDestination: string;
}
interface Props {
  buttonData: ButtonData;
  productName: string;
  isHomeFeatureTwo?: boolean;
  isHomeFeatureThree?: boolean;
  isRelatedProduct?: boolean;
}

const HeadingAndButton = ({
  buttonData,
  productName,
  isHomeFeatureTwo,
  isHomeFeatureThree,
  isRelatedProduct,
}: Props) => {
  const { buttonColor, buttonDestination } = buttonData;
  return (
    <div
      className={
        isHomeFeatureTwo
          ? "featured-product-info col home-feature-two-info"
          : isHomeFeatureThree
          ? "featured-product-info col home-feature-three-info"
          : "featured-product-info col related-product-info"
      }
    >
      <h4
        className={
          isRelatedProduct
            ? "related-product-info-header black-text"
            : "black-text"
        }
      >
        {productName}
      </h4>
      <Button
        buttonText="see product"
        className={`button-${buttonColor}`}
        buttonDestination={buttonDestination}
      />
    </div>
  );
};

export default HeadingAndButton;
