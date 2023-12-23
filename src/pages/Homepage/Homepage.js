import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import ProductCategoryMenu from "../../components/ProductCategoryMenu/ProductCategoryMenu";
import FeaturedProductOne from "../../components/FeaturedProductOne/FeaturedProductOne";
import FeaturedProductTwo from "../../components/FeaturedProductTwo/FeaturedProductTwo";
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

const heroFeaturedProductSlug = "xx99-mark-two-headphones";
const featuredProductOneSlug = "zx9-speaker";
const featuredProductTwoSlug = "zx7-speaker";

const Homepage = () => {
  console.log(findFeaturedProduct(data, featuredProductTwoSlug));
  return (
    <main>
      <HeroSection
        featuredProduct={findFeaturedProduct(data, heroFeaturedProductSlug)}
      />
      <ProductCategoryMenu />
      <FeaturedProductOne
        featuredProduct={findFeaturedProduct(data, featuredProductOneSlug)}
      />
      <FeaturedProductTwo
        featuredProduct={findFeaturedProduct(data, featuredProductTwoSlug)}
      />
      {/* <FeaturedProductThree /> */}
      {/* <AboutUs /> */}
      {/* <Footer /> */}
    </main>
  );
};

export default Homepage;
