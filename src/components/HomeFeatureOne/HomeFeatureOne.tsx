import FeaturedProductInfo from "../ProductInfoComponents/FeaturedProductInfo";
import CirclePatternSvg from "../CirclePatternSvg/CirclePatternSvg";
import CustomImage from "../CustomImage/CustomImage";
import "./home-feature-one.sass";
import { useContext } from "react";
import PageNotFound from "../../pages/PageNotFound";
import ButtonLink from "../ButtonLink/ButtonLink";
import { ProductsContext } from "../Context/ProductsContext";
import { SvgDetailsProvider } from "../Context/SvgDetailsContext";

interface Props {
  productSlug: string;
}

const HomeFeatureOne = ({ productSlug }: Props): JSX.Element => {
  //@ts-ignore
  const { data: allProducts, findProduct } = useContext(ProductsContext);
  const product = findProduct(allProducts, productSlug);

  if (!product) {
    return <PageNotFound />;
  }

  const { homePageImage, name, teaserDescription } = product;
  // @ts-ignore
  const { mobile, tablet, desktop, imageAltText } = homePageImage;
  return (
    <section className="home-feature-one">
      <SvgDetailsProvider>
        <CirclePatternSvg />
      </SvgDetailsProvider>
      <div className="home-feature-one-image-and-text">
        <div className="home-feature-one-image-container">
          <CustomImage
            className="home-feature-one-image image-mobile"
            src={mobile}
            altText={imageAltText}
          />
          <CustomImage
            className="home-feature-one-image image-tablet"
            src={tablet}
            altText={imageAltText}
          />
          <CustomImage
            className="home-feature-one-image image-desktop"
            src={desktop}
            altText={imageAltText}
          />
        </div>
        <div className={"featured-product-info col home-feature-one-info"}>
          <FeaturedProductInfo
            productName={name}
            // @ts-ignore
            productDescription={teaserDescription}
            headerClass="home-feature-one-header"
            descriptionClass="home-feature-one-description light-grey-text"
          />
          <ButtonLink
            buttonText="see product"
            className={`button-black`}
            buttonDestination={`product/${productSlug}`}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeFeatureOne;
