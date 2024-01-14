import React from "react";
import CustomImage from "../CustomImage/CustomImage";

const ImageSlab = (props) => {
  const { imageData, deviceSize, isProductPage } = props;
  const { imageSrc, imageAltText } = imageData;
  return (
    <div
      className={
        isProductPage
          ? `content-slab featured-product-image-container product-page-image-container image-${deviceSize}`
          : `content-slab featured-product-image-container image-${deviceSize}`
      }
    >
      <CustomImage
        src={imageSrc}
        alt={imageAltText}
        className={
          isProductPage
            ? "featured-product-image product-page-image"
            : "featured-product-image"
        }
      />
    </div>
  );
};

export default ImageSlab;
