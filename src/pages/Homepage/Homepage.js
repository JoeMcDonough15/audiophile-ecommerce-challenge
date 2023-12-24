import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import ProductCategoryMenu from "../../components/ProductCategoryMenu/ProductCategoryMenu";
import FeaturedProductOne from "../../components/FeaturedProductOne/FeaturedProductOne";
import FeaturedProductTwo from "../../components/FeaturedProductTwo/FeaturedProductTwo";
import FeaturedProductThree from "../../components/FeaturedProductThree/FeaturedProductThree";
import data from "../../data.json";
import "./homepage.sass";

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
const featuredProductThreeSlug = "yx1-earphones";

const Homepage = () => {
  console.log(findFeaturedProduct(data, featuredProductThreeSlug));
  return (
    <main>
      <HeroSection
        featuredProduct={findFeaturedProduct(data, heroFeaturedProductSlug)}
      />
      <ProductCategoryMenu />
      <section className="featured-products-section main-container col">
        <FeaturedProductOne
          featuredProduct={findFeaturedProduct(data, featuredProductOneSlug)}
        />
        <FeaturedProductTwo
          featuredProduct={findFeaturedProduct(data, featuredProductTwoSlug)}
        />
        <FeaturedProductThree
          featuredProduct={findFeaturedProduct(data, featuredProductThreeSlug)}
        />
      </section>

      {/* <AboutUs /> */}
      {/* <Footer /> */}
    </main>
  );
};

export default Homepage;
