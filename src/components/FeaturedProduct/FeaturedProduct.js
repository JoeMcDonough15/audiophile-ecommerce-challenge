import React from "react";
import ImageSlab from "../ImageSlab/ImageSlab";
import FeaturedProductInfo from "../FeaturedProductInfo/FeaturedProductInfo";
import "./featured-product.sass";

const FeaturedProduct = (props) => {
  const { imageData } = props;
  const { mobileImageSrc, tabletImageSrc, desktopImageSrc, imageAltText } =
    imageData;
  return (
    <section className="main-container featured-product-container col">
      <div className="featured-product-image-container">
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
      <div className="featured-product-text-container col">
        <FeaturedProductInfo {...props} />
      </div>
    </section>
  );
};

export default FeaturedProduct;
