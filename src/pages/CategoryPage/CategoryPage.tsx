import { useParams } from "react-router";
import Banner from "../../components/Banner/Banner";
import "./category-page.sass";
import {
  FeaturedProductContext,
  FeaturedProductObject,
} from "../../components/App";
import { useContext } from "react";
import ImageSlab from "../../components/ImageSlab/ImageSlab";
import ProductInfo from "../../components/ProductInfoComponents/ProductInfo";
import NewProductIntro from "../../components/NewProductIntro/NewProductIntro";
import ButtonLink from "../../components/ButtonLink/ButtonLink";

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
          {categoryPageProducts.map((product: FeaturedProductObject) => {
            return (
              <section
                className="main-container featured-product-container col"
                key={product.id}
              >
                <div className="featured-product-image-container">
                  <ImageSlab
                    slabSize="mobile"
                    imageData={{
                      imageSrc: product.categoryImage.mobile,
                      imageAltText: product.categoryImage.imageAltText,
                    }}
                  />
                  <ImageSlab
                    slabSize="tablet"
                    imageData={{
                      imageSrc: product.categoryImage.tablet,
                      imageAltText: product.categoryImage.imageAltText,
                    }}
                  />
                  <ImageSlab
                    slabSize="desktop"
                    imageData={{
                      imageSrc: product.categoryImage.desktop,
                      imageAltText: product.categoryImage.imageAltText,
                    }}
                  />
                </div>
                <div className="featured-product-text-container col">
                  <div className="featured-product-info col">
                    {product.isNewProduct && (
                      <NewProductIntro className="dark-orange-text" />
                    )}
                    <ProductInfo
                      productName={product.name}
                      productDescription={product.description}
                      headerClass="category-page-featured-product-header"
                      descriptionClass="category-page-featured-product-description"
                    />
                    <ButtonLink
                      className="button-dark-orange"
                      buttonText="See Product"
                      buttonDestination={`/product/${product.slug}`}
                    />
                  </div>
                </div>
              </section>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default CategoryPage;
