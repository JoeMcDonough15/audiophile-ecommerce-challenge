import "./home-feature-three.sass";
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

const HomeFeatureThree = ({ featuredProduct }: Props): JSX.Element => {
  const { slug } = featuredProduct;
  return (
    <section className="home-feature-three-container">
      <div className="home-feature-three-image-container"></div>
      <div className="home-feature-three-text-container content-slab">
        <FeaturedProductInfo
          featuredProduct={featuredProduct}
          customHeaderText="YX1 earphones"
          isHomeFeatureThree
          buttonData={{
            buttonColor: "transparent",
            buttonDestination: `product-${slug}`,
          }}
        />
      </div>
    </section>
  );
};

export default HomeFeatureThree;
