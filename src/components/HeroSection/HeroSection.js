import React from "react";
import ThinRule from "../ThinRule/ThinRule";
import "./hero-section.sass";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";

const HeroSection = (props) => {
  return (
    <section className="hero-section col">
      <ThinRule />
      <FeaturedProduct />
    </section>
  );
};

export default HeroSection;
