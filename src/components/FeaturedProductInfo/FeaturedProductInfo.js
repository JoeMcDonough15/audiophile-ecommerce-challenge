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
    containerClasses,
    newProductIntroClasses,
    headerClasses,
    productDescriptionClasses,
    buttonData,
  } = customClasses;

  const { buttonColor, buttonDestination } = buttonData;
  return (
    <div>
      {isProductPage && isNewProduct ? (
        <div
          className={
            containerClasses
              ? `product-page-info featured-product-info col ${containerClasses}`
              : "product-page-info featured-product-info col"
          }
        >
          <p
            className={
              newProductIntroClasses
                ? `${newProductIntroClasses} overline new-product-intro product-page-intro`
                : "overline new-product-intro product-page-intro"
            }
          >
            New Product
          </p>
          <h1 className="small-featured-product-header product-page-header black-text">
            {customHeaderText ? customHeaderText : name}
          </h1>
          <p className="product-page-description">
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
          <h1 className="small-featured-product-header product-page-header black-text">
            {customHeaderText ? customHeaderText : name}
          </h1>
          <p className="product-page-description">
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
      ) : isNewProduct && includesProductDescription ? (
        <div
          className={
            containerClasses
              ? `featured-product-info col ${containerClasses}`
              : "featured-product-info col"
          }
        >
          <p
            className={
              newProductIntroClasses
                ? `${newProductIntroClasses} overline new-product-intro`
                : "overline new-product-intro"
            }
          >
            New Product
          </p>
          <h1
            className={
              isCategoryPage
                ? "small-featured-product-header category-page-featured-product-header"
                : `white-text ${headerClasses}`
            }
          >
            {customHeaderText ? customHeaderText : name}
          </h1>
          <p
            className={
              isCategoryPage
                ? "category-page-featured-product-description"
                : productDescriptionClasses
            }
          >
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
            containerClasses
              ? `featured-product-info col ${containerClasses}`
              : "featured-product-info col"
          }
        >
          <h1
            className={
              isCategoryPage
                ? "small-featured-product-header category-page-featured-product-header"
                : `white-text ${headerClasses}`
            }
          >
            {customHeaderText ? customHeaderText : name}
          </h1>
          <p
            className={
              isCategoryPage
                ? "category-page-featured-product-description"
                : productDescriptionClasses
            }
          >
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
          <h4
            className={
              headerClasses ? `${headerClasses} black-text` : "black-text"
            }
          >
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
