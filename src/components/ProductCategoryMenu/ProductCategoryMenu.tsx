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
      if (product.allImageData) {
        return product.allImageData.categoryImageData.thumbnail;
      }
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
          product.allImageData && (
            <CategorySlab
              key={product.id}
              categoryName={product.category}
              imageData={product.allImageData.categoryImageData}
              thumbnailName={`${product.category}-thumbnail thumbnail-image`}
              buttonDestination={`/category/${product.category}`}
              handleMenuClick={handleMenuClick}
            />
          )
        );
      })}
    </nav>
  );
};

export default ProductCategoryMenu;
