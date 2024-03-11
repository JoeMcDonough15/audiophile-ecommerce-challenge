import { useContext, useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import ButtonGoBack from "../../components/ButtonGoBack/ButtonGoBack";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import "./checkout.sass";
import { CartContext } from "../../components/Context/CartContext";

const Checkout = () => {
  const [cartEmpty, setCartEmpty] = useState(true);
  const [formComplete, setFormComplete] = useState(false);
  const { numItemsInCart } = useContext(CartContext);
  console.log("num items in cart: ", numItemsInCart);
  // we can track the value of numItemsInCart in this component in real time, even though nothing in this component
  // is setting numItemsInCart.  So we want to track the state of numItemsInCart
  // and only when it goes above 0, we want to set cartEmpty to false.  When it dips to 0, we want to
  // set cartEmpty to true.

  useEffect(() => {
    setCartEmpty(numItemsInCart === 0);
  }, [numItemsInCart]);

  let mainElementClasses = "checkout-page ";
  if (cartEmpty) {
    mainElementClasses += "empty-cart";
  }
  return (
    <>
      <Banner />
      <main className={mainElementClasses}>
        <div className="main-container">
          <ButtonGoBack />
        </div>{" "}
        {!cartEmpty && (
          <>{!formComplete ? <CheckoutForm /> : <h1>Form Complete!</h1>}</>
        )}
      </main>
    </>
  );
};

export default Checkout;
