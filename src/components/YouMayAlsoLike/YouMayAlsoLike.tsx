import React from "react";
import ImageSlab from "../ImageSlab/ImageSlab";
import FeaturedProductInfo from "../FeaturedProductInfo/FeaturedProductInfo";
import "./you-may-also-like.sass";

interface RelatedProduct {
  slug: string;
  name: string;
  image: { mobile: string; tablet: string; desktop: string };
}

interface RelatedProductsImageData {
  id: number;
  imageSrc: string;
  imageAltText: string;
  imageSize: string;
}

interface Props {
  relatedProducts: RelatedProduct[];
  relatedProductsImages: RelatedProductsImageData[][];
}

const YouMayAlsoLike = ({
  relatedProducts,
  relatedProductsImages,
}: Props): JSX.Element => {
  let index = -1;
  return (
    <section className="related-products-section main-container col">
      <h5 className="related-products-header black-text">You may also like</h5>
      <nav className="all-related-products-container">
        {relatedProducts.map((relatedProductObject) => {
          index++;
          return (
            <div
              className="related-product-container col"
              key={relatedProductObject.slug}
            >
              {relatedProductsImages[index].map((imageObject) => {
                return (
                  <ImageSlab
                    key={imageObject.id}
                    slabSize={imageObject.imageSize}
                    imageData={{
                      imageSrc: imageObject.imageSrc,
                      imageAltText: imageObject.imageAltText,
                    }}
                  />
                );
              })}

              <FeaturedProductInfo
                featuredProduct={relatedProductObject}
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
