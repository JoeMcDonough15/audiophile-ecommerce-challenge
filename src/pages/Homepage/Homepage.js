import React from "react";
import Header from "../../components/Header/Header";
import ProductCategoryMenu from "../../components/ProductCategoryMenu/ProductCategoryMenu";
import HomeFeatureOne from "../../components/HomeFeatureOne/HomeFeatureOne";
import HomeFeatureTwo from "../../components/HomeFeatureTwo/HomeFeatureTwo";
import HomeFeatureThree from "../../components/HomeFeatureThree/HomeFeatureThree";
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
    <main className="homepage">
      <Header withHero featuredProduct={featuredProductHero} />
      <ProductCategoryMenu />
      <section className="featured-products-section main-container col">
        <HomeFeatureOne featuredProduct={featuredProductOne} />
        <HomeFeatureTwo featuredProduct={featuredProductTwo} />
        <HomeFeatureThree featuredProduct={featuredProductThree} />
      </section>
      <AboutUs />
      <Footer />
    </main>
  );
};

export default Homepage;
