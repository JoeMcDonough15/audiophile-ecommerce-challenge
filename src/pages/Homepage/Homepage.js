import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import ProductCategoryMenu from "../../components/ProductCategoryMenu/ProductCategoryMenu";
import data from "../../data.json";

const findFeaturedProduct = (productList, productSlug) => {
  let featuredProduct;
  productList.forEach((productObject) => {
    if (productObject.slug === productSlug) {
      featuredProduct = productObject;
    }
  });
  return featuredProduct;
};

const featuredProductSlug = "xx99-mark-two-headphones";

const Homepage = () => {
  return (
    <main>
      <HeroSection
        featuredProductInformation={findFeaturedProduct(
          data,
          featuredProductSlug
        )}
      />
      <ProductCategoryMenu />
    </main>
  );
};

export default Homepage;
