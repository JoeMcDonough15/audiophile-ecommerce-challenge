import React from "react";
import Header from "../../components/Header/Header";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import Cart from "../../components/Cart/Cart";
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

interface FeaturedProductObject {
  id: number;
  slug: string;
  name: string;
  abbreviatedName: string;
  image: { mobile: string; tablet: string; desktop: string };
  category: string;
  categoryImage: { mobile: string; tablet: string; desktop: string };
  isNewProduct: boolean;
  price: number;
  description: string;
  features: string;
  includes: { quantity: number; item: string }[];
  gallery: {
    first: { mobile: string; tablet: string; desktop: string };
    second: { mobile: string; tablet: string; desktop: string };
    third: { mobile: string; tablet: string; desktop: string };
    others: {
      slug: string;
      name: string;
      image: { mobile: string; tablet: string; desktop: string };
    }[];
  };
}

const findFeaturedProducts = (productList, productSlugs) => {
  const featuredProducts: FeaturedProductObject[] = [];
  productSlugs.forEach((productSlug: string) => {
    productList.forEach((productObject: FeaturedProductObject) => {
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
    <div>
      <Header withHero featuredProduct={featuredProductHero} />
      <MobileMenu />
      <Cart />
      <main className="homepage">
        <ProductCategoryMenu />
        <section className="featured-products-section main-container col">
          <HomeFeatureOne featuredProduct={featuredProductOne} />
          <HomeFeatureTwo featuredProduct={featuredProductTwo} />
          <HomeFeatureThree featuredProduct={featuredProductThree} />
        </section>
        <AboutUs />
        <Footer />
      </main>
    </div>
  );
};

export default Homepage;
