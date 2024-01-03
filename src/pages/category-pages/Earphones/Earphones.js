import React from "react";
import Header from "../../../components/Header/Header";
import CategoryFeaturedProduct from "../../../components/CategoryFeaturedProduct/CategoryFeaturedProduct";
import ProductCategoryMenu from "../../../components/ProductCategoryMenu/ProductCategoryMenu";
import AboutUs from "../../../components/AboutUs/AboutUs";
import Footer from "../../../components/Footer/Footer";
import data from "../../../data.json";
import yxOneMobileImage from "../../../assets/product-yx1-earphones/mobile/image-product.jpg";
import yxOneTabletImage from "../../../assets/product-yx1-earphones/tablet/image-product.jpg";
import yxOneDesktopImage from "../../../assets/product-yx1-earphones/desktop/image-product.jpg";
import "../category-pages.sass";

const featuredProductSlugs = ["yx1-earphones"];

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

const [featuredProductOne] = findFeaturedProducts(data, featuredProductSlugs);

const featureOneImageData = {
  mobileImageSrc: yxOneMobileImage,
  tabletImageSrc: yxOneTabletImage,
  desktopImageSrc: yxOneDesktopImage,
  imageAltText: "yx-1-earphones-image",
  customImageStyles: "yx1-earphones-image-width",
};

const Earphones = () => {
  return (
    <main className="earphones-page">
      <Header withBanner bannerText="Earphones" />
      <section className="category-features col">
        <CategoryFeaturedProduct
          imageData={featureOneImageData}
          featuredProduct={featuredProductOne}
          newProduct
          featuredProductDescription
        />
      </section>
      <ProductCategoryMenu />
      <AboutUs />
      <Footer />
    </main>
  );
};

export default Earphones;
