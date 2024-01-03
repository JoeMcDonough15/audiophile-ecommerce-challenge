import React from "react";
import CustomImage from "../CustomImage/CustomImage";
import FeaturedProductInfo from "../FeaturedProductInfo/FeaturedProductInfo";
import "./category-featured-product.sass";

const CategoryFeaturedProduct = (props) => {
  const { imageData } = props;
  const {
    mobileImageSrc,
    tabletImageSrc,
    desktopImageSrc,
    imageAltText,
    customImageStyles,
  } = imageData;
  return (
    <section className="main-container category-featured-product-container">
      <div className="content-slab category-featured-product-image-container">
        <CustomImage
          className={`category-featured-product-image image-mobile ${customImageStyles}`}
          src={mobileImageSrc}
          altText={imageAltText}
        />{" "}
        <CustomImage
          className={`category-featured-product-image image-tablet ${customImageStyles}`}
          src={tabletImageSrc}
          altText={imageAltText}
        />{" "}
        <CustomImage
          className={`category-featured-product-image image-desktop ${customImageStyles}`}
          src={desktopImageSrc}
          altText={imageAltText}
        />{" "}
      </div>
      <div className="featured-product-text-container">
        <FeaturedProductInfo
          customClasses={{
            containerClasses:
              "featured-product-info category-featured-product-info col",
            newProductIntroClasses:
              "dark-orange-text overline new-product-intro",
            headerClasses:
              "category-featured-product-header small-featured-product-header black-text",
            productDescriptionClasses:
              "category-featured-product-description darker-grey-text",
            buttonData: {
              buttonColor: "dark-orange",
              buttonText: "see product",
            },
          }}
          {...props}
        />
      </div>
    </section>
  );
};

export default CategoryFeaturedProduct;
