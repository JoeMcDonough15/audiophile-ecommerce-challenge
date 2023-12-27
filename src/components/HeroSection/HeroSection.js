import React from "react";
import ThinRule from "../ThinRule/ThinRule";
import "./hero-section.sass";
import FeaturedProductInfo from "../FeaturedProductInfo/FeaturedProductInfo";

const HeroSection = (props) => {
  const { featuredProduct } = props;
  return (
    <section className="hero-section col main-container">
      <ThinRule customStyle="thin-rule-hero" />
      <FeaturedProductInfo
        featuredProduct={featuredProduct}
        newProduct
        customClasses={{
          containerClasses: "featured-product-hero-info col",
          headerClasses: "featured-product-hero-header",
          newProductIntroClasses: "overline new-product-intro",
          teaserDescriptionClasses: "featured-product-teaser-hero",
          buttonData: { buttonColor: "dark-orange", buttonText: "see product" },
        }}
      />
    </section>
  );
};

export default HeroSection;
