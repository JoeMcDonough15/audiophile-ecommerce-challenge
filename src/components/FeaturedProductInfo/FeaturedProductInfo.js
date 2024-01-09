import React from "react";
import Button from "../Button/Button";
import SpecifyQuantity from "../SpecifyQuantity/SpecifyQuantity";
import "./featured-product-info.sass";

// const fixPrice = (price) => {
//   let fixedPrice = "$ ";
//   const priceString = price.toString();
//   if (priceString.length > 3) {
//     fixedPrice += `${priceString[0]},${priceString.slice(1)}`;
//   } else {
//     fixedPrice += priceString;
//   }
//   return fixedPrice;
// };

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

  // const fixedPrice = fixPrice(price);
  // console.log("fixed price after calling fixPrice(): ", fixedPrice);

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
          <p className={`overline new-product-intro ${newProductIntroClasses}`}>
            New Product
          </p>
          <h1 className={headerClasses}>{name}</h1>
          <p className={productDescriptionClasses}>{description}</p>
          <p className={productPriceClasses}>{`$${price}`}</p>
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
          <p className={productPriceClasses}>{`$${price}`}</p>
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
          <p className={`overline new-product-intro ${newProductIntroClasses}`}>
            New Product
          </p>
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
