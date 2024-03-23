import CheckoutSectionHeader from "./CheckoutSectionHeader";
import SummaryDetails from "../SummaryDetails/SummaryDetails";
import "./checkout-form.sass";
import { FormEvent, useState } from "react";
import FormFieldRadioInput from "../FormField/FormFieldRadioInput";
import FormFieldTextInput from "../FormField/FormFieldTextInput";
import { customerSchema } from "../../Validations/CustomerValidation";

interface Props {
  setFormComplete: (arg0: boolean) => void;
}

const CheckoutForm = ({ setFormComplete }: Props): JSX.Element => {
  const [paymentInstructions, setPaymentInstructions] = useState("e-money");
  const [formData, setFormData] = useState({
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

  // use this for controlled input elements.  Update the state everytime an input element undergoes a change
  const handleChange = (event: any) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    // if input name is paymentOption: call the setPaymentInstructions with inputValue
    if (inputName === "paymentOption") {
      setPaymentInstructions(inputValue);
    }
    // setFormData() with name and value
    setFormData({ ...formData, [inputName]: inputValue });
  };

  // used for controlled input elements
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    customerSchema
      .validate(formData)
      .then((valid) => setFormComplete(true))
      .catch((error) => console.log(error));
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
                inputName: "name",
                inputType: "text",
                placeholderText: "Alexei Ward",
                inputOnChangeHandler: handleChange,
              }}
              labelText="Name"
              warningText="Wrong format"
            />
            <FormFieldTextInput
              inputData={{
                inputName: "email",
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
              inputName: "phone",
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
              inputName: "address",
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
                inputName: "zip",
                inputType: "number",
                placeholderText: "10001",
                inputOnChangeHandler: handleChange,
              }}
              labelText="Zip Code"
              warningText="Wrong format"
            />
            <FormFieldTextInput
              inputData={{
                inputName: "city",
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
              inputName: "country",
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
                  inputName: "emoneyNumber",
                  inputType: "number",
                  placeholderText: "238521993",
                  inputOnChangeHandler: handleChange,
                }}
                labelText="e-money Number"
                warningText="Wrong format"
              />
              <FormFieldTextInput
                inputData={{
                  inputName: "emoneyPin",
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
