import React from "react";
import Button from "../Button/Button";
import SpecifyQuantity from "../SpecifyQuantity/SpecifyQuantity";
import "./featured-product-info.sass";
import fixPrice from "./fixPrice";

const FeaturedProductInfo = (props) => {
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
    productPriceClasses,
    buttonData,
  } = customClasses;

  const { buttonColor, buttonDestination } = buttonData;
  return (
    <div>
      {isProductPage && isNewProduct ? (
        <div className={`featured-product-info col ${containerClass}`}>
          <p className={`overline ${newProductIntroClasses}`}>New Product</p>
          <h1 className={headerClasses}>{name}</h1>
          <p className={productDescriptionClasses}>{description}</p>
          <p className={productPriceClasses}>{`${fixPrice(price)}`}</p>
          <div className="purchase-buttons row">
            {" "}
            <SpecifyQuantity />
            <Button
              buttonText="Add to cart"
              className={`button-${buttonColor}`}
              buttonDestination={buttonDestination}
            />
          </div>
        </div>
      ) : isProductPage ? (
        <div className={`featured-product-info col ${containerClass}`}>
          <h1 className={headerClasses}>{name}</h1>
          <p className={productDescriptionClasses}>{description}</p>
          <p className={productPriceClasses}>{`${fixPrice(price)}`}</p>
          <div className="purchase-buttons row">
            {" "}
            <SpecifyQuantity />
            <Button
              buttonText="Add to cart"
              className={`button-${buttonColor}`}
              buttonDestination={buttonDestination}
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
    </div>
  );
};
export default FeaturedProductInfo;
