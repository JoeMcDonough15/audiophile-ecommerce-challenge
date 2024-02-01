import React from "react";
import ProductPage from "../ProductPage";

const imageData = {
  featuredProductImageData: {
    mobileImageSrc: require("../../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg"),
    tabletImageSrc: require("../../../assets/product-xx99-mark-two-headphones/tablet/image-product.jpg"),
    desktopImageSrc: require("../../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg"),
    imageAltText: "mark-one-headphones-image",
    customImageStyles: "product-page-image mark-one-image-width",
  },
  galleryImageData: {
    galleryImageOneData: [
      {
        id: 1,
        imageSrc: require("../../../assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg"),
        imageAltText: "mark-one-headphones-gallery-image-one-mobile",
        imageSize: "mobile",
      },
      {
        id: 2,
        imageSrc: require("../../../assets/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg"),
        imageAltText: "mark-one-headphones-gallery-image-one-tablet",
        imageSize: "tablet",
      },
      {
        id: 3,
        imageSrc: require("../../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg"),
        imageAltText: "mark-one-headphones-gallery-image-one-desktop",
        imageSize: "desktop",
      },
    ],
    galleryImageTwoData: [
      {
        id: 1,
        imageSrc: require("../../../assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg"),
        imageAltText: "mark-one-headphones-gallery-image-two-mobile",
        imageSize: "mobile",
      },
      {
        id: 2,
        imageSrc: require("../../../assets/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg"),
        imageAltText: "mark-one-headphones-gallery-image-two-tablet",
        imageSize: "tablet",
      },
      {
        id: 3,
        imageSrc: require("../../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg"),
        imageAltText: "mark-one-headphones-gallery-image-two-desktop",
        imageSize: "desktop",
      },
    ],
    galleryImageThreeData: [
      {
        id: 1,
        imageSrc: require("../../../assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg"),
        imageAltText: "mark-one-headphones-gallery-image-three-mobile",
        imageSize: "mobile",
      },
      {
        id: 2,
        imageSrc: require("../../../assets/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg"),
        imageAltText: "mark-one-headphones-gallery-image-three-tablet",
        imageSize: "tablet",
      },
      {
        id: 3,
        imageSrc: require("../../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg"),
        imageAltText: "mark-one-headphones-gallery-image-three-desktop",
        imageSize: "desktop",
      },
    ],
  },
  relatedProductsImageData: [
    [
      {
        id: 1,
        imageSrc: require("../../../assets/shared/mobile/image-xx99-mark-two-headphones.jpg"),
        imageAltText: "xx99-mark-two-headphones-image-mobile",
        imageSize: "mobile",
      },
      {
        id: 2,
        imageSrc: require("../../../assets/shared/tablet/image-xx99-mark-two-headphones.jpg"),
        imageAltText: "xx99-mark-two-headphones-image-tablet",
        imageSize: "tablet",
      },
      {
        id: 3,
        imageSrc: require("../../../assets/shared/desktop/image-xx99-mark-two-headphones.jpg"),
        imageAltText: "xx99-mark-two-headphones-image-desktop",
        imageSize: "desktop",
      },
    ],
    [
      {
        id: 1,
        imageSrc: require("../../../assets/shared/mobile/image-xx59-headphones.jpg"),
        imageAltText: "xx59-headphones-image-mobile",
        imageSize: "mobile",
      },
      {
        id: 2,
        imageSrc: require("../../../assets/shared/tablet/image-xx59-headphones.jpg"),
        imageAltText: "xx59-headphones-image-tablet",
        imageSize: "tablet",
      },
      {
        id: 3,
        imageSrc: require("../../../assets/shared/desktop/image-xx59-headphones.jpg"),
        imageAltText: "xx59-headphones-image-desktop",
        imageSize: "desktop",
      },
    ],
    [
      {
        id: 1,
        imageSrc: require("../../../assets/shared/mobile/image-zx9-speaker.jpg"),
        imageAltText: "zx9-speaker-image-mobile",
        imageSize: "mobile",
      },
      {
        id: 2,
        imageSrc: require("../../../assets/shared/tablet/image-zx9-speaker.jpg"),
        imageAltText: "zx9-speaker-image-tablet",
        imageSize: "tablet",
      },
      {
        id: 3,
        imageSrc: require("../../../assets/shared/desktop/image-zx9-speaker.jpg"),
        imageAltText: "zx9-speaker-image-desktop",
        imageSize: "desktop",
      },
    ],
  ],
};

const ProductXx99MarkOneHeadphones = () => {
  return <ProductPage productId={3} productImageData={imageData} />;
};

export default ProductXx99MarkOneHeadphones;
