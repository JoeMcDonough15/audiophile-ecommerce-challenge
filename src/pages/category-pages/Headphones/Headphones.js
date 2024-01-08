import React from "react";
import CategoryPage from "../CategoryPage";
import markTwoMobileImage from "../../../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";
import markTwoTabletImage from "../../../assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import markTwoDesktopImage from "../../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import markOneMobileImage from "../../../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg";
import markOneTabletImage from "../../../assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";
import markOneDesktopImage from "../../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import xxFiveNineMobileImage from "../../../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg";
import xxFiveNineTabletImage from "../../../assets/product-xx59-headphones/tablet/image-category-page-preview.jpg";
import xxFiveNineDesktopImage from "../../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";

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
