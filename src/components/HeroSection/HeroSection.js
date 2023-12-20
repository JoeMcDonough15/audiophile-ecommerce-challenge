import React from "react";
import ThinRule from "../ThinRule/ThinRule";
import "./hero-section.sass";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";

const HeroSection = (props) => {
  const featuredProductInformation = props.featuredProductInformation;
  return (
    <section className="hero-section col">
      <ThinRule />
      <FeaturedProduct featuredProduct={featuredProductInformation} />
    </section>
  );
};

export default HeroSection;
