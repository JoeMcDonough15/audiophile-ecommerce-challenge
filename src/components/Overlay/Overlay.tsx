import { PropsWithChildren, useContext } from "react";
import { ModalVisibilityContext } from "../Context/ModalVisibilityContext";
import "./overlay.sass";

const Overlay = ({ children }: PropsWithChildren) => {
  const { modalVisibilityIndicator, setModalVisibilityIndicator } = useContext(
    ModalVisibilityContext
  );
  return (
    <>
      <div
        className={
          modalVisibilityIndicator === 3
            ? "confirmation-modal-open"
            : modalVisibilityIndicator > 0
            ? "cart-or-menu-modal-open"
            : ""
        }
        onClickCapture={
          modalVisibilityIndicator < 3 && modalVisibilityIndicator > 0
            ? (event) => {
                event.stopPropagation();
                event.preventDefault();
                setModalVisibilityIndicator(0);
              }
            : undefined
        }
      >
        {children}
      </div>
    </>
  );
};

export default Overlay;
