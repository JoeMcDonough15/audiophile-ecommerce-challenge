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
import xx59ImageMobile from "../../../assets/shared/mobile/image-xx59-headphones.jpg";
import xx59ImageTablet from "../../../assets/shared/tablet/image-xx59-headphones.jpg";
import xx59ImageDesktop from "../../../assets/shared/desktop/image-xx59-headphones.jpg";
import markOneImageMobile from "../../../assets/shared/mobile/image-xx99-mark-one-headphones.jpg";
import markOneImageTablet from "../../../assets/shared/tablet/image-xx99-mark-one-headphones.jpg";
import markOneImageDesktop from "../../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import zx9ImageMobile from "../../../assets/shared/mobile/image-zx9-speaker.jpg";
import zx9ImageTablet from "../../../assets/shared/tablet/image-zx9-speaker.jpg";
import zx9ImageDesktop from "../../../assets/shared/desktop/image-zx9-speaker.jpg";

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
  relatedProductsImageData: [
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

const ProductXx99MarkTwoHeadphones = () => {
  return <ProductPage productId={4} imageData={imageData} />;
};

export default ProductXx99MarkTwoHeadphones;
