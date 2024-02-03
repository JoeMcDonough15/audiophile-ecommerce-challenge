import Button from "../Button/Button";
import "./category-slab.sass";
import svgDetails from "../svg-details.json";

interface SvgIconDetails {
  stroke?: string;
  strokeWidth?: string;
  width: string;
  height: string;
  src: string;
  gElement: boolean;
  d: string;
}

const arrowIconDetails: SvgIconDetails = svgDetails.arrowIcon;

interface Props {
  key: number; // do we need to annotate this?
  imageSrc: string;
  categoryName: string;
  thumbnailName: string;
  buttonDestination: string;
}

const CategorySlab = (props: Props): JSX.Element => {
  const { imageSrc, categoryName, thumbnailName, buttonDestination } = props;
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
      />
    </div>
  );
};

export default CategorySlab;
