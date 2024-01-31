import React from "react";
import ThinRule from "../ThinRule/ThinRule";
import "./hero-section.sass";
import FeaturedProductInfo from "../FeaturedProductInfo/FeaturedProductInfo";

const HeroSection = (props) => {
  const { featuredProduct } = props;
  const { slug } = featuredProduct;
  return (
    <section className="hero-section col main-container">
      <ThinRule customStyle="thin-rule-header" />
      <FeaturedProductInfo
        featuredProduct={featuredProduct}
        isHeroSection
        includesProductDescription
        teaserOnly
        buttonData={{
          buttonColor: "dark-orange",
          buttonDestination: `product-${slug}`,
        }}
      />
    </section>
  );
};

export default HeroSection;
