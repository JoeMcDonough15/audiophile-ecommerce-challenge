import Banner from "../../components/Banner/Banner";
import ButtonGoBack from "../../components/ButtonGoBack/ButtonGoBack";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import "./checkout.sass";

const Checkout = () => {
  return (
    <>
      <Banner />
      <main className="checkout-page">
        <div className="main-container">
          <ButtonGoBack />
        </div>
        <CheckoutForm />
      </main>
    </>
  );
};

export default Checkout;
