import React from "react";
import CategoryPage from "../CategoryPage";
import yxOneMobileImage from "../../../assets/product-yx1-earphones/mobile/image-product.jpg";
import yxOneTabletImage from "../../../assets/product-yx1-earphones/tablet/image-product.jpg";
import yxOneDesktopImage from "../../../assets/product-yx1-earphones/desktop/image-product.jpg";

const featureOneImageData = {
  mobileImageSrc: yxOneMobileImage,
  tabletImageSrc: yxOneTabletImage,
  desktopImageSrc: yxOneDesktopImage,
  imageAltText: "yx-1-earphones-image",
  customImageStyles: "yx1-earphones-image-width",
};

const imageData = [featureOneImageData];

const Earphones = () => {
  return <CategoryPage categoryName="earphones" imageData={imageData} />;
};

export default Earphones;
