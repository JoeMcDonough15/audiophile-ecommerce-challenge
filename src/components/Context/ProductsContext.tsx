import { PropsWithChildren, createContext } from "react";
import allProducts from "../../data.json";
import allProductImages from "../../imageData";

export interface ImageDataAllSizes {
  categoryThumbnail?: string;
  mobile: string;
  tablet: string;
  desktop: string;
  imageAltText: string;
}

export interface ImageDataOneSize {
  id: number;
  imageSrc: any;
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
}

interface ProductsContextType {
  allProducts: Product[];
  allProductImages: ProductImageData[];
  findProduct: (arg0: Product[], arg1: string) => Product | void;
  findProductImageData: (
    arg0: ProductImageData[],
    arg1: string
  ) => ProductImageData | void;
}

export const ProductsContext = createContext<ProductsContextType>({
  allProducts,
  allProductImages,
  findProduct: () => {},
  findProductImageData: () => {},
});

export const ProductsProvider = ({ children }: PropsWithChildren) => {
  const findProduct = (productList: Product[], productSlug: string) => {
    return productList.find((product) => {
      return product.slug === productSlug;
    });
  };
  const findProductImageData = (
    allProductImages: ProductImageData[],
    productSlug: string
  ) => {
    let productImageData;
    allProductImages.forEach((productImageObject) => {
      if (productImageObject.productName === productSlug) {
        productImageData = productImageObject;
      }
    });
    return productImageData;
  };
  return (
    <ProductsContext.Provider
      value={{
        allProducts,
        allProductImages,
        findProduct,
        findProductImageData,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
