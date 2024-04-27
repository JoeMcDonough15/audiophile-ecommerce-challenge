import { useContext, useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import ButtonGoBack from "../../components/ButtonGoBack/ButtonGoBack";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import "./checkout.sass";
import { CartContext } from "../../components/Context/CartContext";
import EmptyCartText from "../../components/EmptyCartText/EmptyCartText";

const Checkout = (): JSX.Element => {
  const [cartEmpty, setCartEmpty] = useState(true);
  const { numItemsInCart } = useContext(CartContext);

  useEffect(() => {
    setCartEmpty(numItemsInCart() === 0);
  }, [numItemsInCart]);

  let mainElementClasses = "checkout-page ";
  if (cartEmpty) {
    mainElementClasses += "empty-cart";
  }

  return (
    <>
      <main className={mainElementClasses}>
        <div className="main-container">
          <ButtonGoBack />
        </div>{" "}
        {!cartEmpty ? <CheckoutForm /> : <EmptyCartText />}
      </main>
    </>
  );
};

export default Checkout;
