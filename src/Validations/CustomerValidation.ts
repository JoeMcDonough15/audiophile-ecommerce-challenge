import * as yup from "yup";

export const customerSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-Za-z\.-\s]+$/, () => {
      const warningText = document.getElementById("name-warning-text");
      if (warningText) {
        warningText.classList.remove("hide");
        warningText.innerText = "Invalid name character";
      }
    })
    .required(() => {
      const warningText = document.getElementById("name-warning-text");
      if (warningText) {
        warningText.classList.remove("hide");
        warningText.innerText = "Can't be blank";
      }
    }),
  email: yup
    .string()
    .email(() => {
      const warningText = document.getElementById("email-warning-text");
      if (warningText) {
        warningText.classList.remove("hide");
        warningText.innerText = "Must be a valid email address";
      }
    })
    .required(() => {
      const warningText = document.getElementById("email-warning-text");
      if (warningText) {
        warningText.classList.remove("hide");
        warningText.innerText = "Can't be blank";
      }
    }),
  phone: yup
    .string()
    .matches(/\d{3}[-\.]\d{3}[-\.]\d{4}/, () => {
      const warningText = document.getElementById("phone-warning-text");
      if (warningText) {
        warningText.classList.remove("hide");
        warningText.innerText = "Invalid phone number";
      }
    })
    .required(),
  address: yup.string().required(),
  zip: yup.string().length(5).matches(/\d{5}/).required(),
  city: yup.string().required(),
  country: yup.string().required(),
  emoneyNum: yup.string().length(9).matches(/\d{9}/),
  emoneyPin: yup.string().length(4).matches(/\d{4}/),
});
