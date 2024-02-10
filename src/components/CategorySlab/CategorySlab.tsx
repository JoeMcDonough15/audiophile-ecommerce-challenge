import Button from "../Button/Button";
import "./category-slab.sass";
import svgDetails from "../svg-details.json";

const arrowIconDetails = svgDetails.arrowIcon;

interface Props {
  imageSrc: string;
  categoryName: string;
  thumbnailName: string;
  buttonDestination: string;
  handleMenuClick?: () => void;
}

const CategorySlab = (props: Props): JSX.Element => {
  const {
    imageSrc,
    categoryName,
    thumbnailName,
    buttonDestination,
    handleMenuClick,
  } = props;
  return (
    <div className="category-slab content-slab col">
      <img src={imageSrc} alt="category-image" className={thumbnailName} />
      <p className="category-name">{categoryName}</p>
      <Button
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
