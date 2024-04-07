import { PropsWithChildren, useContext, useEffect, useState } from "react";
import { ModalVisibilityContext } from "../Context/ModalVisibilityContext";
import "./overlay.sass";

const Overlay = ({ children }: PropsWithChildren) => {
  const { modalVisibilityIndicator } = useContext(ModalVisibilityContext);
  const [overlayIsDimmed, setOverlayIsDimmed] = useState(false);
  useEffect(() => {
    if (modalVisibilityIndicator > 0) {
      setOverlayIsDimmed(true);
    } else {
      setOverlayIsDimmed(false);
    }
  }, [modalVisibilityIndicator]);
  let overlayClass = "";
  if (overlayIsDimmed) {
    overlayClass += "dimmed";
  }
  return <div className={overlayClass}>{children}</div>;
};

export default Overlay;
