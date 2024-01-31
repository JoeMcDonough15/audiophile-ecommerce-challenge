import React from "react";
import Button from "../Button/Button";
import SpecifyQuantity from "../SpecifyQuantity/SpecifyQuantity";
import "./featured-product-info.sass";
import fixPrice from "../../fixPrice";

interface FeaturedProductObject {
  id?: number;
  slug: string;
  name: string;
  abbreviatedName?: string;
  image: { mobile: string; tablet: string; desktop: string };
  category?: string;
  categoryImage?: { mobile: string; tablet: string; desktop: string };
  isNewProduct?: boolean;
  price?: number;
  description?: string;
  teaserDescription?: string;
  features?: string;
  includes?: { quantity: number; item: string }[];
  gallery?: {
    first: { mobile: string; tablet: string; desktop: string };
    second: { mobile: string; tablet: string; desktop: string };
    third: { mobile: string; tablet: string; desktop: string };
  };
  others?: {
    slug: string;
    name: string;
    image: { mobile: string; tablet: string; desktop: string };
  }[];
}

interface ButtonData {
  buttonColor: string;
  buttonDestination?: string;
}

interface Props {
  isProductPage?: boolean;
  isCategoryPage?: boolean;
  isHeroSection?: boolean;
  isHomeFeatureOne?: boolean;
  isHomeFeatureTwo?: boolean;
  isHomeFeatureThree?: boolean;
  isRelatedProduct?: boolean;
  featuredProduct: FeaturedProductObject;
  includesProductDescription?: boolean;
  teaserOnly?: boolean;
  customHeaderText?: string;
  buttonData: ButtonData;
}

const FeaturedProductInfo = (props: Props) => {
  const {
    isProductPage,
    isCategoryPage,
    isHeroSection,
    isHomeFeatureOne,
    isHomeFeatureTwo,
    isHomeFeatureThree,
    isRelatedProduct,
    featuredProduct,
    includesProductDescription,
    teaserOnly,
    customHeaderText,
    buttonData,
  } = props;

  const { name, teaserDescription, description, price, isNewProduct } =
    featuredProduct;

  const { buttonColor, buttonDestination } = buttonData;
  return (
    <div>
      {isProductPage && isNewProduct ? (
        <div className={"featured-product-info col product-page-info"}>
          <p className={"overline dark-orange-text"}>New Product</p>
          <h1
            className={
              "small-featured-product-header black-text product-page-header"
            }
          >
            {name}
          </h1>
          <p className={"product-page-description"}>{description}</p>
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
        <div className={"featured-product-info col product-page-info"}>
          <h1
            className={
              "small-featured-product-header black-text product-page-header"
            }
          >
            {name}
          </h1>
          <p className={"product-page-description"}>{description}</p>
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
            isHeroSection
              ? "featured-product-info col featured-product-hero-info"
              : isHomeFeatureOne
              ? "featured-product-info col home-feature-one-info"
              : "featured-product-info col"
          }
        >
          <p
            className={
              isHeroSection
                ? "overline new-product-grey-text"
                : isHomeFeatureOne
                ? "hide overline"
                : isCategoryPage
                ? "dark-orange-text overline"
                : "overline"
            }
          >
            New Product
          </p>
          <h1
            className={
              isHeroSection
                ? "white-text featured-product-hero-header"
                : isHomeFeatureOne
                ? "home-feature-one-header white-text"
                : "small-featured-product-header black-text category-page-featured-product-header"
            }
          >
            {name}
          </h1>
          <p
            className={
              isHeroSection
                ? "featured-product-description-hero"
                : isHomeFeatureOne
                ? "home-feature-one-description light-grey-text"
                : "category-page-featured-product-description"
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
            isHeroSection
              ? "featured-product-info col featured-product-hero-info"
              : isHomeFeatureOne
              ? "featured-product-info col home-feature-one-info"
              : "featured-product-info col"
          }
        >
          <h1
            className={
              isHeroSection
                ? "white-text featured-product-hero-header"
                : isHomeFeatureOne
                ? "home-feature-one-header white-text"
                : "small-featured-product-header black-text category-page-featured-product-header"
            }
          >
            {name}
          </h1>
          <p
            className={
              isHeroSection
                ? "featured-product-description-hero"
                : isHomeFeatureOne
                ? "home-feature-one-description light-grey-text"
                : "category-page-featured-product-description"
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
