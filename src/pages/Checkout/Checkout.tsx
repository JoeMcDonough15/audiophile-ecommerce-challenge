import Banner from "../../components/Banner/Banner";
import Button from "../../components/Button/Button";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import "./checkout.sass";

const Checkout = () => {
  return (
    <>
      <Banner />
      <main className="checkout-page">
        <div className="main-container">
          <Button
            className={"button-text-only"}
            buttonText="go back"
            buttonDestination=""
          />
        </div>
        <CheckoutForm />
      </main>
    </>
  );
};

export default Checkout;
