import { useContext } from "react";
import CategorySlab from "../CategorySlab/CategorySlab";
import "./product-category-menu.sass";
import { Product, ProductsContext } from "../Context/ProductsContext";

interface Props {
  handleMenuClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const ProductCategoryMenu = ({
  handleMenuClick = () => {},
}: Props): JSX.Element => {
  const { allProducts } = useContext(ProductsContext);
  const productsWithCategoryThumbnails = allProducts
    .filter((product: Product) => {
      return product.categoryImage.categoryThumbnail;
    })
    .sort((currentProduct: Product, nextProduct: Product): number => {
      if (
        currentProduct.category === "headphones" ||
        (currentProduct.category === "speakers" &&
          nextProduct.category === "earphones")
      ) {
        return -1;
      } else {
        return 1;
      }
    });

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
