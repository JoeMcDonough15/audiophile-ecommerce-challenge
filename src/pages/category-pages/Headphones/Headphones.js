import React from "react";
import CategoryPage from "../CategoryPage";
import markTwoMobileImage from "../../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import markTwoTabletImage from "../../../assets/product-xx99-mark-two-headphones/tablet/image-product.jpg";
import markTwoDesktopImage from "../../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import markOneMobileImage from "../../../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import markOneTabletImage from "../../../assets/product-xx99-mark-one-headphones/tablet/image-product.jpg";
import markOneDesktopImage from "../../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import xxFiveNineMobileImage from "../../../assets/product-xx59-headphones/mobile/image-product.jpg";
import xxFiveNineTabletImage from "../../../assets/product-xx59-headphones/tablet/image-product.jpg";
import xxFiveNineDesktopImage from "../../../assets/product-xx59-headphones/desktop/image-product.jpg";

const featureOneImageData = {
  mobileImageSrc: markTwoMobileImage,
  tabletImageSrc: markTwoTabletImage,
  desktopImageSrc: markTwoDesktopImage,
  imageAltText: "mark-two-headphones-image",
  customImageStyles: "mark-two-image-width",
};

const featureTwoImageData = {
  mobileImageSrc: markOneMobileImage,
  tabletImageSrc: markOneTabletImage,
  desktopImageSrc: markOneDesktopImage,
  imageAltText: "mark-one-headphones-image",
  customImageStyles: "mark-one-image-width",
};

const featureThreeImageData = {
  mobileImageSrc: xxFiveNineMobileImage,
  tabletImageSrc: xxFiveNineTabletImage,
  desktopImageSrc: xxFiveNineDesktopImage,
  imageAltText: "xx59-headphones-image",
  customImageStyles: "xx59-image-width",
};

const imageData = [
  featureOneImageData,
  featureTwoImageData,
  featureThreeImageData,
];

const Headphones = () => {
  return <CategoryPage categoryName="headphones" imageData={imageData} />;
};

export default Headphones;
