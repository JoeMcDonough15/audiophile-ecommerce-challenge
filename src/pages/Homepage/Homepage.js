import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import ProductCategoryMenu from "../../components/ProductCategoryMenu/ProductCategoryMenu";
import FeaturedProductOne from "../../components/FeaturedProductOne/FeaturedProductOne";
import FeaturedProductTwo from "../../components/FeaturedProductTwo/FeaturedProductTwo";
import FeaturedProductThree from "../../components/FeaturedProductThree/FeaturedProductThree";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import data from "../../data.json";
import "./homepage.sass";

const featuredProductSlugs = [
  "xx99-mark-two-headphones",
  "zx9-speaker",
  "zx7-speaker",
  "yx1-earphones",
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

const [
  featuredProductHero,
  featuredProductOne,
  featuredProductTwo,
  featuredProductThree,
] = findFeaturedProducts(data, featuredProductSlugs);

const Homepage = () => {
  return (
    <main>
      <HeroSection featuredProduct={featuredProductHero} />
      <ProductCategoryMenu />
      <section className="featured-products-section main-container col">
        <FeaturedProductOne featuredProduct={featuredProductOne} />
        <FeaturedProductTwo featuredProduct={featuredProductTwo} />
        <FeaturedProductThree featuredProduct={featuredProductThree} />
      </section>
      <AboutUs />
      <Footer />
    </main>
  );
};

export default Homepage;
