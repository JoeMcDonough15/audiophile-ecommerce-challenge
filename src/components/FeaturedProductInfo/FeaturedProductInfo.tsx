import React from "react";
import Button from "../Button/Button";
import SpecifyQuantity from "../SpecifyQuantity/SpecifyQuantity";
import "./featured-product-info.sass";
import fixPrice from "../../fixPrice";

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

interface CustomClasses {
  containerClass?: string;
  newProductIntroClasses?: string;
  headerClasses: string;
  productDescriptionClasses?: string;
  buttonData: {
    buttonColor: string;
    buttonDestination?: string;
  };
}

interface Props {
  isProductPage?: boolean;
  isCategoryPage?: boolean;
  featuredProduct: FeaturedProductObject;
  includesProductDescription?: boolean;
  teaserOnly?: boolean;
  customHeaderText?: boolean;
  customClasses: CustomClasses;
}

const FeaturedProductInfo = (props: Props) => {
  const {
    isProductPage,
    isCategoryPage,
    featuredProduct,
    includesProductDescription,
    teaserOnly,
    customHeaderText,
    customClasses,
  } = props;

  const { name, teaserDescription, description, price, isNewProduct } =
    featuredProduct;

  const {
    containerClass,
    newProductIntroClasses,
    headerClasses,
    productDescriptionClasses,
    buttonData,
  } = customClasses;

  const { buttonColor, buttonDestination } = buttonData;
  return (
    <>
      {isProductPage && isNewProduct ? (
        <div className={`featured-product-info col ${containerClass}`}>
          <p className={`overline ${newProductIntroClasses}`}>New Product</p>
          <h1 className={headerClasses}>{name}</h1>
          <p className={productDescriptionClasses}>{description}</p>
          <p className="product-price black-text">{`${fixPrice(price)}`}</p>
          <div className="purchase-buttons row">
            {" "}
            <SpecifyQuantity />
            <Button
              buttonText="Add to cart"
              className={`button-${buttonColor}`}
            />
          </div>
        </div>
      ) : isProductPage ? (
        <div className={`featured-product-info col ${containerClass}`}>
          <h1 className={headerClasses}>{name}</h1>
          <p className={productDescriptionClasses}>{description}</p>
          <p className="product-price black-text">{`${fixPrice(price)}`}</p>
          <div className="purchase-buttons row">
            {" "}
            <SpecifyQuantity />
            <Button
              buttonText="Add to cart"
              className={`button-${buttonColor}`}
            />
          </div>
        </div>
      ) : includesProductDescription && isNewProduct ? (
        <div
          className={
            isCategoryPage
              ? "featured-product-info col"
              : `featured-product-info col ${containerClass}`
          }
        >
          <p className={`overline ${newProductIntroClasses}`}>New Product</p>
          <h1 className={`${headerClasses}`}>{name}</h1>
          <p className={productDescriptionClasses}>
            {teaserOnly ? teaserDescription : description}
          </p>
          <Button
            buttonText="see product"
            className={`button-${buttonColor}`}
            buttonDestination={buttonDestination}
          />
        </div>
      ) : includesProductDescription ? (
        <div
          className={
            isCategoryPage
              ? "featured-product-info col"
              : `featured-product-info col ${containerClass}`
          }
        >
          <h1 className={`${headerClasses}`}>{name}</h1>
          <p className={productDescriptionClasses}>{description}</p>
          <Button
            buttonText="see product"
            className={`button-${buttonColor}`}
            buttonDestination={buttonDestination}
          />
        </div>
      ) : (
        <div className={`featured-product-info col ${containerClass}`}>
          <h4 className={`${headerClasses}`}>
            {customHeaderText ? customHeaderText : name}
          </h4>
          <Button
            buttonText="see product"
            className={`button-${buttonColor}`}
            buttonDestination={buttonDestination}
          />
        </div>
      )}
    </>
  );
};
export default FeaturedProductInfo;
