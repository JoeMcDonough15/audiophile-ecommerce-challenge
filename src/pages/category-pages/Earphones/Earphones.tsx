import CategoryPage from "../CategoryPage";

const featureOneImageData = {
  mobileImageSrc:
    require("../../../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg")
      .default,
  tabletImageSrc:
    require("../../../assets/product-yx1-earphones/tablet/image-category-page-preview.jpg")
      .default,
  desktopImageSrc:
    require("../../../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg")
      .default,
  imageAltText: "yx-1-earphones-image",
  customImageStyles: "yx1-earphones-image-width",
};

const imageData = [featureOneImageData];

const Earphones = () => {
  return <CategoryPage categoryName="earphones" imageData={imageData} />;
};

export default Earphones;
