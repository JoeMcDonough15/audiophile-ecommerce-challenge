import { useParams } from "react-router";
import Banner from "../../components/Banner/Banner";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import data from "../../data.json";
import "./category-page.sass";
import { FeaturedProductObject } from "../../components/App";

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

const CategoryPage = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
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
              return <div key={productIndex}></div>;
              // return (
              // <FeaturedProduct
              //   key={productIndex}
              //   // imageData={imageData[productIndex]}
              //   productSlug={product.slug}
              //   buttonData={{
              //     buttonColor: "dark-orange",
              //     buttonDestination: `product-${product.slug}`,
              //   }}
              // />
              // );
            }
          )}
        </section>
      </main>
    </>
  );
};

export default CategoryPage;
