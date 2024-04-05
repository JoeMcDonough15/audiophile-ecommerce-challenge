import { useParams } from "react-router";
import Banner from "../../components/Banner/Banner";
import "./category-page.sass";
import { useContext } from "react";
import ImageSlab from "../../components/ImageSlab/ImageSlab";
import ProductInfo from "../../components/ProductInfoComponents/ProductInfo";
import NewProductIntro from "../../components/NewProductIntro/NewProductIntro";
import ButtonLink from "../../components/ButtonLink/ButtonLink";
import {
  Product,
  ProductsContext,
} from "../../components/Context/ProductsContext";
import PageNotFound from "../PageNotFound";
import { ROUTE_PATHS } from "../../components/constants";

const CategoryPage = () => {
  const { categoryName } = useParams<{ categoryName: string }>();

  const { allProducts, allProductImages } = useContext(ProductsContext);
  const categoryPageProducts = allProducts
    .filter((product: Product) => {
      return product.category === categoryName;
    })
    .sort((featuredProduct: Product, nextFeaturedProduct: Product): number => {
      if (featuredProduct.id > nextFeaturedProduct.id) {
        return -1;
      } else if (featuredProduct.id < nextFeaturedProduct.id) {
        return 1;
      } else {
        return 0;
      }
    });

  const categoryImageData = categoryPageProducts
    .map((product) => {
      return allProductImages.find((productImageData) => {
        if (productImageData.productName === product.slug) {
          return productImageData;
        }
      });
    })
    .map((productImageDataObject) => {
      return productImageDataObject?.categoryImageData;
    });

  if (categoryPageProducts.length === 0 || categoryImageData.length === 0) {
    return (
      <>
        <PageNotFound />
      </>
    );
  }

  return (
    <>
      <Banner bannerText={categoryName} />
      <main className="category-page">
        <section className="category-features col">
          {categoryPageProducts.map((product: Product, productIndex) => {
            return (
              <section
                className="main-container featured-product-container col"
                key={product.id}
              >
                <div className="featured-product-image-container">
                  <ImageSlab
                    slabSize="mobile"
                    imageData={{
                      //@ts-ignore
                      imageSrc: categoryImageData[productIndex].mobile,
                      imageAltText:
                        //@ts-ignore
                        categoryImageData[productIndex].imageAltText,
                    }}
                  />
                  <ImageSlab
                    slabSize="tablet"
                    imageData={{
                      //@ts-ignore
                      imageSrc: categoryImageData[productIndex].tablet,
                      imageAltText:
                        //@ts-ignore
                        categoryImageData[productIndex].imageAltText,
                    }}
                  />
                  <ImageSlab
                    slabSize="desktop"
                    imageData={{
                      //@ts-ignore
                      imageSrc: categoryImageData[productIndex].desktop,
                      imageAltText:
                        //@ts-ignore
                        categoryImageData[productIndex].imageAltText,
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
                      buttonDestination={`/${ROUTE_PATHS.PRODUCT}/${product.slug}`}
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
