import React from "react";
import Header from "../../components/Header/Header";
import ProductCategoryMenu from "../../components/ProductCategoryMenu/ProductCategoryMenu";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";

const Headphones = () => {
  return (
    <div>
      <Header withBanner bannerText="Headphones" />
      <ProductCategoryMenu />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Headphones;
