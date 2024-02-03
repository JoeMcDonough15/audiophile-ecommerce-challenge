import Banner from "../../components/Banner/Banner";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import ProductCategoryMenu from "../../components/ProductCategoryMenu/ProductCategoryMenu";
import data from "../../data.json";
import "./category-page.sass";

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

interface FeaturedProductImageData {
  mobileImageSrc: string;
  tabletImageSrc: string;
  desktopImageSrc: string;
  imageAltText: string;
  customImageStyles: string;
}

interface Props {
  imageData: FeaturedProductImageData[];
  categoryName: string;
}

const CategoryPage = ({ imageData, categoryName }: Props) => {
  const featuredProducts = data
    .filter((product: FeaturedProductObject) => {
      return product.category === categoryName;
    })
    .sort(
      (
        featuredProduct: FeaturedProductObject,
        nextFeaturedProduct: FeaturedProductObject
      ) => {
        if (featuredProduct.id > nextFeaturedProduct.id) {
          return -1;
        } else if (featuredProduct.id < nextFeaturedProduct.id) {
          return 1;
        } else {
          return 0;
        }
      }
    );
  return (
    <>
      <Banner bannerText={categoryName} />
      <main className="category-page">
        <section className="category-features col">
          {featuredProducts.map(
            (product: FeaturedProductObject, productIndex: number) => {
              return (
                <FeaturedProduct
                  key={productIndex}
                  imageData={imageData[productIndex]}
                  featuredProduct={product}
                  buttonData={{
                    buttonColor: "dark-orange",
                    buttonDestination: `product-${product.slug}`,
                  }}
                />
              );
            }
          )}
        </section>
        {/* <ProductCategoryMenu /> */}
      </main>
    </>
  );
};

export default CategoryPage;
