import CheckoutSectionHeader from "./CheckoutSectionHeader";
import SummaryDetails from "../SummaryDetails/SummaryDetails";
import "./checkout-form.sass";
import { useState } from "react";
import FormFieldRadioInput from "../FormField/FormFieldRadioInput";
import FormFieldTextInput from "../FormField/FormFieldTextInput";

const handleChange = () => {
  return;
};

const CheckoutForm = (): JSX.Element => {
  const [paymentOption, setPaymentOption] = useState("e-money");

  return (
    <form action="" className="form-container main-container col">
      <section className="form-section-one col">
        <h4 className="form-section-one-header">Checkout</h4>
        <div className="billing-details-container form-sub-section-container">
          <CheckoutSectionHeader headerText="Billing Details" />
          <div className="name-and-email-container">
            <FormFieldTextInput
              inputData={{
                inputName: "name-input",
                inputType: "text",
                placeholderText: "Alexei Ward",
                inputOnChangeHandler: handleChange,
              }}
              labelText="Name"
              warningText="Wrong format"
            />
            <FormFieldTextInput
              inputData={{
                inputName: "email-input",
                inputType: "email",
                placeholderText: "alexeiward@mail.com",
                inputOnChangeHandler: handleChange,
              }}
              labelText="Email Address"
              warningText="Wrong format"
            />
          </div>
          <FormFieldTextInput
            isFormFieldShrink
            inputData={{
              inputName: "phone-input",
              inputType: "tel",
              placeholderText: "+1 202-555-0136",
              inputOnChangeHandler: handleChange,
            }}
            labelText="Phone Number"
            warningText="Wrong format"
          />
        </div>
        <div className="shipping-info-container form-sub-section-container">
          <CheckoutSectionHeader headerText="Shipping Info" />
          <FormFieldTextInput
            inputData={{
              inputName: "address-input",
              inputType: "text",
              placeholderText: "1137 Williams Avenue",
              inputOnChangeHandler: handleChange,
            }}
            labelText="Address"
            warningText="Wrong format"
          />
          <div className="zip-and-city-container">
            <FormFieldTextInput
              inputData={{
                inputName: "zip-input",
                inputType: "number",
                placeholderText: "10001",
                inputOnChangeHandler: handleChange,
              }}
              labelText="Zip Code"
              warningText="Wrong format"
            />
            <FormFieldTextInput
              inputData={{
                inputName: "city-input",
                inputType: "text",
                placeholderText: "New York",
                inputOnChangeHandler: handleChange,
              }}
              labelText="City"
              warningText="Can't be blank"
            />
          </div>
          <FormFieldTextInput
            isFormFieldShrink
            inputData={{
              inputName: "country-input",
              inputType: "text",
              placeholderText: "United States",
              inputOnChangeHandler: handleChange,
            }}
            labelText="Country"
            warningText="Wrong format"
          />
        </div>
        <div className="payment-details-container form-sub-section-container">
          <CheckoutSectionHeader headerText="Payment Details" />
          <div className="payment-method-container">
            <p className="payment-method-header">Payment Method</p>
            <div className="radio-inputs-container">
              <FormFieldRadioInput
                inputData={{
                  inputValue: "e-money",
                  setPaymentOption: setPaymentOption,
                }}
                labelText="e-Money"
                inputChecked={paymentOption === "e-money"}
              />
              <FormFieldRadioInput
                inputData={{
                  inputValue: "cash",
                  setPaymentOption: setPaymentOption,
                }}
                labelText="Cash on Delivery"
                inputChecked={paymentOption === "cash"}
              />
            </div>
          </div>
          {paymentOption === "e-money" && (
            <div className="optional-emoney-details">
              <FormFieldTextInput
                inputData={{
                  inputName: "e-money-number-input",
                  inputType: "number",
                  placeholderText: "238521993",
                  inputOnChangeHandler: handleChange,
                }}
                labelText="e-money Number"
                warningText="Wrong format"
              />
              <FormFieldTextInput
                inputData={{
                  inputName: "e-money-pin-input",
                  inputType: "number",
                  placeholderText: "6891",
                  inputOnChangeHandler: handleChange,
                }}
                labelText="e-money PIN"
                warningText="Wrong format"
              />
            </div>
          )}
        </div>
      </section>
      <SummaryDetails />
    </form>
  );
};

export default CheckoutForm;
