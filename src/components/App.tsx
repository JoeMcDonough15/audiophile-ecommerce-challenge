import { Route, Switch } from "react-router-dom";
import Header from "../components/Header/Header";
import Homepage from "../pages/Homepage/Homepage";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import Checkout from "../pages/Checkout/Checkout";
import PageNotFound from "../pages/PageNotFound";
import ProductCategoryMenu from "./ProductCategoryMenu/ProductCategoryMenu";
import AboutUs from "../components/AboutUs/AboutUs";
import Footer from "../components/Footer/Footer";
import { CartProvider } from "../components/Context/CartContext";
import { ProductsProvider } from "./Context/ProductsContext";
import { SvgDetailsProvider } from "./Context/SvgDetailsContext";

function App(): JSX.Element {
  return (
    <ProductsProvider>
      <CartProvider>
        <SvgDetailsProvider>
          <Header />
        </SvgDetailsProvider>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/category/:categoryName" component={CategoryPage} />
          <Route path="/product/:productName" component={ProductPage} />
          <Route path="/checkout" component={Checkout} />
          <Route component={PageNotFound} />
        </Switch>
        <ProductCategoryMenu />
        <AboutUs />
        <SvgDetailsProvider>
          <Footer />
        </SvgDetailsProvider>
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
