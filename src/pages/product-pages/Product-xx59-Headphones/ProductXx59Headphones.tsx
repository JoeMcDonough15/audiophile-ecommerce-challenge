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
    mobileImageSrc: require("../../../assets/product-xx59-headphones/mobile/image-product.jpg"),
    tabletImageSrc: require("../../../assets/product-xx59-headphones/tablet/image-product.jpg"),
    desktopImageSrc: require("../../../assets/product-xx59-headphones/desktop/image-product.jpg"),
    imageAltText: "xx59-headphones-image",
    customImageStyles: "product-page-image xx59-headphones-image-width",
  },
  galleryImageData: {
    galleryImageOneData: [
      {
        id: 1,
        imageSrc: require("../../../assets/product-xx59-headphones/mobile/image-gallery-1.jpg"),
        imageAltText: "xx59-headphones-gallery-image-one-mobile",
        imageSize: "mobile",
      },
      {
        id: 2,
        imageSrc: require("../../../assets/product-xx59-headphones/tablet/image-gallery-1.jpg"),
        imageAltText: "xx59-headphones-gallery-image-one-tablet",
        imageSize: "tablet",
      },
      {
        id: 3,
        imageSrc: require("../../../assets/product-xx59-headphones/desktop/image-gallery-1.jpg"),
        imageAltText: "xx59-headphones-gallery-image-one-desktop",
        imageSize: "desktop",
      },
    ],
    galleryImageTwoData: [
      {
        id: 1,
        imageSrc: require("../../../assets/product-xx59-headphones/mobile/image-gallery-2.jpg"),
        imageAltText: "xx59-headphones-gallery-image-two-mobile",
        imageSize: "mobile",
      },
      {
        id: 2,
        imageSrc: require("../../../assets/product-xx59-headphones/tablet/image-gallery-2.jpg"),
        imageAltText: "xx59-headphones-gallery-image-two-tablet",
        imageSize: "tablet",
      },
      {
        id: 3,
        imageSrc: require("../../../assets/product-xx59-headphones/desktop/image-gallery-2.jpg"),
        imageAltText: "xx59-headphones-gallery-image-two-desktop",
        imageSize: "desktop",
      },
    ],
    galleryImageThreeData: [
      {
        id: 1,
        imageSrc: require("../../../assets/product-xx59-headphones/mobile/image-gallery-3.jpg"),
        imageAltText: "xx59-headphones-gallery-image-three-mobile",
        imageSize: "mobile",
      },
      {
        id: 2,
        imageSrc: require("../../../assets/product-xx59-headphones/tablet/image-gallery-3.jpg"),
        imageAltText: "xx59-headphones-gallery-image-three-tablet",
        imageSize: "tablet",
      },
      {
        id: 3,
        imageSrc: require("../../../assets/product-xx59-headphones/desktop/image-gallery-3.jpg"),
        imageAltText: "xx59-headphones-gallery-image-three-desktop",
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

const ProductXx59Headphones = () => {
  return <ProductPage productId={2} productImageData={imageData} />;
};

export default ProductXx59Headphones;
