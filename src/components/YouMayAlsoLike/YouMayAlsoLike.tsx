import ImageSlab, { SlabSize } from "../ImageSlab/ImageSlab";
import HeadingAndButton from "../HeadingAndButton/HeadingAndButton";
import "./you-may-also-like.sass";
import { RelatedProduct } from "../Context/ProductsContext";
import { ROUTE_PATHS } from "../constants";

interface Props {
  relatedProducts: RelatedProduct[];
}

const YouMayAlsoLike = ({ relatedProducts }: Props): JSX.Element => {
  return (
    <section className="related-products-section main-container col">
      <h5 className="related-products-header black-text">You may also like</h5>
      <nav className="all-related-products-container">
        {relatedProducts.map((product) => {
          return (
            <div className="related-product-container col" key={product.slug}>
              <ImageSlab
                containerClassName="related-product-image-container"
                slabSize={SlabSize.MOBILE}
                imageData={{
                  imageSrc: product.image.mobile,
                  imageAltText: product.image.imageAltText,
                }}
              />
              <ImageSlab
                containerClassName="related-product-image-container"
                slabSize={SlabSize.TABLET}
                imageData={{
                  imageSrc: product.image.tablet,
                  imageAltText: product.image.imageAltText,
                }}
              />
              <ImageSlab
                containerClassName="related-product-image-container"
                slabSize={SlabSize.DESKTOP}
                imageData={{
                  imageSrc: product.image.desktop,
                  imageAltText: product.image.imageAltText,
                }}
              />

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
