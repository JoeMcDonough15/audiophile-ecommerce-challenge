import { PropsWithChildren, createContext } from "react";
import data from "../../data.json";

export interface ProductImage {
  categoryThumbnail?: string;
  mobile: string;
  tablet: string;
  desktop: string;
  imageAltText: string;
}

export interface RelatedProduct {
  slug: string;
  name: string;
  image: ProductImage;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  abbreviatedName?: string;
  image: ProductImage;
  headerImage?: ProductImage;
  homePageImage?: ProductImage;
  category: string;
  categoryImage: ProductImage;
  isNewProduct: boolean;
  price: number;
  description: string;
  teaserDescription?: string;
  features: string;
  includes: { quantity: number; item: string }[];
  gallery: {
    first: ProductImage;
    second: ProductImage;
    third: ProductImage;
  };
  others: RelatedProduct[];
}

export const ProductsContext = createContext<Product[]>(data);

export const ProductsProvider = ({ children }: PropsWithChildren) => {
  const findProduct = (productList: Product[], productSlug: string) => {
    return productList.find((product) => {
      return product.slug === productSlug;
    });
  };
  return (
    // @ts-ignore
    <ProductsContext.Provider value={{ data, findProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};
