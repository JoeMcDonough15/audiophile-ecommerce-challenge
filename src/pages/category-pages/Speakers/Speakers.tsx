import React from "react";
import CategoryPage from "../CategoryPage";

const featureOneImageData = {
  mobileImageSrc: require("../../../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg"),
  tabletImageSrc: require("../../../assets/product-zx9-speaker/tablet/image-category-page-preview.jpg"),
  desktopImageSrc: require("../../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg"),
  imageAltText: "zx-9-speaker-image",
  customImageStyles: "zx9-speaker-image-width",
};

const featureTwoImageData = {
  mobileImageSrc: require("../../../assets/product-zx7-speaker/mobile/image-category-page-preview.jpg"),
  tabletImageSrc: require("../../../assets/product-zx7-speaker/tablet/image-category-page-preview.jpg"),
  desktopImageSrc: require("../../../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg"),
  imageAltText: "zx-7-speaker-image",
  customImageStyles: "zx7-speaker-image-width",
};

const imageData = [featureOneImageData, featureTwoImageData];

const Speakers = () => {
  return <CategoryPage categoryName="speakers" imageData={imageData} />;
};

export default Speakers;
