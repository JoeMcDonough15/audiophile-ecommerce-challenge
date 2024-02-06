import { useParams } from "react-router";
import Banner from "../../components/Banner/Banner";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import "./category-page.sass";
import {
  FeaturedProductContext,
  FeaturedProductObject,
} from "../../components/App";
import { useContext } from "react";

// interface FeaturedProductImageData {
//   mobileImageSrc: string;
//   tabletImageSrc: string;
//   desktopImageSrc: string;
//   imageAltText: string;
//   customImageStyles: string;
// }

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
                  // @ts-ignore
                  imageData={product.categoryImage}
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
