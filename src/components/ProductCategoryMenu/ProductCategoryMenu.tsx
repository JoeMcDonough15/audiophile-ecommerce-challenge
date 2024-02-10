import CategorySlab from "../CategorySlab/CategorySlab";
import "./product-category-menu.sass";

interface Props {
  handleMenuClick?: () => void;
}

const ProductCategoryMenu = ({ handleMenuClick }: Props): JSX.Element => {
  return (
    <nav className={"main-container product-category-menu col"}>
      <CategorySlab
        categoryName="headphones"
        imageSrc={
          require("./images/image-category-thumbnail-headphones.png").default
        }
        thumbnailName="headphones-thumbnail thumbnail-image"
        buttonDestination="/category/headphones"
        handleMenuClick={handleMenuClick}
      />
      <CategorySlab
        categoryName="speakers"
        imageSrc={
          require("./images/image-category-thumbnail-speakers.png").default
        }
        thumbnailName="speaker-thumbnail thumbnail-image"
        buttonDestination="/category/speakers"
        handleMenuClick={handleMenuClick}
      />
      <CategorySlab
        categoryName="earphones"
        imageSrc={
          require("./images/image-category-thumbnail-earphones.png").default
        }
        thumbnailName="earphones-thumbnail thumbnail-image"
        buttonDestination="/category/earphones"
        handleMenuClick={handleMenuClick}
      />
    </nav>
  );
};

export default ProductCategoryMenu;
