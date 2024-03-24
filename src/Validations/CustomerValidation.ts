import * as yup from "yup";

export const customerSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-Za-z\.-\s]+$/, "Invalid name")
    .required("Can't be blank"),
  email: yup.string().email("Invalid email").required("Can't be blank"),
  phone: yup
    .string()
    .matches(
      /(\+1)?[(]?\d{3}[)]?([-\.\s])?\d{3}([-\.\s])?\d{4}/,
      "Invalid number"
    )
    .required("Can't be blank"),
  address: yup.string().required("Can't be blank"),
  zip: yup
    .string()
    .length(5, "Must be 5 digits")
    .matches(/\d{5}/)
    .required("Can't be blank"),
  city: yup.string().required("Can't be blank"),
  country: yup.string().required("Can't be blank"),
  emoneyNumber: yup.string().length(9, "Must be 9 digits").matches(/\d{9}/),
  emoneyPin: yup.string().length(4, "Must be 4 digits").matches(/\d{4}/),
});
