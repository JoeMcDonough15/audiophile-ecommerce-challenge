import FeaturedProductInfo from "../FeaturedProductInfo/FeaturedProductInfo";
import CirclePatternSvg from "../CirclePatternSvg/CirclePatternSvg";
import CustomImage from "../CustomImage/CustomImage";
import "./home-feature-one.sass";
// @ts-ignore
import image from "./images/image-speaker-zx9-desktop.png";

interface Props {
  productSlug: string;
}

const HomeFeatureOne = ({ productSlug }: Props): JSX.Element => {
  return (
    <section className="home-feature-one">
      <CirclePatternSvg />
      <div className="home-feature-one-image-and-text">
        <div className="home-feature-one-image-container">
          <CustomImage
            className="home-feature-one-image image-mobile"
            src={require("./images/image-speaker-zx9-mobile.png").default}
            // src={
            //   require("../../assets/product-zx9-speaker/mobile/image-product.jpg")
            //     .default
            // }
            // src={require(`${image.mobile}`).default} not working with props
            altText="home-feature-one-image-mobile"
          />
          <CustomImage
            className="home-feature-one-image image-tablet"
            src={require("./images/image-speaker-zx9-tablet.png").default}
            altText="home-feature-one-image-tablet"
          />
          <CustomImage
            className="home-feature-one-image image-desktop"
            src={require("./images/image-speaker-zx9-desktop.png").default}
            altText="home-feature-one-image-desktop"
          />
        </div>
        <FeaturedProductInfo
          productSlug={productSlug}
          teaserOnly
          isHomeFeatureOne
          buttonData={{
            buttonColor: "black",
            buttonDestination: `product-${productSlug}`,
          }}
        />
      </div>
    </section>
  );
};

export default HomeFeatureOne;
