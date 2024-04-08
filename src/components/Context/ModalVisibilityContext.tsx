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
  closeModal: () => void;
}
export const ModalVisibilityContext = createContext<ModalVisibilityContextType>(
  {
    modalVisibilityIndicator: 0,
    setModalVisibilityIndicator: () => {},
    handleCartClick: () => {},
    handleMenuClick: () => {},
    closeModal: () => {},
  }
);

export const ModalVisibilityProvider = ({ children }: PropsWithChildren) => {
  const [modalVisibilityIndicator, setModalVisibilityIndicator] = useState(0);
  const { formComplete } = useContext(CustomerContext);

  const handleCartClick = () => {
    setModalVisibilityIndicator(2);
  };

  const handleMenuClick = () => {
    setModalVisibilityIndicator(1);
  };

  const closeModal = () => {
    setModalVisibilityIndicator(0);
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
        closeModal,
      }}
    >
      {children}
    </ModalVisibilityContext.Provider>
  );
};
