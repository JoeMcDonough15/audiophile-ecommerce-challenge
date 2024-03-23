import CheckoutSectionHeader from "./CheckoutSectionHeader";
import SummaryDetails from "../SummaryDetails/SummaryDetails";
import "./checkout-form.sass";
import { FormEvent, useState } from "react";
import FormFieldRadioInput from "../FormField/FormFieldRadioInput";
import FormFieldTextInput from "../FormField/FormFieldTextInput";
import { customerSchema } from "../../Validations/CustomerValidation";
import * as yup from "yup";

const CheckoutForm = (): JSX.Element => {
  const [paymentInstructions, setPaymentInstructions] = useState("e-money");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    emailAddress: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    paymentOption: "",
    emoneyNumber: "",
    emoneyPin: "",
  });

  // use this for controlled input elements.  Update the state everytime an input element undergoes a change
  const handleChange = (event: any) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    console.log("name: ", inputName);
    console.log("value: ", inputValue);
    // if input name is paymentOption: call the setPaymentInstructions with inputValue
    if (inputName === "paymentOption") {
      setPaymentInstructions(inputValue);
    }
    // setFormData() with name and value
  };

  // used for uncontrolled input components
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const form = event.currentTarget; // use currentTarget because of bubbling; this line grabs the entire form element
  //   const myFormData = new FormData(form); // not from state, but from each individual input field's value that is within the form
  //   const formFields = Object.fromEntries(myFormData.entries()); // make an object from all myFormData input fields
  //   console.log("form data: ", formFields);
  // };

  // used for controlled input elements
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="form-container main-container col"
    >
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
            isFormFieldFullWidth
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
                  inputOnChangeHandler: handleChange,
                }}
                labelText="e-Money"
                inputChecked={paymentInstructions === "e-money"}
              />
              <FormFieldRadioInput
                inputData={{
                  inputValue: "cash",
                  inputOnChangeHandler: handleChange,
                }}
                labelText="Cash on Delivery"
                inputChecked={paymentInstructions === "cash"}
              />
            </div>
          </div>
          {paymentInstructions === "e-money" && (
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
