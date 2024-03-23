import * as yup from "yup";

export const customerSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  // phoneNumber: ,
  address: yup.string().required(),
  zip: yup
    .string()
    .length(5)
    .matches(/{\d}(5)/)
    .required(),
  city: yup.string().required(),
  country: yup.string().required(),
  emoneyNum: yup
    .string()
    .length(9)
    .matches(/{\d}(9)/),
  emoneyPin: yup
    .string()
    .length(4)
    .matches(/{\d}(4)/),
});
