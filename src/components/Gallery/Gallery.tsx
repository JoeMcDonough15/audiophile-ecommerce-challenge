import React from "react";
import CustomImage from "../CustomImage/CustomImage";
import "./gallery.sass";

interface GalleryImageData {
  galleryImageOneData: {
    id: number;
    imageSrc: string;
    imageAltText: string;
    imageSize: string;
  }[];
  galleryImageTwoData: {
    id: number;
    imageSrc: string;
    imageAltText: string;
    imageSize: string;
  }[];
  galleryImageThreeData: {
    id: number;
    imageSrc: string;
    imageAltText: string;
    imageSize: string;
  }[];
}

interface Props {
  imageData: GalleryImageData;
}

const Gallery = ({ imageData }: Props) => {
  const { galleryImageOneData, galleryImageTwoData, galleryImageThreeData } =
    imageData;
  return (
    <section className="gallery main-container">
      <div className="gallery-section-one col">
        <div className="gallery-image-one-container">
          {galleryImageOneData.map((imageObject) => {
            return (
              <CustomImage
                className={`gallery-image gallery-image-one image-${imageObject.imageSize}`}
                key={imageObject.id}
                src={imageObject.imageSrc}
                altText={imageObject.imageAltText}
              />
            );
          })}
        </div>
        <div className="gallery-image-two-container">
          {galleryImageTwoData.map((imageObject) => {
            return (
              <CustomImage
                className={`gallery-image gallery-image-two image-${imageObject.imageSize}`}
                key={imageObject.id}
                src={imageObject.imageSrc}
                altText={imageObject.imageAltText}
              />
            );
          })}
        </div>
      </div>
      <div className="gallery-section-two">
        <div className="gallery-image-three-container">
          {galleryImageThreeData.map((imageObject) => {
            return (
              <CustomImage
                className={`gallery-image gallery-image-three image-${imageObject.imageSize}`}
                key={imageObject.id}
                src={imageObject.imageSrc}
                altText={imageObject.imageAltText}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
