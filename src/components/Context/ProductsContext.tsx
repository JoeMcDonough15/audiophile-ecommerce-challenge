import { PropsWithChildren, createContext } from "react";
import allProductsWithoutImages from "../../data.json";
import allProductImages from "../../imageData";

const assignImagesToProducts = (
  productList: ProductWithoutImageData[],
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

export interface ImageDataAllSizes {
  categoryThumbnail?: string;
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
  image: ImageDataAllSizes;
}

export interface ProductWithoutImageData {
  id: number;
  slug: string;
  name: string;
  abbreviatedName?: string;
  image: ImageDataAllSizes;
  headerImage?: ImageDataAllSizes;
  homePageImage?: ImageDataAllSizes;
  category: string;
  categoryImage: ImageDataAllSizes;
  isNewProduct: boolean;
  price: number;
  description: string;
  teaserDescription?: string;
  features: string;
  includes: { quantity: number; item: string }[];
  gallery: {
    first: ImageDataAllSizes;
    second: ImageDataAllSizes;
    third: ImageDataAllSizes;
  };
  others: RelatedProduct[];
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  abbreviatedName?: string;
  image: ImageDataAllSizes;
  headerImage?: ImageDataAllSizes;
  homePageImage?: ImageDataAllSizes;
  category: string;
  categoryImage: ImageDataAllSizes;
  isNewProduct: boolean;
  price: number;
  description: string;
  teaserDescription?: string;
  features: string;
  includes: { quantity: number; item: string }[];
  gallery: {
    first: ImageDataAllSizes;
    second: ImageDataAllSizes;
    third: ImageDataAllSizes;
  };
  others: RelatedProduct[];
  allImageData: ProductImageData;
}

interface ProductsContextType {
  allProducts: Product[];
  findProduct: (arg0: Product[], arg1: string) => Product | void;
}

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
