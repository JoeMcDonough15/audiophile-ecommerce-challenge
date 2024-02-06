import { useParams } from "react-router";
import Banner from "../../components/Banner/Banner";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import "./category-page.sass";
import {
  FeaturedProductContext,
  FeaturedProductObject,
} from "../../components/App";
import { useContext } from "react";
import allProductImages from "../../imageData";

interface FeaturedProductImageData {
  mobileImageSrc: string;
  tabletImageSrc: string;
  desktopImageSrc: string;
  imageAltText: string;
  customImageStyles: string;
}

const CategoryPage = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const allProducts = useContext(FeaturedProductContext);
  const categoryPageProducts = allProducts
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

  const categoryPageImageData = categoryPageProducts.map(
    (pageProduct): FeaturedProductImageData[] => {
      const pageProductSlug = pageProduct.slug;
      // @ts-ignore
      return allProductImages[pageProductSlug].categoryImageData;
    }
  );

  return (
    <>
      <Banner bannerText={categoryName} />
      <main className="category-page">
        <section className="category-features col">
          {categoryPageProducts.map(
            (product: FeaturedProductObject, productIndex: number) => {
              return (
                <FeaturedProduct
                  key={productIndex}
                  //@ts-ignore
                  imageData={categoryPageImageData[productIndex]}
                  productSlug={product.slug}
                  buttonData={{
                    buttonColor: "dark-orange",
                    buttonDestination: `/product/${product.slug}`,
                  }}
                />
              );
            }
          )}
        </section>
      </main>
    </>
  );
};

export default CategoryPage;
