import "./category-slab.sass";
import svgDetails from "../svg-details.json";
import ButtonLink from "../ButtonLink/ButtonLink";
import { ImageDataAllSizes } from "../Context/ProductsContext";

const arrowIconDetails = svgDetails.arrowIcon;

interface Props {
  imageData: ImageDataAllSizes;
  categoryName: string;
  thumbnailName: string;
  buttonDestination: string;
  handleMenuClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const CategorySlab = (props: Props): JSX.Element => {
  const {
    imageData,
    categoryName,
    thumbnailName,
    buttonDestination,
    handleMenuClick = () => {},
  } = props;
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
        onClick={handleMenuClick}
      />
    </div>
  );
};

export default CategorySlab;
