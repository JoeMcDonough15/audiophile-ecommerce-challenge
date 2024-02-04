import MobileMenu from "../../components/MobileMenu/MobileMenu";
import Cart from "../../components/Cart/Cart";
import HeroSection from "../../components/HeroSection/HeroSection";
import ProductCategoryMenu from "../../components/ProductCategoryMenu/ProductCategoryMenu";
import HomeFeatureOne from "../../components/HomeFeatureOne/HomeFeatureOne";
import HomeFeatureTwo from "../../components/HomeFeatureTwo/HomeFeatureTwo";
import HomeFeatureThree from "../../components/HomeFeatureThree/HomeFeatureThree";
import data from "../../data.json";
import "./homepage.sass";

const featuredProductSlugs: string[] = [
  "xx99-mark-two-headphones",
  "zx9-speaker",
  "zx7-speaker",
  "yx1-earphones",
];

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

export const findFeaturedProducts = (
  productList: FeaturedProductObject[],
  productSlugs: string[]
) => {
  const featuredProducts: FeaturedProductObject[] = [];
  productSlugs.forEach((productSlug: string) => {
    productList.forEach((productObject: FeaturedProductObject) => {
      if (productObject.slug === productSlug) {
        featuredProducts.push(productObject);
      }
    });
  });
  return featuredProducts;
};

const [
  featuredProductHero,
  featuredProductOne,
  featuredProductTwo,
  featuredProductThree,
] = findFeaturedProducts(data, featuredProductSlugs);

const Homepage = () => {
  return (
    <>
      <MobileMenu />
      <Cart />
      <main className="homepage">
        <HeroSection featuredProduct={featuredProductHero} />
        <ProductCategoryMenu />
        <section className="featured-products-section main-container col">
          <HomeFeatureOne featuredProduct={featuredProductOne} />
          <HomeFeatureTwo featuredProduct={featuredProductTwo} />
          <HomeFeatureThree featuredProduct={featuredProductThree} />
        </section>
      </main>
    </>
  );
};

export default Homepage;
