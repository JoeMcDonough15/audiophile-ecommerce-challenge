import { useState } from "react";
import Banner from "../../components/Banner/Banner";
import ButtonGoBack from "../../components/ButtonGoBack/ButtonGoBack";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import "./checkout.sass";

const Checkout = () => {
  const [formComplete, setFormComplete] = useState(false);
  return (
    <>
      <Banner />
      <main className="checkout-page">
        <div className="main-container">
          <ButtonGoBack />
        </div>
        {!formComplete ? <CheckoutForm /> : <h1>Form Complete!</h1>}
      </main>
    </>
  );
};

export default Checkout;
