import FeaturedProductInfo from "../ProductInfoComponents/FeaturedProductInfo";
import CirclePatternSvg from "../CirclePatternSvg/CirclePatternSvg";
import CustomImage from "../CustomImage/CustomImage";
import "./home-feature-one.sass";
import { FeaturedProductContext, findFeaturedProduct } from "../App";
import { useContext } from "react";
import PageNotFound from "../../pages/PageNotFound";
import ButtonLink from "../ButtonLink/ButtonLink";

interface Props {
  productSlug: string;
}

const HomeFeatureOne = ({ productSlug }: Props): JSX.Element => {
  const allProducts = useContext(FeaturedProductContext);
  const product = findFeaturedProduct(allProducts, productSlug);

  if (!product) {
    return <PageNotFound />;
  }

  const { homePageImage, name, teaserDescription } = product;
  // @ts-ignore
  const { mobile, tablet, desktop, imageAltText } = homePageImage;
  return (
    <section className="home-feature-one">
      <CirclePatternSvg />
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
