import React from "react";
import Header from "../../components/Header/Header";
import CategoryFeaturedProduct from "../../components/CategoryFeaturedProduct/CategoryFeaturedProduct";
import ProductCategoryMenu from "../../components/ProductCategoryMenu/ProductCategoryMenu";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import data from "../../data.json";
import "./headphones.sass";
import markTwoMobileImage from "./assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import markTwoTabletImage from "./assets/product-xx99-mark-two-headphones/tablet/image-product.jpg";
import markTwoDesktopImage from "./assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import markOneMobileImage from "./assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import markOneTabletImage from "./assets/product-xx99-mark-one-headphones/tablet/image-product.jpg";
import markOneDesktopImage from "./assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import xxFiveNineMobileImage from "./assets/product-xx59-headphones/mobile/image-product.jpg";
import xxFiveNineTabletImage from "./assets/product-xx59-headphones/tablet/image-product.jpg";
import xxFiveNineDesktopImage from "./assets/product-xx59-headphones/desktop/image-product.jpg";

const featuredProductSlugs = [
  "xx99-mark-two-headphones",
  "xx99-mark-one-headphones",
  "xx59-headphones",
];

const findFeaturedProducts = (productList, productSlugs) => {
  const featuredProducts = [];
  productSlugs.forEach((productSlug) => {
    productList.forEach((productObject) => {
      if (productObject.slug === productSlug) {
        featuredProducts.push(productObject);
      }
    });
  });
  return featuredProducts;
};

const [headphonesFeatureOne, headphonesFeatureTwo, headphonesFeatureThree] =
  findFeaturedProducts(data, featuredProductSlugs);

const featureOneImageData = {
  mobileImageSrc: markTwoMobileImage,
  tabletImageSrc: markTwoTabletImage,
  desktopImageSrc: markTwoDesktopImage,
  imageAltText: "mark-two-headphones-image",
};

const featureTwoImageData = {
  mobileImageSrc: markOneMobileImage,
  tabletImageSrc: markOneTabletImage,
  desktopImageSrc: markOneDesktopImage,
  imageAltText: "mark-one-headphones-image",
};

const featureThreeImageData = {
  mobileImageSrc: xxFiveNineMobileImage,
  tabletImageSrc: xxFiveNineTabletImage,
  desktopImageSrc: xxFiveNineDesktopImage,
  imageAltText: "xx59-headphones-image",
};

const Headphones = () => {
  return (
    <main className="headphones-page">
      <Header withBanner bannerText="Headphones" />
      <section className="category-features col">
        <CategoryFeaturedProduct
          imageData={featureOneImageData}
          featuredProduct={headphonesFeatureOne}
          newProduct
          featuredProductDescription
        />
        <CategoryFeaturedProduct
          imageData={featureTwoImageData}
          featuredProduct={headphonesFeatureTwo}
          featuredProductDescription
        />
        <CategoryFeaturedProduct
          imageData={featureThreeImageData}
          featuredProduct={headphonesFeatureThree}
          featuredProductDescription
        />
      </section>
      <ProductCategoryMenu />
      <AboutUs />
      <Footer />
    </main>
  );
};

export default Headphones;
