import React from "react";
import CustomImage from "../CustomImage/CustomImage";
import FeaturedProductInfo from "../FeaturedProductInfo/FeaturedProductInfo";
import "./you-may-also-like.sass";

const YouMayAlsoLike = (props) => {
  const { relatedProducts, relatedProductsImages } = props;
  let keyCount = 0;
  let index = -1;
  return (
    <section className="related-products-section main-container col">
      <h5 className="related-products-header black-text">You may also like</h5>
      <div className="all-related-products-container">
        {relatedProducts.map((relatedProductObject) => {
          keyCount++;
          index++;
          return (
            <div className="related-product-container col" key={keyCount}>
              <div className="content-slab ">
                {relatedProductsImages[index].map((imageObject) => {
                  return (
                    <div
                      key={imageObject.id}
                      className={`related-product-image-container image-${imageObject.imageSize}`}
                    >
                      <CustomImage
                        className={`related-product-image thumbnail-image`}
                        src={imageObject.imageSrc}
                        alt={imageObject.imageAltText}
                      />
                    </div>
                  );
                })}
              </div>
              <FeaturedProductInfo
                featuredProduct={relatedProductObject}
                customClasses={{
                  containerClasses: "related-product-info",
                  headerClasses: "related-product-info-header",
                  buttonData: {
                    buttonColor: "dark-orange",
                    buttonDestination: `product-${relatedProductObject.slug}`,
                  },
                }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default YouMayAlsoLike;
