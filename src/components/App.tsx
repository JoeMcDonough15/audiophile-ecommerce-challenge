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

/*  1. The Problem - When any of the modals are opened (MobileMenu, CartModal, and ConfirmationModal), I want for everything
underneath those modals to be grayed/darkened so the modals are more visible and so that it's more clear to the user that
the modal is opened.  I also don't want any click events to take place outside the modals.  So, for example, 
an add to cart button underneath the modal, in the greyed out section, should not work if the any of the modals 
are currently open.

  2. The Plan - Right now, the MobileMenu and CartModal components live inside the Header component.  
Their state (opened or closed) is controlled inside Header and the functions to set that state to open 
or closed are being sent down to the modals themselves and to sub components of the modals 
(like for instance, the ProductCategoryMenu -> CategorySlab components that close MobileMenu whenever a link is visited).  
The ConfirmationModal lives inside the CheckoutPage component.  The CheckoutPage renders the modal whenever the 
form state is marked as complete.  

Perhaps, I could have all of the components of the entire app (other than the modals) wrapped in one element
with a class of .overlay.  That overlay class would be what greys/darkens the content within it.


<ProductsProvider>
  <CartProvider>
    <SvgDetailsProvider>
      <CustomerProvider>
        <ModalVisibilityProvider>
          <OverlayComponent className="overlay" > <- would have access to ModalVisiibilityContext and would add .dimmed to classList when any modal is open
            <EntireAppExcludingModals>
          </OverlayComponent >
          <MobileMenu /> <--- All 3 would have access to ModalVisiibilityContext and would use useEffect hooks to determine their local state of open or closed based on modalVisibillityIndicator state in Context                |         |
          <CartModal /> <----|         | 
          <ConfirmationModal /> <----- |
        </ModalVisibilityProvider>     
      </CustomerProvider>
    </SvgDetailsProvider>
  </CartProvider>
</ProductsProvider>


ModalVisiibilityContext would contain: 

  All components that would need access to ModalVisiibilityContext: 
  OverlayComponent --> so that this component's classList can include .dimmed whenever modalVisibilityIndicator > 0
 
*/

function App(): JSX.Element {
  return (
    <ProductsProvider>
      <CartProvider>
        <SvgDetailsProvider>
          <CustomerProvider>
            <ModalVisibilityProvider>
              <Header />
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

              <ProductCategoryMenu />
              <AboutUs />
              <Footer />
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
