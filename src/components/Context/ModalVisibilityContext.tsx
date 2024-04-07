import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { CustomerContext } from "./CustomerContext";

interface ModalVisibilityContextType {
  modalVisibilityIndicator: number;
  setModalVisibilityIndicator: (arg0: number) => void;
  handleCartClick: () => void;
  handleMenuClick: () => void;
}
export const ModalVisibilityContext = createContext<ModalVisibilityContextType>(
  {
    modalVisibilityIndicator: 0,
    setModalVisibilityIndicator: () => {},
    handleCartClick: () => {},
    handleMenuClick: () => {},
  }
);

export const ModalVisibilityProvider = ({ children }: PropsWithChildren) => {
  const [modalVisibilityIndicator, setModalVisibilityIndicator] = useState(0);
  const { formComplete } = useContext(CustomerContext);

  const handleCartClick = () => {
    if (modalVisibilityIndicator === 0 || modalVisibilityIndicator === 1) {
      setModalVisibilityIndicator(2);
    } else {
      setModalVisibilityIndicator(0);
    }
  };

  const handleMenuClick = () => {
    if (modalVisibilityIndicator === 0 || modalVisibilityIndicator === 2) {
      setModalVisibilityIndicator(1);
    } else {
      setModalVisibilityIndicator(0);
    }
  };

  useEffect(() => {
    if (formComplete) {
      setModalVisibilityIndicator(3);
    } else {
      setModalVisibilityIndicator(0);
    }
  }, [formComplete]);

  return (
    <ModalVisibilityContext.Provider
      value={{
        modalVisibilityIndicator,
        setModalVisibilityIndicator,
        handleCartClick,
        handleMenuClick,
      }}
    >
      {children}
    </ModalVisibilityContext.Provider>
  );
};
