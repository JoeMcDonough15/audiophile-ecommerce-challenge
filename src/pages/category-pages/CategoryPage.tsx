import React from "react";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import ProductCategoryMenu from "../../components/ProductCategoryMenu/ProductCategoryMenu";
import data from "../../data.json";
import "./category-page.sass";

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
    .filter((product) => {
      return product.category === categoryName;
    })
    .sort((featuredProduct, nextFeaturedProduct) => {
      if (featuredProduct.id > nextFeaturedProduct.id) {
        return -1;
      } else if (featuredProduct.id < nextFeaturedProduct.id) {
        return 1;
      } else {
        return 0;
      }
    });
  return (
    <main className="category-page">
      <section className="category-features col">
        {featuredProducts.map((product, productIndex) => {
          return (
            <FeaturedProduct
              key={productIndex}
              imageData={imageData[productIndex]}
              featuredProduct={product}
              isCategoryPage
              includesProductDescription
              customClasses={{
                newProductIntroClasses: "dark-orange-text",
                headerClasses:
                  "small-featured-product-header black-text category-page-featured-product-header",
                productDescriptionClasses:
                  "category-page-featured-product-description",
                buttonData: {
                  buttonColor: "dark-orange",
                  buttonDestination: `product-${product.slug}`,
                },
              }}
            />
          );
        })}
      </section>
      <ProductCategoryMenu />
    </main>
  );
};

export default CategoryPage;
