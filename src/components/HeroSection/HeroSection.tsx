import ThinRule from "../ThinRule/ThinRule";
import "./hero-section.sass";
import FeaturedProductInfo from "../ProductInfoComponents/FeaturedProductInfo";
import { useContext } from "react";
import PageNotFound from "../../pages/PageNotFound";
import NewProductIntro from "../NewProductIntro/NewProductIntro";
import ButtonLink from "../ButtonLink/ButtonLink";
import { ProductsContext } from "../Context/ProductsContext";
import { ROUTE_PATHS } from "../constants";

interface Props {
  productSlug: string;
}

const HeroSection = ({ productSlug }: Props): JSX.Element => {
  // @ts-ignore
  const { data: allProducts, findProduct } = useContext(ProductsContext);
  const product = findProduct(allProducts, productSlug);

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
          <ButtonLink
            buttonText="see product"
            className={`button-dark-orange`}
            buttonDestination={`/${ROUTE_PATHS.PRODUCT}/${productSlug}`}
          />
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
