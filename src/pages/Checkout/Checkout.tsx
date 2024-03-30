import { useContext, useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import ButtonGoBack from "../../components/ButtonGoBack/ButtonGoBack";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import "./checkout.sass";
import { CartContext } from "../../components/Context/CartContext";
import ConfirmationModal from "../../components/ConfirmationModal/ConfirmationModal";

export interface OrderInformation {
  name: string;
  phone: string;
  email: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  paymentOption: string;
  emoneyNumber: string;
  emoneyPin: string;
}

const Checkout = (): JSX.Element => {
  const [cartEmpty, setCartEmpty] = useState(true);
  const [formComplete, setFormComplete] = useState(false);
  const [orderInformation, setOrderInformation] = useState<OrderInformation>({
    name: "",
    phone: "",
    email: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    paymentOption: "e-money",
    emoneyNumber: "",
    emoneyPin: "",
  });
  const { numItemsInCart } = useContext(CartContext);

  useEffect(() => {
    setCartEmpty(numItemsInCart === 0);
  }, [numItemsInCart]);

  let mainElementClasses = "checkout-page ";
  if (cartEmpty) {
    mainElementClasses += "empty-cart";
  } else if (formComplete) {
    mainElementClasses += "shadow-out-main";
  }
  return (
    <>
      <Banner />
      <main className={mainElementClasses}>
        <div className="main-container">
          <ButtonGoBack />
        </div>{" "}
        {/* {!cartEmpty && (
          <>
            {!formComplete ? (
              <CheckoutForm setFormComplete={setFormComplete} />
            ) : (
              <h1>Form Complete!</h1>
            )}
          </>
        )} */}
        <>
          <CheckoutForm
            setFormComplete={setFormComplete}
            orderInformation={orderInformation}
            setOrderInformation={setOrderInformation}
          />
        </>
      </main>
      {formComplete && (
        <ConfirmationModal
          setFormComplete={setFormComplete}
          orderInformation={orderInformation}
        />
      )}
    </>
  );
};

export default Checkout;
