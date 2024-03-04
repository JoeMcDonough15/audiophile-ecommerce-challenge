import { Route, Routes } from "react-router-dom";
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
import { ROUTE_PATHS } from "./constants";

function App(): JSX.Element {
  return (
    <ProductsProvider>
      <CartProvider>
        <SvgDetailsProvider>
          <Header />
        </SvgDetailsProvider>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path={`/${ROUTE_PATHS.CATEGORY}/:categoryName`}
            element={<CategoryPage />}
          />
          <Route
            path={`/${ROUTE_PATHS.PRODUCT}/:productName`}
            element={<ProductPage />}
          />
          <Route path={`/${ROUTE_PATHS.CHECKOUT}`} element={<Checkout />} />
          <Route element={<PageNotFound />} />
        </Routes>

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
