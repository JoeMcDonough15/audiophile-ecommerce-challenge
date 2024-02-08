import HeroSection from "../../components/HeroSection/HeroSection";
import ProductCategoryMenu from "../../components/ProductCategoryMenu/ProductCategoryMenu";
import HomeFeatureOne from "../../components/HomeFeatureOne/HomeFeatureOne";
import HomeFeatureTwo from "../../components/HomeFeatureTwo/HomeFeatureTwo";
import HomeFeatureThree from "../../components/HomeFeatureThree/HomeFeatureThree";
import "./homepage.sass";

const HERO_PRODUCT_SLUG = "xx99-mark-two-headphones";
const HOME_FEATURE_ONE_SLUG = "zx9-speaker";
const HOME_FEATURE_TWO_SLUG = "zx7-speaker";
const HOME_FEATURE_THREE_SLUG = "yx1-earphones";

const Homepage = () => {
  return (
    <>
      <main className="homepage">
        <HeroSection productSlug={HERO_PRODUCT_SLUG} />
        <ProductCategoryMenu />
        <section className="featured-products-section main-container col">
          <HomeFeatureOne productSlug={HOME_FEATURE_ONE_SLUG} />
          <HomeFeatureTwo productSlug={HOME_FEATURE_TWO_SLUG} />
          <HomeFeatureThree productSlug={HOME_FEATURE_THREE_SLUG} />
        </section>
      </main>
    </>
  );
};

export default Homepage;
