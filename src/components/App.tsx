import { Route, Switch } from "react-router-dom";
import { PropsWithChildren, createContext } from "react";
import Header from "../components/Header/Header";
import Homepage from "../pages/Homepage/Homepage";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import Checkout from "../pages/Checkout/Checkout";
import PageNotFound from "../pages/PageNotFound";
import ProductCategoryMenu from "./ProductCategoryMenu/ProductCategoryMenu";
import AboutUs from "../components/AboutUs/AboutUs";
import Footer from "../components/Footer/Footer";
import svgDetails from "./svg-details.json";
import data from "../data.json";

export interface FeaturedProductObject {
  id: number;
  slug: string;
  name: string;
  abbreviatedName?: string;
  image: { mobile: string; tablet: string; desktop: string };
  category?: string;
  categoryImage?: { mobile: string; tablet: string; desktop: string };
  isNewProduct?: boolean;
  price: number;
  description?: string;
  teaserDescription?: string;
  features: string;
  includes: { quantity: number; item: string }[];
  gallery: {
    first: { mobile: string; tablet: string; desktop: string };
    second: { mobile: string; tablet: string; desktop: string };
    third: { mobile: string; tablet: string; desktop: string };
  };
  others: {
    slug: string;
    name: string;
    image: { mobile: string; tablet: string; desktop: string };
  }[];
}

const { logo, twitter, facebook, instagram, hamburgerMenu, shoppingCart } =
  svgDetails;

export const FeaturedProductContext =
  createContext<FeaturedProductObject[]>(data);

const ProductsProvider = ({ children }: PropsWithChildren) => {
  return (
    <FeaturedProductContext.Provider value={data}>
      {children}
    </FeaturedProductContext.Provider>
  );
};

function App(): JSX.Element {
  return (
    <ProductsProvider>
      <Header
        logo={logo}
        hamburgerMenu={hamburgerMenu}
        shoppingCart={shoppingCart}
      />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/category/:categoryName" component={CategoryPage} />
        <Route path="/product/:productName" component={ProductPage} />
        <Route path="/checkout" component={Checkout} />
        <Route component={PageNotFound} />
      </Switch>
      <ProductCategoryMenu />
      <AboutUs />
      <Footer
        logo={logo}
        twitter={twitter}
        facebook={facebook}
        instagram={instagram}
      />
    </ProductsProvider>
  );
}

export default App;
