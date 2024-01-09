import React from "react";
import ProductPage from "../ProductPage";

// featured product images
import xx59MobileImage from "../../../assets/product-xx59-headphones/mobile/image-product.jpg";
import xx59TabletImage from "../../../assets/product-xx59-headphones/tablet/image-product.jpg";
import xx59DesktopImage from "../../../assets/product-xx59-headphones/desktop/image-product.jpg";

// gallery images
import galleryImageOneMobile from "../../../assets/product-xx59-headphones/mobile/image-gallery-1.jpg";
import galleryImageOneTablet from "../../../assets/product-xx59-headphones/tablet/image-gallery-1.jpg";
import galleryImageOneDesktop from "../../../assets/product-xx59-headphones/desktop/image-gallery-1.jpg";

import galleryImageTwoMobile from "../../../assets/product-xx59-headphones/mobile/image-gallery-2.jpg";
import galleryImageTwoTablet from "../../../assets/product-xx59-headphones/tablet/image-gallery-2.jpg";
import galleryImageTwoDesktop from "../../../assets/product-xx59-headphones/desktop/image-gallery-2.jpg";

import galleryImageThreeMobile from "../../../assets/product-xx59-headphones/mobile/image-gallery-3.jpg";
import galleryImageThreeTablet from "../../../assets/product-xx59-headphones/tablet/image-gallery-3.jpg";
import galleryImageThreeDesktop from "../../../assets/product-xx59-headphones/desktop/image-gallery-3.jpg";

// related product images
import markTwoImageMobile from "../../../assets/shared/mobile/image-xx99-mark-two-headphones.jpg";
import markTwoImageTablet from "../../../assets/shared/tablet/image-xx99-mark-two-headphones.jpg";
import markTwoImageDesktop from "../../../assets/shared/desktop/image-xx99-mark-two-headphones.jpg";

import markOneImageMobile from "../../../assets/shared/mobile/image-xx99-mark-one-headphones.jpg";
import markOneImageTablet from "../../../assets/shared/tablet/image-xx99-mark-one-headphones.jpg";
import markOneImageDesktop from "../../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg";

import zx9ImageMobile from "../../../assets/shared/mobile/image-zx9-speaker.jpg";
import zx9ImageTablet from "../../../assets/shared/tablet/image-zx9-speaker.jpg";
import zx9ImageDesktop from "../../../assets/shared/desktop/image-zx9-speaker.jpg";

const imageData = {
  featuredProductImageData: {
    mobileImageSrc: xx59MobileImage,
    tabletImageSrc: xx59TabletImage,
    desktopImageSrc: xx59DesktopImage,
    imageAltText: "xx59-headphones-image",
    customImageStyles: "product-page-image xx59-image-width",
  },
  galleryImageData: {
    galleryImageOneData: [
      {
        id: 1,
        imageSrc: galleryImageOneMobile,
        imageAltText: "xx59-headphones-gallery-image-one-mobile",
        imageSize: "mobile",
      },
      {
        id: 2,
        imageSrc: galleryImageOneTablet,
        imageAltText: "xx59-headphones-gallery-image-one-tablet",
        imageSize: "tablet",
      },
      {
        id: 3,
        imageSrc: galleryImageOneDesktop,
        imageAltText: "xx59-headphones-gallery-image-one-desktop",
        imageSize: "desktop",
      },
    ],
    galleryImageTwoData: [
      {
        id: 1,
        imageSrc: galleryImageTwoMobile,
        imageAltText: "xx59-headphones-gallery-image-two-mobile",
        imageSize: "mobile",
      },
      {
        id: 2,
        imageSrc: galleryImageTwoTablet,
        imageAltText: "xx59-headphones-gallery-image-two-tablet",
        imageSize: "tablet",
      },
      {
        id: 3,
        imageSrc: galleryImageTwoDesktop,
        imageAltText: "xx59-headphones-gallery-image-two-desktop",
        imageSize: "desktop",
      },
    ],
    galleryImageThreeData: [
      {
        id: 1,
        imageSrc: galleryImageThreeMobile,
        imageAltText: "xx59-headphones-gallery-image-three-mobile",
        imageSize: "mobile",
      },
      {
        id: 2,
        imageSrc: galleryImageThreeTablet,
        imageAltText: "xx59-headphones-gallery-image-three-tablet",
        imageSize: "tablet",
      },
      {
        id: 3,
        imageSrc: galleryImageThreeDesktop,
        imageAltText: "xx59-headphones-gallery-image-three-desktop",
        imageSize: "desktop",
      },
    ],
  },
  relatedProductsImageData: [
    [
      {
        id: 1,
        imageSrc: markTwoImageMobile,
        imageAltText: "xx99-mark-two-headphones-image-mobile",
        imageSize: "mobile",
      },
      {
        id: 2,
        imageSrc: markTwoImageTablet,
        imageAltText: "xx99-mark-two-headphones-image-tablet",
        imageSize: "tablet",
      },
      {
        id: 3,
        imageSrc: markTwoImageDesktop,
        imageAltText: "xx99-mark-two-headphones-image-desktop",
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
  ],
};

const ProductXx59Headphones = () => {
  return <ProductPage productId={2} imageData={imageData} />;
};

export default ProductXx59Headphones;
