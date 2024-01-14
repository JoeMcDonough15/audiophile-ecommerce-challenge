import React from "react";
import ImageSlab from "../ImageSlab/ImageSlab";
import FeaturedProductInfo from "../FeaturedProductInfo/FeaturedProductInfo";
import "./featured-product.sass";

const FeaturedProduct = (props) => {
  const { imageData, isProductPage } = props;
  const { mobileImageSrc, tabletImageSrc, desktopImageSrc, imageAltText } =
    imageData;
  return (
    <section className="main-container featured-product-container">
      {isProductPage ? (
        <div className="auto-width">
          {" "}
          <ImageSlab
            deviceSize="mobile"
            isProductPage
            imageData={{ imageSrc: mobileImageSrc, imageAltText: imageAltText }}
          />
          <ImageSlab
            deviceSize="tablet"
            isProductPage
            imageData={{ imageSrc: tabletImageSrc, imageAltText: imageAltText }}
          />
          <ImageSlab
            deviceSize="desktop"
            isProductPage
            imageData={{
              imageSrc: desktopImageSrc,
              imageAltText: imageAltText,
            }}
          />
        </div>
      ) : (
        <div className="auto-width">
          {" "}
          <ImageSlab
            deviceSize="mobile"
            imageData={{ imageSrc: mobileImageSrc, imageAltText: imageAltText }}
          />
          <ImageSlab
            deviceSize="tablet"
            imageData={{ imageSrc: tabletImageSrc, imageAltText: imageAltText }}
          />
          <ImageSlab
            deviceSize="desktop"
            imageData={{
              imageSrc: desktopImageSrc,
              imageAltText: imageAltText,
            }}
          />
        </div>
      )}
      <div className="featured-product-text-container">
        <FeaturedProductInfo {...props} />
      </div>
    </section>
  );
};

export default FeaturedProduct;
