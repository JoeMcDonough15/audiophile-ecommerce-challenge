import ImageSlab from "../ImageSlab/ImageSlab";
import HeadingAndButton from "../HeadingAndButton/HeadingAndButton";
import "./you-may-also-like.sass";
import { FeaturedProductImageData } from "../FeaturedProduct/FeaturedProduct";

interface RelatedProduct {
  slug: string;
  name: string;
  image: FeaturedProductImageData;
}

interface Props {
  relatedProducts: RelatedProduct[];
}

const YouMayAlsoLike = ({ relatedProducts }: Props): JSX.Element => {
  return (
    <section className="related-products-section main-container col">
      <h5 className="related-products-header black-text">You may also like</h5>
      <nav className="all-related-products-container">
        {relatedProducts.map((relatedProductObject) => {
          return (
            <div
              className="related-product-container col"
              key={relatedProductObject.slug}
            >
              <ImageSlab
                containerClassName="related-product-image-container"
                slabSize={"mobile"}
                imageData={{
                  imageSrc: relatedProductObject.image.mobile,
                  imageAltText: "",
                }}
              />
              <ImageSlab
                containerClassName="related-product-image-container"
                slabSize={"tablet"}
                imageData={{
                  imageSrc: relatedProductObject.image.tablet,
                  imageAltText: "",
                }}
              />
              <ImageSlab
                containerClassName="related-product-image-container"
                slabSize={"desktop"}
                imageData={{
                  imageSrc: relatedProductObject.image.desktop,
                  imageAltText: "",
                }}
              />

              <HeadingAndButton
                productName={relatedProductObject.name}
                isRelatedProduct
                buttonData={{
                  buttonColor: "dark-orange",
                  buttonDestination: `product-${relatedProductObject.slug}`,
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
