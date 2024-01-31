import React from "react";
import ProductPage from "../ProductPage";

interface ProductImageData {
  featuredProductImageData: {
    mobileImageSrc: string;
    tabletImageSrc: string;
    desktopImageSrc: string;
    imageAltText: string;
    customImageStyles: string;
  };
  galleryImageData: {
    galleryImageOneData: {
      id: number;
      imageSrc: string;
      imageAltText: string;
      imageSize: string;
    }[];
    galleryImageTwoData: {
      id: number;
      imageSrc: string;
      imageAltText: string;
      imageSize: string;
    }[];
    galleryImageThreeData: {
      id: number;
      imageSrc: string;
      imageAltText: string;
      imageSize: string;
    }[];
  };
  relatedProductsImageData: {
    id: number;
    imageSrc: string;
    imageAltText: string;
    imageSize: string;
  }[][];
}

const imageData: ProductImageData = {
  featuredProductImageData: {
    mobileImageSrc: require("../../../assets/product-yx1-earphones/mobile/image-product.jpg"),
    tabletImageSrc: require("../../../assets/product-yx1-earphones/tablet/image-product.jpg"),
    desktopImageSrc: require("../../../assets/product-yx1-earphones/desktop/image-product.jpg"),
    imageAltText: "yx-1-earphones-image",
    customImageStyles: "product-page-image yx1-earphones-image-width",
  },
  galleryImageData: {
    galleryImageOneData: [
      {
        id: 1,
        imageSrc: require("../../../assets/product-yx1-earphones/mobile/image-gallery-1.jpg"),
        imageAltText: "yx-1-earphones-gallery-image-one-mobile",
        imageSize: "mobile",
      },
      {
        id: 2,
        imageSrc: require("../../../assets/product-yx1-earphones/tablet/image-gallery-1.jpg"),
        imageAltText: "yx-1-earphones-gallery-image-one-tablet",
        imageSize: "tablet",
      },
      {
        id: 3,
        imageSrc: require("../../../assets/product-yx1-earphones/desktop/image-gallery-1.jpg"),
        imageAltText: "yx-1-earphones-gallery-image-one-desktop",
        imageSize: "desktop",
      },
    ],
    galleryImageTwoData: [
      {
        id: 1,
        imageSrc: require("../../../assets/product-yx1-earphones/mobile/image-gallery-2.jpg"),
        imageAltText: "yx-1-earphones-gallery-image-two-mobile",
        imageSize: "mobile",
      },
      {
        id: 2,
        imageSrc: require("../../../assets/product-yx1-earphones/tablet/image-gallery-2.jpg"),
        imageAltText: "yx-1-earphones-gallery-image-two-tablet",
        imageSize: "tablet",
      },
      {
        id: 3,
        imageSrc: require("../../../assets/product-yx1-earphones/desktop/image-gallery-2.jpg"),
        imageAltText: "yx-1-earphones-gallery-image-two-desktop",
        imageSize: "desktop",
      },
    ],
    galleryImageThreeData: [
      {
        id: 1,
        imageSrc: require("../../../assets/product-yx1-earphones/mobile/image-gallery-3.jpg"),
        imageAltText: "yx-1-earphones-gallery-image-three-mobile",
        imageSize: "mobile",
      },
      {
        id: 2,
        imageSrc: require("../../../assets/product-yx1-earphones/tablet/image-gallery-3.jpg"),
        imageAltText: "yx-1-earphones-gallery-image-three-tablet",
        imageSize: "tablet",
      },
      {
        id: 3,
        imageSrc: require("../../../assets/product-yx1-earphones/desktop/image-gallery-3.jpg"),
        imageAltText: "yx-1-earphones-gallery-image-three-desktop",
        imageSize: "desktop",
      },
    ],
  },
  relatedProductsImageData: [
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

const ProductEarphones = () => {
  return <ProductPage productId={1} productImageData={imageData} />;
};

export default ProductEarphones;
