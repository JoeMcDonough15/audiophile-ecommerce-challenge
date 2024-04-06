import { useContext, useState } from "react";
import { useParams } from "react-router";
import Banner from "../../components/Banner/Banner";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import InTheBox from "../../components/InTheBox/InTheBox";
import Gallery from "../../components/Gallery/Gallery";
import YouMayAlsoLike from "../../components/YouMayAlsoLike/YouMayAlsoLike";
import PageNotFound from "../PageNotFound";
import "./product-page.sass";
import ImageSlab from "../../components/ImageSlab/ImageSlab";
import ProductInfo from "../../components/ProductInfoComponents/ProductInfo";
import NewProductIntro from "../../components/NewProductIntro/NewProductIntro";
import ButtonGoBack from "../../components/ButtonGoBack/ButtonGoBack";
import ButtonAddToCart from "../../components/ButtonAddToCart/ButtonAddToCart";
import { CartContext } from "../../components/Context/CartContext";
import ButtonSpecifyQuantity from "../../components/ButtonSpecifyQuantity/ButtonSpecifyQuantity";
import Quantity from "../../components/Quantity/Quantity";
import { ProductsContext } from "../../components/Context/ProductsContext";

const ProductPage = () => {
  // find product
  const { productName: productSlug } = useParams<{
    productName: string;
  }>();

  const { allProducts, findProduct } = useContext(ProductsContext);

  // @ts-ignore
  const pageProduct = findProduct(allProducts, productSlug);
  if (!pageProduct) {
    return <PageNotFound />;
  }

  const {
    isNewProduct,
    features,
    includes,
    others,
    name,
    price,
    description,
    allImageData,
  } = pageProduct;

  const { productImageData, galleryImageData, relatedProductsImageData } =
    allImageData;

  const { mobile, tablet, desktop, imageAltText } = productImageData;

  // set local state for Quantity and ButtonSpecifyQuantity components

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

  // access CartContext

  const { addItemToCart } = useContext(CartContext);

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
                <div className="quantity-container">
                  <div className="quantity-buttons-container">
                    <ButtonSpecifyQuantity
                      buttonText="-"
                      onClick={decrementQuantity}
                    />
                    <Quantity quantity={quantity} />
                    <ButtonSpecifyQuantity
                      buttonText="+"
                      onClick={incrementQuantity}
                    />
                  </div>
                </div>
                <ButtonAddToCart
                  onClick={() => {
                    addItemToCart({ product: pageProduct, quantity: quantity });
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="product-details-and-accessories main-container">
          <ProductDetails detailsText={features} />
          <InTheBox productIncludes={includes} />
        </section>
        <Gallery imageData={galleryImageData} />
        <YouMayAlsoLike
          relatedProducts={others}
          relatedProductImageData={relatedProductsImageData}
        />
      </main>
    </>
  );
};

export default ProductPage;
