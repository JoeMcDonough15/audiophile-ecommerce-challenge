import "./category-slab.sass";
import svgDetails from "../svg-details.json";
import ButtonLink from "../ButtonLink/ButtonLink";
import { ImageDataAllSizes } from "../Context/ProductsContext";
import { useContext } from "react";
import { ModalVisibilityContext } from "../Context/ModalVisibilityContext";

const arrowIconDetails = svgDetails.arrowIcon;

interface Props {
  imageData: ImageDataAllSizes;
  categoryName: string;
  thumbnailName: string;
  buttonDestination: string;
}

const CategorySlab = ({
  imageData,
  categoryName,
  thumbnailName,
  buttonDestination,
}: Props): JSX.Element => {
  const { closeModal } = useContext(ModalVisibilityContext);
  return (
    <div className="category-slab content-slab col">
      <img
        src={imageData.thumbnail}
        alt={imageData.imageAltText}
        className={thumbnailName}
      />
      <p className="category-name">{categoryName}</p>
      <ButtonLink
        withArrowIcon
        arrowIconDetails={arrowIconDetails}
        buttonDestination={buttonDestination}
        buttonText="Shop"
        className="button-with-arrow-icon category-slab-button"
        onClick={closeModal}
      />
    </div>
  );
};

export default CategorySlab;
