import ImageSlab from "../ImageSlab/ImageSlab";
import FeaturedProductInfo from "../FeaturedProductInfo/FeaturedProductInfo";
import "./featured-product.sass";

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
  teaserDescription?: string;
  features: string;
  includes: { quantity: number; item: string }[];
  gallery: {
    first: { mobile: string; tablet: string; desktop: string };
    second: { mobile: string; tablet: string; desktop: string };
    third: { mobile: string; tablet: string; desktop: string };
  };
  others: {
    slug: string;
    name: string;
    image: { mobile: string; tablet: string; desktop: string };
  }[];
}

interface FeaturedProductImageData {
  mobileImageSrc: string;
  tabletImageSrc: string;
  desktopImageSrc: string;
  imageAltText: string;
  customImageStyles: string;
}

interface ButtonData {
  buttonColor: string;
  buttonDestination?: string;
}

interface Props {
  imageData: FeaturedProductImageData;
  featuredProduct: FeaturedProductObject;
  isProductPage?: boolean;
  buttonData: ButtonData;
}

const FeaturedProduct = ({
  imageData,
  buttonData,
  isProductPage,
  featuredProduct,
}: Props): JSX.Element => {
  const { mobileImageSrc, tabletImageSrc, desktopImageSrc, imageAltText } =
    imageData;
  return (
    <section className="main-container featured-product-container col">
      <div className="featured-product-image-container">
        {" "}
        <ImageSlab
          slabSize="mobile"
          imageData={{ imageSrc: mobileImageSrc, imageAltText: imageAltText }}
        />
        <ImageSlab
          slabSize="tablet"
          imageData={{ imageSrc: tabletImageSrc, imageAltText: imageAltText }}
        />
        <ImageSlab
          slabSize="desktop"
          imageData={{
            imageSrc: desktopImageSrc,
            imageAltText: imageAltText,
          }}
        />
      </div>
      <div className="featured-product-text-container col">
        {isProductPage ? (
          <FeaturedProductInfo
            featuredProduct={featuredProduct}
            isProductPage
            buttonData={buttonData}
          />
        ) : (
          <FeaturedProductInfo
            featuredProduct={featuredProduct}
            isCategoryPage
            buttonData={buttonData}
          />
        )}
      </div>
    </section>
  );
};

export default FeaturedProduct;
