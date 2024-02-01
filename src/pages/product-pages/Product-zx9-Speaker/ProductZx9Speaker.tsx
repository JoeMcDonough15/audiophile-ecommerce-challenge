import React from "react";
import ProductPage from "../ProductPage";

const imageData = {
  featuredProductImageData: {
    mobileImageSrc: require("../../../assets/product-zx9-speaker/mobile/image-product.jpg"),
    tabletImageSrc: require("../../../assets/product-zx9-speaker/tablet/image-product.jpg"),
    desktopImageSrc: require("../../../assets/product-zx9-speaker/desktop/image-product.jpg"),
    imageAltText: "zx9-speaker-image",
    customImageStyles: "product-page-image zx9-image-width",
  },
  galleryImageData: {
    galleryImageOneData: [
      {
        id: 1,
        imageSrc: require("../../../assets/product-zx9-speaker/mobile/image-gallery-1.jpg"),
        imageAltText: "zx9-speaker-gallery-image-one-mobile",
        imageSize: "mobile",
      },
      {
        id: 2,
        imageSrc: require("../../../assets/product-zx9-speaker/tablet/image-gallery-1.jpg"),
        imageAltText: "zx9-speaker-gallery-image-one-tablet",
        imageSize: "tablet",
      },
      {
        id: 3,
        imageSrc: require("../../../assets/product-zx9-speaker/desktop/image-gallery-1.jpg"),
        imageAltText: "zx9-speaker-gallery-image-one-desktop",
        imageSize: "desktop",
      },
    ],
    galleryImageTwoData: [
      {
        id: 1,
        imageSrc: require("../../../assets/product-zx9-speaker/mobile/image-gallery-2.jpg"),
        imageAltText: "zx9-speaker-gallery-image-two-mobile",
        imageSize: "mobile",
      },
      {
        id: 2,
        imageSrc: require("../../../assets/product-zx9-speaker/tablet/image-gallery-2.jpg"),
        imageAltText: "zx9-speaker-gallery-image-two-tablet",
        imageSize: "tablet",
      },
      {
        id: 3,
        imageSrc: require("../../../assets/product-zx9-speaker/desktop/image-gallery-2.jpg"),
        imageAltText: "zx9-speaker-gallery-image-two-desktop",
        imageSize: "desktop",
      },
    ],
    galleryImageThreeData: [
      {
        id: 1,
        imageSrc: require("../../../assets/product-zx9-speaker/mobile/image-gallery-3.jpg"),
        imageAltText: "zx9-speaker-gallery-image-three-mobile",
        imageSize: "mobile",
      },
      {
        id: 2,
        imageSrc: require("../../../assets/product-zx9-speaker/tablet/image-gallery-3.jpg"),
        imageAltText: "zx9-speaker-gallery-image-three-tablet",
        imageSize: "tablet",
      },
      {
        id: 3,
        imageSrc: require("../../../assets/product-zx9-speaker/desktop/image-gallery-3.jpg"),
        imageAltText: "zx9-speaker-gallery-image-three-desktop",
        imageSize: "desktop",
      },
    ],
  },
  relatedProductsImageData: [
    [
      {
        id: 1,
        imageSrc: require("../../../assets/shared/mobile/image-zx7-speaker.jpg"),
        imageAltText: "zx7-speaker-image-mobile",
        imageSize: "mobile",
      },
      {
        id: 2,
        imageSrc: require("../../../assets/shared/tablet/image-zx7-speaker.jpg"),
        imageAltText: "zx7-speaker-image-tablet",
        imageSize: "tablet",
      },
      {
        id: 3,
        imageSrc: require("../../../assets/shared/desktop/image-zx7-speaker.jpg"),
        imageAltText: "zx7-speaker-image-desktop",
        imageSize: "desktop",
      },
    ],
    [
      {
        id: 1,
        imageSrc: require("../../../assets/shared/mobile/image-xx99-mark-one-headphones.jpg"),
        imageAltText: "xx99-mark-one-headphones-image-mobile",
        imageSize: "mobile",
      },
      {
        id: 2,
        imageSrc: require("../../../assets/shared/tablet/image-xx99-mark-one-headphones.jpg"),
        imageAltText: "xx99-mark-one-headphones-image-tablet",
        imageSize: "tablet",
      },
      {
        id: 3,
        imageSrc: require("../../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg"),
        imageAltText: "xx99-mark-one-headphones-image-desktop",
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
  ],
};

const ProductZx9Speaker = () => {
  return <ProductPage productId={6} productImageData={imageData} />;
};

export default ProductZx9Speaker;