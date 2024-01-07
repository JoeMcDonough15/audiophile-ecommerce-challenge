import React from "react";
import ProductPage from "../ProductPage";
import markTwoMobileImage from "../../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import markTwoTabletImage from "../../../assets/product-xx99-mark-two-headphones/tablet/image-product.jpg";
import markTwoDesktopImage from "../../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import galleryImageOneMobile from "../../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg";
import galleryImageOneTablet from "../../../assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg";
import galleryImageOneDesktop from "../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import galleryImageTwoMobile from "../../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg";
import galleryImageTwoTablet from "../../../assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg";
import galleryImageTwoDesktop from "../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import galleryImageThreeMobile from "../../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg";
import galleryImageThreeTablet from "../../../assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg";
import galleryImageThreeDesktop from "../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";

const imageData = {
  featuredProductImageData: {
    mobileImageSrc: markTwoMobileImage,
    tabletImageSrc: markTwoTabletImage,
    desktopImageSrc: markTwoDesktopImage,
    imageAltText: "mark-two-headphones-image",
    customImageStyles: "product-page-image mark-two-image-width",
  },
  galleryImageData: {
    galleryImageOneData: [
      {
        id: 1,
        imageSrc: galleryImageOneMobile,
        imageAltText: "mark-two-headphones-gallery-image-one-mobile",
        imageSize: "mobile",
      },
      {
        id: 2,
        imageSrc: galleryImageOneTablet,
        imageAltText: "mark-two-headphones-gallery-image-one-tablet",
        imageSize: "tablet",
      },
      {
        id: 3,
        imageSrc: galleryImageOneDesktop,
        imageAltText: "mark-two-headphones-gallery-image-one-desktop",
        imageSize: "desktop",
      },
    ],
    galleryImageTwoData: [
      {
        id: 1,
        imageSrc: galleryImageTwoMobile,
        imageAltText: "mark-two-headphones-gallery-image-two-mobile",
        imageSize: "mobile",
      },
      {
        id: 2,
        imageSrc: galleryImageTwoTablet,
        imageAltText: "mark-two-headphones-gallery-image-two-tablet",
        imageSize: "tablet",
      },
      {
        id: 3,
        imageSrc: galleryImageTwoDesktop,
        imageAltText: "mark-two-headphones-gallery-image-two-desktop",
        imageSize: "desktop",
      },
    ],
    galleryImageThreeData: [
      {
        id: 1,
        imageSrc: galleryImageThreeMobile,
        imageAltText: "mark-two-headphones-gallery-image-three-mobile",
        imageSize: "mobile",
      },
      {
        id: 2,
        imageSrc: galleryImageThreeTablet,
        imageAltText: "mark-two-headphones-gallery-image-three-tablet",
        imageSize: "tablet",
      },
      {
        id: 3,
        imageSrc: galleryImageThreeDesktop,
        imageAltText: "mark-two-headphones-gallery-image-three-desktop",
        imageSize: "desktop",
      },
    ],
  },
  relatedProductImageData: {},
};

const ProductXx99MarkTwoHeadphones = () => {
  return <ProductPage productId={4} imageData={imageData} />;
};

export default ProductXx99MarkTwoHeadphones;
