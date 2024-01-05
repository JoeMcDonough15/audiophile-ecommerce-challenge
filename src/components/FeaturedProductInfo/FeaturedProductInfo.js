import React from "react";
import Button from "../Button/Button";
import SpecifyQuantity from "../SpecifyQuantity/SpecifyQuantity";
import "./featured-product-info.sass";

const FeaturedProductInfo = (props) => {
  const {
    isProductPage,
    featuredProduct,
    newProduct,
    featuredProductDescription,
    teaserOnly,
    customHeaderText,
    customClasses,
  } = props;
  const { name, teaserDescription, description, price } = featuredProduct;
  const {
    containerClasses,
    newProductIntroClasses,
    headerClasses,
    productDescriptionClasses,
    buttonData,
  } = customClasses;

  const { buttonColor, buttonDestination } = buttonData;
  return (
    <div>
      {isProductPage && newProduct ? (
        <div
          className={
            containerClasses
              ? `product-page-info featured-product-info col ${containerClasses}`
              : "product-page-info featured-product-info col"
          }
        >
          <p className={newProductIntroClasses}>New Product</p>
          <h1 className={headerClasses}>
            {customHeaderText ? customHeaderText : name}
          </h1>
          <p className={productDescriptionClasses}>
            {teaserOnly ? teaserDescription : description}
          </p>
          <p className="product-price black-text">{`$${price}`}</p>
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
        <div
          className={
            containerClasses
              ? `product-page-info featured-product-info col ${containerClasses}`
              : "product-page-info featured-product-info col"
          }
        >
          <h1 className={headerClasses}>
            {customHeaderText ? customHeaderText : name}
          </h1>
          <p className={productDescriptionClasses}>
            {teaserOnly ? teaserDescription : description}
          </p>
          <p className="product-price black-text">{`$${price}`}</p>
          <div className="purchase-buttons">
            {" "}
            <SpecifyQuantity />
            <Button
              buttonText="Add to cart"
              className={`button-${buttonColor}`}
              buttonDestination={buttonDestination}
            />
          </div>
        </div>
      ) : newProduct && featuredProductDescription ? (
        <div
          className={
            containerClasses
              ? `featured-product-info col ${containerClasses}`
              : "featured-product-info col"
          }
        >
          <p className={newProductIntroClasses}>New Product</p>
          <h1 className={headerClasses}>
            {customHeaderText ? customHeaderText : name}
          </h1>
          <p className={productDescriptionClasses}>
            {teaserOnly ? teaserDescription : description}
          </p>
          <Button
            buttonText="see product"
            className={`button-${buttonColor}`}
            buttonDestination={buttonDestination}
          />
        </div>
      ) : featuredProductDescription ? (
        <div
          className={
            containerClasses
              ? `featured-product-info col ${containerClasses}`
              : "featured-product-info col"
          }
        >
          <h1 className={headerClasses}>
            {customHeaderText ? customHeaderText : name}
          </h1>
          <p className={productDescriptionClasses}>
            {teaserOnly ? teaserDescription : description}
          </p>
          <Button
            buttonText="see product"
            className={`button-${buttonColor}`}
            buttonDestination={buttonDestination}
          />
        </div>
      ) : (
        <div
          className={
            containerClasses
              ? `featured-product-info col ${containerClasses}`
              : "featured-product-info col"
          }
        >
          <h4 className={headerClasses}>
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
