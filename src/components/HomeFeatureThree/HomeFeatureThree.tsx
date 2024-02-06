import "./home-feature-three.sass";
import HeadingAndButton from "../HeadingAndButton/HeadingAndButton";

interface Props {
  productSlug: string;
}

const HomeFeatureThree = ({ productSlug }: Props): JSX.Element => {
  const customProductName = "YX1 earphones";
  return (
    <section className="home-feature-three-container">
      <div className="home-feature-three-image-container"></div>
      <div className="home-feature-three-text-container content-slab">
        <HeadingAndButton
          productName={customProductName}
          isHomeFeatureThree
          buttonData={{
            buttonColor: "transparent",
            buttonDestination: `product/${productSlug}`,
          }}
        />
      </div>
    </section>
  );
};

export default HomeFeatureThree;
