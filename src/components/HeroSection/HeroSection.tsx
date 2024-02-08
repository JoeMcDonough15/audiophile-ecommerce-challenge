import ThinRule from "../ThinRule/ThinRule";
import "./hero-section.sass";
import FeaturedProductInfo from "../ProductInfoComponents/FeaturedProductInfo";
import { useContext } from "react";
import { FeaturedProductContext, findFeaturedProduct } from "../App";
import PageNotFound from "../../pages/PageNotFound";
import Button from "../Button/Button";
import NewProductIntro from "../NewProductIntro/NewProductIntro";

interface Props {
  productSlug: string;
}

const HeroSection = ({ productSlug }: Props): JSX.Element => {
  const allProducts = useContext(FeaturedProductContext);
  const product = findFeaturedProduct(allProducts, productSlug);

  if (!product) {
    return <PageNotFound />;
  }
  const { name, teaserDescription, isNewProduct } = product;
  return (
    <section className="hero-section-container">
      <section className="hero-section col main-container">
        <ThinRule customStyle="thin-rule-header" />
        <div className="featured-product-info col featured-product-hero-info">
          {isNewProduct && (
            <NewProductIntro className="new-product-grey-text" />
          )}
          <FeaturedProductInfo
            productName={name}
            // @ts-ignore
            productDescription={teaserDescription}
            headerClass="featured-product-hero-header"
            descriptionClass="featured-product-description-hero"
          />
          <Button
            buttonText="see product"
            className={`button-dark-orange`}
            buttonDestination={`/product/${productSlug}`}
          />
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
