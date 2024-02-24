import { useContext } from "react";
import CategorySlab from "../CategorySlab/CategorySlab";
import "./product-category-menu.sass";
import { Product, ProductsContext } from "../Context/ProductsContext";

interface Props {
  handleMenuClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const ProductCategoryMenu = ({ handleMenuClick }: Props): JSX.Element => {
  //@ts-ignore
  const { data: allProducts } = useContext(ProductsContext);
  const productsWithCategoryThumbnails = allProducts.filter(
    (product: Product) => {
      return product.categoryImage.categoryThumbnail;
    }
  );

  return (
    <nav className={"main-container product-category-menu col"}>
      {productsWithCategoryThumbnails.map((product: Product) => {
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
