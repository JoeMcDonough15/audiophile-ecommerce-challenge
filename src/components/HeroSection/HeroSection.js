import React from "react";
import ThinRule from "../ThinRule/ThinRule";
import "./hero-section.sass";
import FeaturedProductInfo from "../FeaturedProductInfo/FeaturedProductInfo";

const HeroSection = (props) => {
  const { featuredProduct } = props;
  return (
    <section className="hero-section col main-container">
      <ThinRule customStyle="thin-rule-header" />
      <FeaturedProductInfo
        featuredProduct={featuredProduct}
        newProduct
        featuredProductDescription
        teaserOnly
        customClasses={{
          containerClasses: "featured-product-hero-info col",
          headerClasses: "featured-product-hero-header white-text",
          newProductIntroClasses:
            "overline new-product-intro-text new-product-grey-text",
          productDescriptionClasses:
            "featured-product-description featured-product-description-hero",
          buttonData: { buttonColor: "dark-orange", buttonText: "see product" },
        }}
      />
    </section>
  );
};

export default HeroSection;
