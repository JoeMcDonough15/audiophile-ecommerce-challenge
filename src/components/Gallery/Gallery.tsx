import { GalleryImageData } from "../Context/ProductsContext";
import CustomImage from "../CustomImage/CustomImage";
import "./gallery.sass";

interface Props {
  imageData: GalleryImageData;
}

const Gallery = ({ imageData }: Props): JSX.Element => {
  const { galleryImageOneData, galleryImageTwoData, galleryImageThreeData } =
    imageData;
  return (
    <section className="gallery main-container">
      <div className="gallery-section-one col">
        <div className="gallery-image-one-container">
          {galleryImageOneData.map((imageDataObject) => {
            return (
              <CustomImage
                key={imageDataObject.id}
                className={`gallery-image image-${imageDataObject.imageSize}`}
                src={imageDataObject.imageSrc}
                altText={imageDataObject.imageAltText}
              />
            );
          })}
        </div>
        <div className="gallery-image-two-container">
          {galleryImageTwoData.map((imageDataObject) => {
            return (
              <CustomImage
                key={imageDataObject.id}
                className={`gallery-image image-${imageDataObject.imageSize}`}
                src={imageDataObject.imageSrc}
                altText={imageDataObject.imageAltText}
              />
            );
          })}
        </div>
      </div>
      <div className="gallery-section-two">
        <div className="gallery-image-three-container">
          {galleryImageThreeData.map((imageDataObject) => {
            return (
              <CustomImage
                key={imageDataObject.id}
                className={`gallery-image image-${imageDataObject.imageSize}`}
                src={imageDataObject.imageSrc}
                altText={imageDataObject.imageAltText}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
