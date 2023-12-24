import React from "react";
import ThinRule from "../ThinRule/ThinRule";
import "./hero-section.sass";
import FeaturedProductInfo from "../FeaturedProductInfo/FeaturedProductInfo";

const HeroSection = (props) => {
  const { featuredProduct } = props;
  return (
    <section className="hero-section col">
      <ThinRule />
      <FeaturedProductInfo
        featuredProduct={featuredProduct}
        newProduct
        buttonColor="dark-orange"
        buttonText="see product"
        customClasses="main-container center-flex-items"
      />
    </section>
  );
};

export default HeroSection;
