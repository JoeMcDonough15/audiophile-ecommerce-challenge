import Button from "../Button/Button";
import SpecifyQuantity from "../SpecifyQuantity/SpecifyQuantity";
import "./featured-product-info.sass";
import fixPrice from "../../fixPrice";

interface FeaturedProductObject {
  id?: number;
  slug: string;
  name: string;
  abbreviatedName?: string;
  image: { mobile: string; tablet: string; desktop: string };
  category?: string;
  categoryImage?: { mobile: string; tablet: string; desktop: string };
  isNewProduct?: boolean;
  price: number;
  description?: string;
  teaserDescription?: string;
  features?: string;
  includes?: { quantity: number; item: string }[];
  gallery?: {
    first: { mobile: string; tablet: string; desktop: string };
    second: { mobile: string; tablet: string; desktop: string };
    third: { mobile: string; tablet: string; desktop: string };
  };
  others?: {
    slug: string;
    name: string;
    image: { mobile: string; tablet: string; desktop: string };
  }[];
}

interface ButtonData {
  buttonColor: string;
  buttonDestination?: string;
}

interface Props {
  isProductPage?: boolean;
  isCategoryPage?: boolean;
  isHeroSection?: boolean;
  isHomeFeatureOne?: boolean;
  featuredProduct: FeaturedProductObject;
  teaserOnly?: boolean;
  buttonData: ButtonData;
}

const FeaturedProductInfo = (props: Props): JSX.Element => {
  const {
    isProductPage,
    isCategoryPage,
    isHeroSection,
    isHomeFeatureOne,
    featuredProduct,
    teaserOnly,
    buttonData,
  } = props;

  const { name, teaserDescription, description, price, isNewProduct } =
    featuredProduct;

  const { buttonColor, buttonDestination } = buttonData;
  return (
    <div>
      {isProductPage ? (
        <div className={"featured-product-info col product-page-info"}>
          {isNewProduct && (
            <p className={"overline dark-orange-text"}>New Product</p>
          )}
          <h1
            className={
              "small-featured-product-header black-text product-page-header"
            }
          >
            {name}
          </h1>
          <p className={"product-page-description"}>{description}</p>
          <p className="product-price black-text">{`${fixPrice(price)}`}</p>
          <div className="purchase-buttons row">
            {" "}
            <SpecifyQuantity />
            <Button
              buttonText="Add to cart"
              className={`button-${buttonColor}`}
            />
          </div>
        </div>
      ) : (
        <div
          className={
            isHeroSection
              ? "featured-product-info col featured-product-hero-info"
              : isHomeFeatureOne
              ? "featured-product-info col home-feature-one-info"
              : "featured-product-info col"
          }
        >
          {isNewProduct && (
            <p
              className={
                isHeroSection
                  ? "overline new-product-grey-text"
                  : isHomeFeatureOne
                  ? "hide overline"
                  : isCategoryPage
                  ? "dark-orange-text overline"
                  : "overline"
              }
            >
              New Product
            </p>
          )}

          <h1
            className={
              isHeroSection
                ? "white-text featured-product-hero-header"
                : isHomeFeatureOne
                ? "home-feature-one-header white-text"
                : "small-featured-product-header black-text category-page-featured-product-header"
            }
          >
            {name}
          </h1>
          <p
            className={
              isHeroSection
                ? "featured-product-description-hero"
                : isHomeFeatureOne
                ? "home-feature-one-description light-grey-text"
                : "category-page-featured-product-description"
            }
          >
            {teaserOnly ? teaserDescription : description}
          </p>
          <Button
            buttonText="see product"
            className={`button-${buttonColor}`}
            buttonDestination={buttonDestination}
          />
        </div>
      )}
    </div>
  );
};
export default FeaturedProductInfo;
