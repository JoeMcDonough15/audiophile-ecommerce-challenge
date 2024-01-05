import React from "react";
import CustomImage from "../CustomImage/CustomImage";
import FeaturedProductInfo from "../FeaturedProductInfo/FeaturedProductInfo";
import "./featured-product.sass";

const FeaturedProduct = (props) => {
  const { imageData, buttonDestination, isProductPage } = props;
  const {
    mobileImageSrc,
    tabletImageSrc,
    desktopImageSrc,
    imageAltText,
    customImageStyles,
  } = imageData;
  return (
    <section className="main-container featured-product-container">
      <div
        className={
          isProductPage
            ? "content-slab featured-product-image-container product-page-image-container"
            : "content-slab featured-product-image-container"
        }
      >
        <CustomImage
          className={`featured-product-image image-mobile ${customImageStyles}`}
          src={mobileImageSrc}
          altText={imageAltText}
        />{" "}
        <CustomImage
          className={`featured-product-image image-tablet ${customImageStyles}`}
          src={tabletImageSrc}
          altText={imageAltText}
        />{" "}
        <CustomImage
          className={`featured-product-image image-desktop ${customImageStyles}`}
          src={desktopImageSrc}
          altText={imageAltText}
        />{" "}
      </div>
      <div className="featured-product-text-container">
        <FeaturedProductInfo
          customClasses={{
            newProductIntroClasses:
              "dark-orange-text overline new-product-intro",
            headerClasses:
              "featured-product-header small-featured-product-header black-text",
            productDescriptionClasses:
              "featured-product-description darker-grey-text",
            buttonData: {
              buttonColor: "dark-orange",
              buttonDestination: buttonDestination,
            },
          }}
          {...props}
        />
      </div>
    </section>
  );
};

export default FeaturedProduct;
