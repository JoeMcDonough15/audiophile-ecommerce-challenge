import ImageSlab from "../ImageSlab/ImageSlab";
import FeaturedProductInfo from "../FeaturedProductInfo/FeaturedProductInfo";
import "./featured-product.sass";

export interface FeaturedProductImageData {
  mobile: string;
  tablet: string;
  desktop: string;
  imageAltText: string;
  customImageStyles?: string;
}

interface ButtonData {
  buttonColor: string;
  buttonDestination?: string;
}

interface Props {
  imageData: FeaturedProductImageData;
  isProductPage?: boolean;
  buttonData: ButtonData;
  productSlug: string;
}

const FeaturedProduct = ({
  productSlug,
  imageData,
  buttonData,
  isProductPage,
}: Props): JSX.Element => {
  const { mobile, tablet, desktop, imageAltText } = imageData; // imageAltText will be added to JSON data
  return (
    <section className="main-container featured-product-container col">
      <div className="featured-product-image-container">
        {" "}
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
        {isProductPage ? (
          <FeaturedProductInfo
            productSlug={productSlug}
            isProductPage
            buttonData={buttonData}
          />
        ) : (
          <FeaturedProductInfo
            productSlug={productSlug}
            isCategoryPage
            buttonData={buttonData}
          />
        )}
      </div>
    </section>
  );
};

export default FeaturedProduct;
