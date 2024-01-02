import React from "react";
import Button from "../Button/Button";
import "./featured-product-info.sass";

const FeaturedProductInfo = (props) => {
  const {
    featuredProduct,
    newProduct,
    featuredProductDescription,
    teaserOnly,
    customHeaderText,
    customClasses,
  } = props;
  const { name, teaserDescription, description } = featuredProduct;
  const {
    containerClasses,
    newProductIntroClasses,
    headerClasses,
    productDescriptionClasses,
    buttonData,
  } = customClasses;

  const { buttonColor, buttonText } = buttonData;
  return (
    <div>
      {newProduct && featuredProductDescription ? (
        <div className={`featured-product-info ${containerClasses}`}>
          <p className={newProductIntroClasses}>New Product</p>
          <h1 className={headerClasses}>
            {customHeaderText ? customHeaderText : name}
          </h1>
          <p className={productDescriptionClasses}>
            {teaserOnly ? teaserDescription : description}
          </p>
          <Button buttonText={buttonText} className={`button-${buttonColor}`} />
        </div>
      ) : featuredProductDescription ? (
        <div className={`featured-product-info ${containerClasses}`}>
          <h1 className={headerClasses}>
            {customHeaderText ? customHeaderText : name}
          </h1>
          <p className={productDescriptionClasses}>
            {teaserOnly ? teaserDescription : description}
          </p>
          <Button buttonText={buttonText} className={`button-${buttonColor}`} />
        </div>
      ) : (
        <div className={`featured-product-info ${containerClasses}`}>
          <h4 className={headerClasses}>
            {customHeaderText ? customHeaderText : name}
          </h4>
          <Button buttonText={buttonText} className={`button-${buttonColor}`} />
        </div>
      )}
    </div>
  );
};
export default FeaturedProductInfo;
