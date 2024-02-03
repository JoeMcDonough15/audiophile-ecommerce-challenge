import React from "react";
import ThinRule from "../ThinRule/ThinRule";
import "./hero-section.sass";
import FeaturedProductInfo from "../FeaturedProductInfo/FeaturedProductInfo";

interface FeaturedProductObject {
  id: number;
  slug: string;
  name: string;
  abbreviatedName: string;
  image: { mobile: string; tablet: string; desktop: string };
  category: string;
  categoryImage: { mobile: string; tablet: string; desktop: string };
  isNewProduct: boolean;
  price: number;
  description: string;
  teaserDescription?: string;
  features: string;
  includes: { quantity: number; item: string }[];
  gallery: {
    first: { mobile: string; tablet: string; desktop: string };
    second: { mobile: string; tablet: string; desktop: string };
    third: { mobile: string; tablet: string; desktop: string };
  };
  others: {
    slug: string;
    name: string;
    image: { mobile: string; tablet: string; desktop: string };
  }[];
}

interface Props {
  featuredProduct: FeaturedProductObject;
}

const HeroSection = ({ featuredProduct }: Props): JSX.Element => {
  const { slug } = featuredProduct;
  return (
    <section className="hero-section-container">
      <section className="hero-section col main-container">
        <ThinRule customStyle="thin-rule-header" />
        <FeaturedProductInfo
          featuredProduct={featuredProduct}
          includesProductDescription
          teaserOnly
          isHeroSection
          buttonData={{
            buttonColor: "dark-orange",
            buttonDestination: `product-${slug}`,
          }}
        />
      </section>
    </section>
  );
};

export default HeroSection;
