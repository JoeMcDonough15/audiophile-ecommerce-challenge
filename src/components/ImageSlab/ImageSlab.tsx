import CustomImage from "../CustomImage/CustomImage";

interface ImageData {
  imageSrc: string;
  imageAltText: string;
  imageClassName?: string;
}

export enum SlabSize {
  MOBILE = "mobile",
  TABLET = "tablet",
  DESKTOP = "desktop",
  THUMBNAIL = "thumbnail",
}

interface Props {
  imageData: ImageData;
  slabSize: SlabSize;
  containerClassName?: string;
}

const ImageSlab = ({
  containerClassName = "",
  imageData,
  slabSize,
}: Props): JSX.Element => {
  const { imageClassName = "", imageSrc, imageAltText } = imageData;
  return (
    <div
      className={`${containerClassName || ""} content-slab image-${slabSize}`}
    >
      <CustomImage
        className={imageClassName && `${imageClassName}`}
        src={imageSrc}
        altText={imageAltText}
      />
    </div>
  );
};

export default ImageSlab;
