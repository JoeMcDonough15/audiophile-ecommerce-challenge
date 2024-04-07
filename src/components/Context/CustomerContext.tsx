import { PropsWithChildren, createContext, useState } from "react";

export interface CustomerInformation {
  name: string;
  phone: string;
  email: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  paymentOption: string;
  emoneyNumber?: string | undefined;
  emoneyPin?: string | undefined;
}

interface CustomerContextType {
  customerInformation: CustomerInformation;
  formComplete: boolean;
  setFormComplete: (arg0: boolean) => void;
  setCustomerInformation: (arg0: CustomerInformation) => void;
}

export const CustomerContext = createContext<CustomerContextType>({
  customerInformation: {
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
  },
  formComplete: false,
  setFormComplete: () => {},
  setCustomerInformation: () => {},
});

export const CustomerProvider = ({ children }: PropsWithChildren) => {
  const [formComplete, setFormComplete] = useState(false);
  const [customerInformation, setCustomerInformation] = useState({
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

  return (
    <CustomerContext.Provider
      value={{
        formComplete,
        customerInformation,
        setFormComplete,
        //@ts-ignore
        setCustomerInformation,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};
