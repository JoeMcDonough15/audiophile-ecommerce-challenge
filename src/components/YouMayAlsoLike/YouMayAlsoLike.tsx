import ImageSlab from "../ImageSlab/ImageSlab";
import HeadingAndButton from "../HeadingAndButton/HeadingAndButton";
import "./you-may-also-like.sass";
import { ImageDataOneSize, RelatedProduct } from "../Context/ProductsContext";
import { ROUTE_PATHS } from "../constants";

interface Props {
  relatedProducts: RelatedProduct[];
  relatedProductImageData: ImageDataOneSize[][];
}

const YouMayAlsoLike = ({
  relatedProducts,
  relatedProductImageData,
}: Props): JSX.Element => {
  return (
    <section className="related-products-section main-container col">
      <h5 className="related-products-header black-text">You may also like</h5>
      <nav className="all-related-products-container">
        {relatedProducts.map((product, productIndex) => {
          return (
            <div className="related-product-container col" key={product.slug}>
              {relatedProductImageData[productIndex].map(
                (productImageObject) => {
                  return (
                    <ImageSlab
                      key={productImageObject.id}
                      containerClassName="related-product-image-container"
                      slabSize={productImageObject.imageSize}
                      imageData={{
                        imageSrc: productImageObject.imageSrc,
                        imageAltText: productImageObject.imageAltText,
                      }}
                    />
                  );
                }
              )}
              <HeadingAndButton
                productName={product.name}
                isRelatedProduct
                buttonData={{
                  buttonColor: "dark-orange",
                  buttonDestination: `/${ROUTE_PATHS.PRODUCT}/${product.slug}`,
                }}
              />
            </div>
          );
        })}
      </nav>
    </section>
  );
};

export default YouMayAlsoLike;
