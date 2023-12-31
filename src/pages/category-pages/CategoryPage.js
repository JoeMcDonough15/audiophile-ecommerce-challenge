import React from "react";
import Header from "../../components/Header/Header";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import ProductCategoryMenu from "../../components/ProductCategoryMenu/ProductCategoryMenu";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import data from "../../data.json";
import "./category-page.sass";

const CategoryPage = (props) => {
  const { imageData, categoryName } = props;
  const featuredProducts = data
    .filter((product) => {
      return product.category === categoryName;
    })
    .sort((featuredProduct, nextFeaturedProduct) => {
      if (featuredProduct.id > nextFeaturedProduct.id) {
        return -1;
      } else if (featuredProduct.id < nextFeaturedProduct.id) {
        return 1;
      } else {
        return 0;
      }
    });
  return (
    <main className="category-page">
      <Header withBanner bannerText={categoryName} />
      <section className="category-features col">
        {featuredProducts.map((product, productIndex) => {
          return (
            <FeaturedProduct
              key={productIndex}
              imageData={imageData[productIndex]}
              featuredProduct={product}
              isCategoryPage
              includesProductDescription
              buttonDestination={`product-${product.slug}`}
            />
          );
        })}
      </section>
      <ProductCategoryMenu />
      <AboutUs />
      <Footer />
    </main>
  );
};

export default CategoryPage;
