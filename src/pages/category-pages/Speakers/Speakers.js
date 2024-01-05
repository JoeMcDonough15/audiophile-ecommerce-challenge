import React from "react";
import Header from "../../../components/Header/Header";
import FeaturedProduct from "../../../components/FeaturedProduct/FeaturedProduct";
import ProductCategoryMenu from "../../../components/ProductCategoryMenu/ProductCategoryMenu";
import AboutUs from "../../../components/AboutUs/AboutUs";
import Footer from "../../../components/Footer/Footer";
import data from "../../../data.json";
import zxNineMobileImage from "../../../assets/product-zx9-speaker/mobile/image-product.jpg";
import zxNineTabletImage from "../../../assets/product-zx9-speaker/tablet/image-product.jpg";
import zxNineDesktopImage from "../../../assets/product-zx9-speaker/desktop/image-product.jpg";
import zxSevenMobileImage from "../../../assets/product-zx7-speaker/mobile/image-product.jpg";
import zxSevenTabletImage from "../../../assets/product-zx7-speaker/tablet/image-product.jpg";
import zxSevenDesktopImage from "../../../assets/product-zx7-speaker/desktop/image-product.jpg";
import "../category-pages.sass";

const featuredProductSlugs = ["zx9-speaker", "zx7-speaker"];

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

const [featuredProductOne, featuredProductTwo] = findFeaturedProducts(
  data,
  featuredProductSlugs
);

const featureOneImageData = {
  mobileImageSrc: zxNineMobileImage,
  tabletImageSrc: zxNineTabletImage,
  desktopImageSrc: zxNineDesktopImage,
  imageAltText: "zx-9-speaker-image",
  customImageStyles: "zx9-speaker-image-width",
};

const featureTwoImageData = {
  mobileImageSrc: zxSevenMobileImage,
  tabletImageSrc: zxSevenTabletImage,
  desktopImageSrc: zxSevenDesktopImage,
  imageAltText: "zx-7-speaker-image",
  customImageStyles: "zx7-speaker-image-width",
};

const Speakers = () => {
  return (
    <main className="category-page speakers-page">
      <Header withBanner bannerText="Speakers" />
      <section className="category-features col">
        <FeaturedProduct
          imageData={featureOneImageData}
          featuredProduct={featuredProductOne}
          newProduct
          featuredProductDescription
          buttonDestination={`product-${featuredProductOne.slug}`}
        />
        <FeaturedProduct
          imageData={featureTwoImageData}
          featuredProduct={featuredProductTwo}
          featuredProductDescription
          buttonDestination={`product-${featuredProductTwo.slug}`}
        />
      </section>
      <ProductCategoryMenu />
      <AboutUs />
      <Footer />
    </main>
  );
};

export default Speakers;
