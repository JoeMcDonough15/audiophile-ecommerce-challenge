import { useContext } from "react";
import { FeaturedProductContext } from "../App";
import CategorySlab from "../CategorySlab/CategorySlab";
import "./product-category-menu.sass";

interface Props {
  handleMenuClick?: () => void;
}

const ProductCategoryMenu = ({ handleMenuClick }: Props): JSX.Element => {
  const allProducts = useContext(FeaturedProductContext);
  const productsWithCategoryThumbnails = allProducts.filter((product) => {
    return product.categoryImage.categoryThumbnail;
  });

  return (
    <nav className={"main-container product-category-menu col"}>
      {productsWithCategoryThumbnails.map((product) => {
        return (
          <CategorySlab
            key={product.id}
            categoryName={product.category}
            // @ts-ignore
            imageSrc={product.categoryImage.categoryThumbnail}
            thumbnailName={`${product.category}-thumbnail thumbnail-image`}
            buttonDestination={`/category/${product.category}`}
            handleMenuClick={handleMenuClick}
          />
        );
      })}
    </nav>
  );
};

export default ProductCategoryMenu;
