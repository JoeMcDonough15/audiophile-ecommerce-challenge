import React from "react";
import Header from "../../components/Header/Header";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import ProductCategoryMenu from "../../components/ProductCategoryMenu/ProductCategoryMenu";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
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
  features: string;
  includes: { quantity: number; item: string }[];
  gallery: {
    first: { mobile: string; tablet: string; desktop: string };
    second: { mobile: string; tablet: string; desktop: string };
    third: { mobile: string; tablet: string; desktop: string };
    others: {
      slug: string;
      name: string;
      image: { mobile: string; tablet: string; desktop: string };
    }[];
  };
}

interface ImageData {
  mobileImageSrc: string;
  tabletImageSrc: string;
  desktopImageSrc: string;
  imageAltText: string;
  customImageStyles: string;
}

interface Props {
  imageData: ImageData[];
  categoryName: string;
}

const CategoryPage = ({ imageData, categoryName }: Props) => {
  // const { imageData, categoryName } = props;
  const featuredProducts = data // const featuredProducts: FeaturedProductObject[] = data.filter is not working
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
      <Header withBanner bannerText={categoryName} />
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
      <AboutUs />
      <Footer />
    </main>
  );
};

export default CategoryPage;
