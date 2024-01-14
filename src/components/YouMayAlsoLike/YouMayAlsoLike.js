import React from "react";
import ImageSlab from "../ImageSlab/ImageSlab";
import FeaturedProductInfo from "../FeaturedProductInfo/FeaturedProductInfo";
import "./you-may-also-like.sass";

const YouMayAlsoLike = (props) => {
  const { relatedProducts, relatedProductsImages } = props;
  let keyCount = 0;
  let index = -1;
  return (
    <section className="related-products-section main-container col">
      <h5 className="related-products-header black-text">You may also like</h5>
      <nav className="all-related-products-container">
        {relatedProducts.map((relatedProductObject) => {
          keyCount++;
          index++;
          return (
            <div className="related-product-container col" key={keyCount}>
              {relatedProductsImages[index].map((imageObject) => {
                return (
                  <ImageSlab
                    key={imageObject.id}
                    deviceSize={imageObject.imageSize}
                    imageData={{
                      imageSrc: imageObject.imageSrc,
                      imageAltText: imageObject.imageAltText,
                    }}
                  />
                );
              })}

              <FeaturedProductInfo
                featuredProduct={relatedProductObject}
                customClasses={{
                  containerClass: "related-product-info",
                  headerClasses: "related-product-info-header black-text",
                  buttonData: {
                    buttonColor: "dark-orange",
                    buttonDestination: `product-${relatedProductObject.slug}`,
                  },
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
