import React from "react";
import CategoryPage from "../CategoryPage";
import zxNineMobileImage from "../../../assets/product-zx9-speaker/mobile/image-product.jpg";
import zxNineTabletImage from "../../../assets/product-zx9-speaker/tablet/image-product.jpg";
import zxNineDesktopImage from "../../../assets/product-zx9-speaker/desktop/image-product.jpg";
import zxSevenMobileImage from "../../../assets/product-zx7-speaker/mobile/image-product.jpg";
import zxSevenTabletImage from "../../../assets/product-zx7-speaker/tablet/image-product.jpg";
import zxSevenDesktopImage from "../../../assets/product-zx7-speaker/desktop/image-product.jpg";

const featureOneImageData = {
  mobileImageSrc: zxNineMobileImage,
  tabletImageSrc: zxNineTabletImage,
  desktopImageSrc: zxNineDesktopImage,
  imageAltText: "zx-9-speaker-image",
  customImageStyles: "zx9-speaker-image-width",
};

const featureTwoImageData = {
  mobileImageSrc: zxSevenMobileImage,
  tabletImageSrc: zxSevenTabletImage,
  desktopImageSrc: zxSevenDesktopImage,
  imageAltText: "zx-7-speaker-image",
  customImageStyles: "zx7-speaker-image-width",
};

const imageData = [featureOneImageData, featureTwoImageData];

const Speakers = () => {
  return <CategoryPage categoryName="speakers" imageData={imageData} />;
};

export default Speakers;
