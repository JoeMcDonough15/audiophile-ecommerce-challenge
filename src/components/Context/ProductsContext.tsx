import { PropsWithChildren, createContext } from "react";
import allProductsWithoutImages from "../../data.json";
import allProductImages from "../../imageData";

export interface ImageDataAllSizes {
  thumbnail?: string;
  mobile: string;
  tablet: string;
  desktop: string;
  imageAltText: string;
}

export interface ImageDataOneSize {
  id: number;
  imageSrc: string;
  imageAltText: string;
  imageSize: string;
}

export interface GalleryImageData {
  galleryImageOneData: ImageDataOneSize[];
  galleryImageTwoData: ImageDataOneSize[];
  galleryImageThreeData: ImageDataOneSize[];
}

export interface ProductImageData {
  productName: string;
  categoryImageData: ImageDataAllSizes;
  productImageData: ImageDataAllSizes;
  homepageImageData?: ImageDataAllSizes;
  headerImageData?: ImageDataAllSizes;
  galleryImageData: GalleryImageData;
  relatedProductsImageData: ImageDataOneSize[][];
}

export interface RelatedProduct {
  slug: string;
  name: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  abbreviatedName?: string;
  category: string;
  isNewProduct: boolean;
  price: number;
  description: string;
  teaserDescription?: string;
  features: string;
  includes: { quantity: number; item: string }[];
  others: RelatedProduct[];
  allImageData?: ProductImageData;
}

interface ProductsContextType {
  allProducts: Product[];
  findProduct: (arg0: Product[], arg1: string) => Product | void;
}

const assignImagesToProducts = (
  productList: Product[],
  productImagesList: ProductImageData[]
) => {
  const newProductList: Product[] = [];
  productList.map((product, index) => {
    const currentProductImages = productImagesList[index];
    // @ts-ignore
    product["allImageData"] = currentProductImages;
    //@ts-ignore
    newProductList.push(product);
  });
  return newProductList;
};

const allProducts: Product[] = assignImagesToProducts(
  allProductsWithoutImages,
  allProductImages
);

export const ProductsContext = createContext<ProductsContextType>({
  allProducts,
  findProduct: () => {},
});

export const ProductsProvider = ({ children }: PropsWithChildren) => {
  const findProduct = (productList: Product[], productSlug: string) => {
    return productList.find((product) => {
      return product.slug === productSlug;
    });
  };

  return (
    <ProductsContext.Provider
      value={{
        allProducts,
        findProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
