import React from "react";
import Header from "../../components/Header/Header";
import ProductCategoryMenu from "../../components/ProductCategoryMenu/ProductCategoryMenu";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";

const Speakers = () => {
  return (
    <div>
      <Header withBanner bannerText="Speakers" />
      <ProductCategoryMenu />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Speakers;
