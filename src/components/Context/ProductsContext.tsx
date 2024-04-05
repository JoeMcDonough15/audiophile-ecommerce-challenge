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

export interface ProductImageData {
  categoryImageData: ImageDataAllSizes;
  productImageData: ImageDataAllSizes;
  homepageImageData?: ImageDataAllSizes;
  headerImageData?: ImageDataAllSizes;
  galleryImageData: {
    galleryImageOneData: ImageDataOneSize[];
    galleryImageTwoData: ImageDataOneSize[];
    galleryImageThreeData: ImageDataOneSize[];
  };
  relatedProductsImageData: ImageDataOneSize[][];
}

export interface AllProductImages {
  yx1Earphones: ProductImageData;
  xx59Headphones: ProductImageData;
  xx99MarkOneHeadphones: ProductImageData;
  xx99MarkTwoHeadphones: ProductImageData;
  zx7Speaker: ProductImageData;
  zx9Speaker: ProductImageData;
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
  allProductImages: AllProductImages;
  findProduct: (arg0: Product[], arg1: string) => Product | void;
}

export const ProductsContext = createContext<ProductsContextType>({
  allProducts,
  allProductImages,
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
      value={{ allProducts, allProductImages, findProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
