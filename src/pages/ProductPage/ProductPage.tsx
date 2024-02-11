import { useContext, useState } from "react";
import { useParams } from "react-router";
import {
  FeaturedProductContext,
  findFeaturedProduct,
} from "../../components/App";
import Banner from "../../components/Banner/Banner";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import InTheBox from "../../components/InTheBox/InTheBox";
import Gallery from "../../components/Gallery/Gallery";
import YouMayAlsoLike from "../../components/YouMayAlsoLike/YouMayAlsoLike";
import PageNotFound from "../PageNotFound";
import "./product-page.sass";
import ImageSlab from "../../components/ImageSlab/ImageSlab";
import ProductInfo from "../../components/ProductInfoComponents/ProductInfo";
import SpecifyQuantity from "../../components/SpecifyQuantity/SpecifyQuantity";
import NewProductIntro from "../../components/NewProductIntro/NewProductIntro";
import ButtonGoBack from "../../components/ButtonGoBack/ButtonGoBack";
import ButtonAddToCart from "../../components/ButtonAddToCart/ButtonAddToCart";

const ProductPage = () => {
  const { productName: productSlug } = useParams<{
    productName: string;
  }>();
  const allProducts = useContext(FeaturedProductContext);

  const pageProduct = findFeaturedProduct(allProducts, productSlug);
  if (!pageProduct) {
    return <PageNotFound />;
  }

  const {
    image,
    isNewProduct,
    features,
    includes,
    gallery,
    others,
    name,
    price,
    description,
  } = pageProduct;

  const { mobile, tablet, desktop, imageAltText } = image;

  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity(quantity - 1);
  };

  return (
    <>
      <Banner />
      <main className="product-page">
        <div className="main-container">
          <ButtonGoBack />
        </div>
        <section className="main-container featured-product-container col">
          <div className="featured-product-image-container">
            <ImageSlab
              slabSize="mobile"
              imageData={{ imageSrc: mobile, imageAltText: imageAltText }}
            />
            <ImageSlab
              slabSize="tablet"
              imageData={{ imageSrc: tablet, imageAltText: imageAltText }}
            />
            <ImageSlab
              slabSize="desktop"
              imageData={{
                imageSrc: desktop,
                imageAltText: imageAltText,
              }}
            />
          </div>
          <div className="featured-product-text-container col">
            <div className={"featured-product-info col product-page-info"}>
              {isNewProduct && <NewProductIntro className="dark-orange-text" />}
              <ProductInfo
                productName={name}
                productDescription={description}
                headerClass="product-page-header"
                descriptionClass="product-page-description"
                price={price}
              />
              <div className="purchase-buttons row">
                <SpecifyQuantity
                  quantity={quantity}
                  incrementQuantity={incrementQuantity}
                  decrementQuantity={decrementQuantity}
                />
                <ButtonAddToCart />
              </div>
            </div>
          </div>
        </section>

        <section className="product-details-and-accessories main-container">
          <ProductDetails detailsText={features} />
          <InTheBox productIncludes={includes} />
        </section>
        <Gallery imageData={gallery} />
        <YouMayAlsoLike relatedProducts={others} />
      </main>
    </>
  );
};

export default ProductPage;
