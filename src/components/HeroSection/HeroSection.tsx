import ThinRule from "../ThinRule/ThinRule";
import "./hero-section.sass";
import FeaturedProductInfo from "../FeaturedProductInfo/FeaturedProductInfo";

interface Props {
  productSlug: string;
}

const HeroSection = ({ productSlug }: Props): JSX.Element => {
  return (
    <section className="hero-section-container">
      <section className="hero-section col main-container">
        <ThinRule customStyle="thin-rule-header" />
        <FeaturedProductInfo
          productSlug={productSlug}
          teaserOnly
          isHeroSection
          buttonData={{
            buttonColor: "dark-orange",
            buttonDestination: `product-${productSlug}`,
          }}
        />
      </section>
    </section>
  );
};

export default HeroSection;
