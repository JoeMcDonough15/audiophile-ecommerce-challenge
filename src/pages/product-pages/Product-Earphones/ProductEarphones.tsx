// import ProductPage from "../ProductPage";
// // import allProductImages from "../../../imageData";

// interface ProductImageData {
//   featuredProductImageData: {
//     mobileImageSrc: string;
//     tabletImageSrc: string;
//     desktopImageSrc: string;
//     imageAltText: string;
//     customImageStyles: string;
//   };
//   // categoryImageData: {
//   //   mobileImageSrc: string;
//   //   tabletImageSrc: string;
//   //   desktopImageSrc: string;
//   //   imageAltText: string;
//   // };
//   galleryImageData: {
//     galleryImageOneData: {
//       id: number;
//       imageSrc: string;
//       imageAltText: string;
//       imageSize: string;
//     }[];
//     galleryImageTwoData: {
//       id: number;
//       imageSrc: string;
//       imageAltText: string;
//       imageSize: string;
//     }[];
//     galleryImageThreeData: {
//       id: number;
//       imageSrc: string;
//       imageAltText: string;
//       imageSize: string;
//     }[];
//   };
//   relatedProductsImageData: {
//     id: number;
//     imageSrc: string;
//     imageAltText: string;
//     imageSize: string;
//   }[][];
// }

// const imageData: ProductImageData = {
//   featuredProductImageData: {
//     mobileImageSrc:
//       require("../../../assets/product-yx1-earphones/mobile/image-product.jpg")
//         .default,
//     tabletImageSrc:
//       require("../../../assets/product-yx1-earphones/tablet/image-product.jpg")
//         .default,
//     desktopImageSrc:
//       require("../../../assets/product-yx1-earphones/desktop/image-product.jpg")
//         .default,
//     imageAltText: "yx-1-earphones-image",
//     customImageStyles: "product-page-image yx1-earphones-image-width",
//   },
//   galleryImageData: {
//     galleryImageOneData: [
//       {
//         id: 1,
//         imageSrc:
//           require("../../../assets/product-yx1-earphones/mobile/image-gallery-1.jpg")
//             .default,
//         imageAltText: "yx-1-earphones-gallery-image-one-mobile",
//         imageSize: "mobile",
//       },
//       {
//         id: 2,
//         imageSrc:
//           require("../../../assets/product-yx1-earphones/tablet/image-gallery-1.jpg")
//             .default,
//         imageAltText: "yx-1-earphones-gallery-image-one-tablet",
//         imageSize: "tablet",
//       },
//       {
//         id: 3,
//         imageSrc:
//           require("../../../assets/product-yx1-earphones/desktop/image-gallery-1.jpg")
//             .default,
//         imageAltText: "yx-1-earphones-gallery-image-one-desktop",
//         imageSize: "desktop",
//       },
//     ],
//     galleryImageTwoData: [
//       {
//         id: 1,
//         imageSrc:
//           require("../../../assets/product-yx1-earphones/mobile/image-gallery-2.jpg")
//             .default,
//         imageAltText: "yx-1-earphones-gallery-image-two-mobile",
//         imageSize: "mobile",
//       },
//       {
//         id: 2,
//         imageSrc:
//           require("../../../assets/product-yx1-earphones/tablet/image-gallery-2.jpg")
//             .default,
//         imageAltText: "yx-1-earphones-gallery-image-two-tablet",
//         imageSize: "tablet",
//       },
//       {
//         id: 3,
//         imageSrc:
//           require("../../../assets/product-yx1-earphones/desktop/image-gallery-2.jpg")
//             .default,
//         imageAltText: "yx-1-earphones-gallery-image-two-desktop",
//         imageSize: "desktop",
//       },
//     ],
//     galleryImageThreeData: [
//       {
//         id: 1,
//         imageSrc:
//           require("../../../assets/product-yx1-earphones/mobile/image-gallery-3.jpg")
//             .default,
//         imageAltText: "yx-1-earphones-gallery-image-three-mobile",
//         imageSize: "mobile",
//       },
//       {
//         id: 2,
//         imageSrc:
//           require("../../../assets/product-yx1-earphones/tablet/image-gallery-3.jpg")
//             .default,
//         imageAltText: "yx-1-earphones-gallery-image-three-tablet",
//         imageSize: "tablet",
//       },
//       {
//         id: 3,
//         imageSrc:
//           require("../../../assets/product-yx1-earphones/desktop/image-gallery-3.jpg")
//             .default,
//         imageAltText: "yx-1-earphones-gallery-image-three-desktop",
//         imageSize: "desktop",
//       },
//     ],
//   },
//   relatedProductsImageData: [
//     [
//       {
//         id: 1,
//         imageSrc:
//           require("../../../assets/shared/mobile/image-xx99-mark-one-headphones.jpg")
//             .default,
//         imageAltText: "xx99-mark-one-headphones-image-mobile",
//         imageSize: "mobile",
//       },
//       {
//         id: 2,
//         imageSrc:
//           require("../../../assets/shared/tablet/image-xx99-mark-one-headphones.jpg")
//             .default,
//         imageAltText: "xx99-mark-one-headphones-image-tablet",
//         imageSize: "tablet",
//       },
//       {
//         id: 3,
//         imageSrc:
//           require("../../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg")
//             .default,
//         imageAltText: "xx99-mark-one-headphones-image-desktop",
//         imageSize: "desktop",
//       },
//     ],
//     [
//       {
//         id: 1,
//         imageSrc:
//           require("../../../assets/shared/mobile/image-xx59-headphones.jpg")
//             .default,
//         imageAltText: "xx59-headphones-image-mobile",
//         imageSize: "mobile",
//       },
//       {
//         id: 2,
//         imageSrc:
//           require("../../../assets/shared/tablet/image-xx59-headphones.jpg")
//             .default,
//         imageAltText: "xx59-headphones-image-tablet",
//         imageSize: "tablet",
//       },
//       {
//         id: 3,
//         imageSrc:
//           require("../../../assets/shared/desktop/image-xx59-headphones.jpg")
//             .default,
//         imageAltText: "xx59-headphones-image-desktop",
//         imageSize: "desktop",
//       },
//     ],
//     [
//       {
//         id: 1,
//         imageSrc: require("../../../assets/shared/mobile/image-zx9-speaker.jpg")
//           .default,
//         imageAltText: "zx9-speaker-image-mobile",
//         imageSize: "mobile",
//       },
//       {
//         id: 2,
//         imageSrc: require("../../../assets/shared/tablet/image-zx9-speaker.jpg")
//           .default,
//         imageAltText: "zx9-speaker-image-tablet",
//         imageSize: "tablet",
//       },
//       {
//         id: 3,
//         imageSrc:
//           require("../../../assets/shared/desktop/image-zx9-speaker.jpg")
//             .default,
//         imageAltText: "zx9-speaker-image-desktop",
//         imageSize: "desktop",
//       },
//     ],
//   ],
// };

// // const yx1EarphoneImageData = allProductImages.yx1Earphones;

// const ProductEarphones = () => {
//   return (
//     // <ProductPage productSlug="yx1-earphones" productImageData={imageData} />
//   );
// };

// export default ProductEarphones;
