import React from "react";
import Button from "../Button/Button";
import SpecifyQuantity from "../SpecifyQuantity/SpecifyQuantity";
import "./featured-product-info.sass";

const FeaturedProductInfo = (props) => {
  const {
    isProductPageDetails,
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
      {isProductPageDetails && newProduct ? (
        <div className={`featured-product-info ${containerClasses}`}>
          <p className={newProductIntroClasses}>New Product</p>
          <h1 className={headerClasses}>
            {customHeaderText ? customHeaderText : name}
          </h1>
          <p className={productDescriptionClasses}>
            {teaserOnly ? teaserDescription : description}
          </p>
          <p className="product-price">{price}</p>
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
      ) : isProductPageDetails ? (
        <div className={`featured-product-info ${containerClasses}`}>
          <h1 className={headerClasses}>
            {customHeaderText ? customHeaderText : name}
          </h1>
          <p className={productDescriptionClasses}>
            {teaserOnly ? teaserDescription : description}
          </p>
          <p className="product-price">{price}</p>
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
        <div className={`featured-product-info ${containerClasses}`}>
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
        <div className={`featured-product-info ${containerClasses}`}>
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
        <div className={`featured-product-info ${containerClasses}`}>
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
