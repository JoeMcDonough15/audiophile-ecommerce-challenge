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
  closeAllModals: () => void;
}
export const ModalVisibilityContext = createContext<ModalVisibilityContextType>(
  {
    modalVisibilityIndicator: 0,
    setModalVisibilityIndicator: () => {},
    handleCartClick: () => {},
    handleMenuClick: () => {},
    closeAllModals: () => {},
  }
);

export const ModalVisibilityProvider = ({ children }: PropsWithChildren) => {
  const [modalVisibilityIndicator, setModalVisibilityIndicator] = useState(0);
  const { formComplete } = useContext(CustomerContext);

  const handleCartClick = () => {
    if (modalVisibilityIndicator === 3) {
      return;
    }
    if (modalVisibilityIndicator === 0 || modalVisibilityIndicator === 1) {
      setModalVisibilityIndicator(2);
    } else {
      setModalVisibilityIndicator(0);
    }
  };

  const handleMenuClick = () => {
    if (modalVisibilityIndicator === 3) {
      return;
    }
    if (modalVisibilityIndicator === 0 || modalVisibilityIndicator === 2) {
      setModalVisibilityIndicator(1);
    } else {
      setModalVisibilityIndicator(0);
    }
  };

  const closeAllModals = () => {
    setModalVisibilityIndicator(0);
  };

  useEffect(() => {
    if (formComplete) {
      setModalVisibilityIndicator(3); // so that other two modals cannot open if ConfirmationModal is visible
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
        closeAllModals,
      }}
    >
      {children}
    </ModalVisibilityContext.Provider>
  );
};
