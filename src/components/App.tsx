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
import { CustomerProvider } from "./Context/CustomerContext";
import { ModalVisibilityProvider } from "./Context/ModalVisibilityContext";
import MobileMenu from "./MobileMenu/MobileMenu";
import CartModal from "./CartModal/CartModal";
import ConfirmationModal from "./ConfirmationModal/ConfirmationModal";
import Overlay from "./Overlay/Overlay";
import ScrollToTop from "./ScrollToTop/ScrollToTop";

function App(): JSX.Element {
  return (
    <ProductsProvider>
      <CartProvider>
        <SvgDetailsProvider>
          <CustomerProvider>
            <ModalVisibilityProvider>
              <ScrollToTop />
              <Overlay>
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
                  <Route
                    path={`/${ROUTE_PATHS.CHECKOUT}`}
                    element={<Checkout />}
                  />
                  <Route element={<PageNotFound />} />
                </Routes>
                <Header />
                <ProductCategoryMenu />
                <AboutUs />
                <Footer />
              </Overlay>
              <MobileMenu />
              <CartModal />
              <ConfirmationModal />
            </ModalVisibilityProvider>
          </CustomerProvider>
        </SvgDetailsProvider>
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
