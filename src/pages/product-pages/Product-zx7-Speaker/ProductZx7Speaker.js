import React from "react";
import ProductPage from "../ProductPage";

// featured product images
import zx7MobileImage from "../../../assets/product-zx7-speaker/mobile/image-product.jpg";
import zx7TabletImage from "../../../assets/product-zx7-speaker/tablet/image-product.jpg";
import zx7DesktopImage from "../../../assets/product-zx7-speaker/desktop/image-product.jpg";

// gallery images
import galleryImageOneMobile from "../../../assets/product-zx7-speaker/mobile/image-gallery-1.jpg";
import galleryImageOneTablet from "../../../assets/product-zx7-speaker/tablet/image-gallery-1.jpg";
import galleryImageOneDesktop from "../../../assets/product-zx7-speaker/desktop/image-gallery-1.jpg";

import galleryImageTwoMobile from "../../../assets/product-zx7-speaker/mobile/image-gallery-2.jpg";
import galleryImageTwoTablet from "../../../assets/product-zx7-speaker/tablet/image-gallery-2.jpg";
import galleryImageTwoDesktop from "../../../assets/product-zx7-speaker/desktop/image-gallery-2.jpg";

import galleryImageThreeMobile from "../../../assets/product-zx7-speaker/mobile/image-gallery-3.jpg";
import galleryImageThreeTablet from "../../../assets/product-zx7-speaker/tablet/image-gallery-3.jpg";
import galleryImageThreeDesktop from "../../../assets/product-zx7-speaker/desktop/image-gallery-3.jpg";

// related product images
import zx9ImageMobile from "../../../assets/shared/mobile/image-zx9-speaker.jpg";
import zx9ImageTablet from "../../../assets/shared/tablet/image-zx9-speaker.jpg";
import zx9ImageDesktop from "../../../assets/shared/desktop/image-zx9-speaker.jpg";

import markOneImageMobile from "../../../assets/shared/mobile/image-xx99-mark-one-headphones.jpg";
import markOneImageTablet from "../../../assets/shared/tablet/image-xx99-mark-one-headphones.jpg";
import markOneImageDesktop from "../../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg";

import xx59ImageMobile from "../../../assets/shared/mobile/image-xx59-headphones.jpg";
import xx59ImageTablet from "../../../assets/shared/tablet/image-xx59-headphones.jpg";
import xx59ImageDesktop from "../../../assets/shared/desktop/image-xx59-headphones.jpg";

const imageData = {
  featuredProductImageData: {
    mobileImageSrc: zx7MobileImage,
    tabletImageSrc: zx7TabletImage,
    desktopImageSrc: zx7DesktopImage,
    imageAltText: "zx7-speaker-image",
    customImageStyles: "product-page-image zx7-image-width",
  },
  galleryImageData: {
    galleryImageOneData: [
      {
        id: 1,
        imageSrc: galleryImageOneMobile,
        imageAltText: "zx7-speaker-gallery-image-one-mobile",
        imageSize: "mobile",
      },
      {
        id: 2,
        imageSrc: galleryImageOneTablet,
        imageAltText: "zx7-speaker-gallery-image-one-tablet",
        imageSize: "tablet",
      },
      {
        id: 3,
        imageSrc: galleryImageOneDesktop,
        imageAltText: "zx7-speaker-gallery-image-one-desktop",
        imageSize: "desktop",
      },
    ],
    galleryImageTwoData: [
      {
        id: 1,
        imageSrc: galleryImageTwoMobile,
        imageAltText: "zx7-speaker-gallery-image-two-mobile",
        imageSize: "mobile",
      },
      {
        id: 2,
        imageSrc: galleryImageTwoTablet,
        imageAltText: "zx7-speaker-gallery-image-two-tablet",
        imageSize: "tablet",
      },
      {
        id: 3,
        imageSrc: galleryImageTwoDesktop,
        imageAltText: "zx7-speaker-gallery-image-two-desktop",
        imageSize: "desktop",
      },
    ],
    galleryImageThreeData: [
      {
        id: 1,
        imageSrc: galleryImageThreeMobile,
        imageAltText: "zx7-speaker-gallery-image-three-mobile",
        imageSize: "mobile",
      },
      {
        id: 2,
        imageSrc: galleryImageThreeTablet,
        imageAltText: "zx7-speaker-gallery-image-three-tablet",
        imageSize: "tablet",
      },
      {
        id: 3,
        imageSrc: galleryImageThreeDesktop,
        imageAltText: "zx7-speaker-gallery-image-three-desktop",
        imageSize: "desktop",
      },
    ],
  },
  relatedProductsImageData: [
    [
      {
        id: 1,
        imageSrc: zx9ImageMobile,
        imageAltText: "zx9-speaker-image-mobile",
        imageSize: "mobile",
      },
      {
        id: 2,
        imageSrc: zx9ImageTablet,
        imageAltText: "zx9-speaker-image-tablet",
        imageSize: "tablet",
      },
      {
        id: 3,
        imageSrc: zx9ImageDesktop,
        imageAltText: "zx9-speaker-image-desktop",
        imageSize: "desktop",
      },
    ],
    [
      {
        id: 1,
        imageSrc: markOneImageMobile,
        imageAltText: "xx99-mark-one-headphones-image-mobile",
        imageSize: "mobile",
      },
      {
        id: 2,
        imageSrc: markOneImageTablet,
        imageAltText: "xx99-mark-one-headphones-image-tablet",
        imageSize: "tablet",
      },
      {
        id: 3,
        imageSrc: markOneImageDesktop,
        imageAltText: "xx99-mark-one-headphones-image-desktop",
        imageSize: "desktop",
      },
    ],
    [
      {
        id: 1,
        imageSrc: xx59ImageMobile,
        imageAltText: "xx59-headphones-image-mobile",
        imageSize: "mobile",
      },
      {
        id: 2,
        imageSrc: xx59ImageTablet,
        imageAltText: "xx59-headphones-image-tablet",
        imageSize: "tablet",
      },
      {
        id: 3,
        imageSrc: xx59ImageDesktop,
        imageAltText: "xx59-headphones-image-desktop",
        imageSize: "desktop",
      },
    ],
  ],
};

const ProductZx7Speaker = () => {
  return <ProductPage productId={5} imageData={imageData} />;
};

export default ProductZx7Speaker;
