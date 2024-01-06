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
        includesProductDescription
        teaserOnly
        customClasses={{
          containerClasses: "featured-product-hero-info",
          headerClasses: "featured-product-hero-header",
          newProductIntroClasses: "new-product-grey-text",
          productDescriptionClasses: "featured-product-description-hero",
          buttonData: {
            buttonColor: "dark-orange",
            buttonDestination: `product-${slug}`,
          },
        }}
      />
    </section>
  );
};

export default HeroSection;
