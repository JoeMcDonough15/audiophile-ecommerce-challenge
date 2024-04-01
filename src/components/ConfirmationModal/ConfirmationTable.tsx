import { useContext, useEffect, useState } from "react";
import SummaryOfItems from "../SummaryOfItems/SummaryOfItems";
import ThinRule from "../ThinRule/ThinRule";
import { CartContext } from "../Context/CartContext";
import ButtonExpandOrderSummary from "../ButtonExpandOrderSummary/ButtonExpandOrderSummary";
import FeeInformation from "../FeeInformation/FeeInformation";
import fixPrice from "../../fixPrice";
import "./confirmation-table.sass";

const ConfirmationTable = () => {
  const [viewExpanded, setViewExpanded] = useState(false);
  const [buttonExpandText, setButtonExpandText] = useState("");
  const { numItemsInCart, calculateGrandTotal, includeVatInTotal } =
    useContext(CartContext);

  useEffect(() => {
    let buttonText;
    if (viewExpanded) {
      buttonText = "View less";
    } else {
      buttonText = `and ${numItemsInCart - 1} other item(s)`;
    }
    setButtonExpandText(buttonText);
  }, [viewExpanded]);

  return (
    <div className="order-confirmation">
      <div className="order-confirmation-top">
        {<SummaryOfItems displayOne={!viewExpanded} />}
        <ThinRule customStyle="confirmation-thin-rule" />
        {numItemsInCart > 1 && (
          <ButtonExpandOrderSummary
            buttonExpandText={buttonExpandText}
            setViewExpanded={setViewExpanded}
            viewExpanded={viewExpanded}
          />
        )}
      </div>
      <div
        className={`order-confirmation-bottom col ${
          viewExpanded ? " push-to-flex-end" : ""
        }`}
      >
        <FeeInformation
          feeAsColumn
          feeName="grand total"
          amountAsString={fixPrice(calculateGrandTotal(includeVatInTotal()))}
          customPriceColor="white-text"
        />
      </div>
    </div>
  );
};

export default ConfirmationTable;
