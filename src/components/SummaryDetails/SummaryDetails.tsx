import ItemRow from "../ItemRow/ItemRow";
import FeeInformation from "../FeeInformation/FeeInformation";
import "./summary-details.sass";
import fixPrice from "../../fixPrice";
import { useContext } from "react";
import {
  CartContext,
  ItemToPurchase,
  SHIPPING_AND_HANDLING,
} from "../Context/CartContext";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";

const SummaryDetails = (): JSX.Element => {
  const {
    itemsInCart,
    numItemsInCart,
    determineVat,
    includeVatInTotal,
    calculateGrandTotal,
  } = useContext(CartContext);
  const subtotalWithVat = includeVatInTotal();
  const vatCharge = determineVat();
  const grandTotal = calculateGrandTotal(subtotalWithVat);
  return (
    <section className="form-section-two">
      <h6 className="summary-header">Summary</h6>
      <div className="items-in-cart col">
        {itemsInCart.map((itemInCart: ItemToPurchase) => {
          return <ItemRow key={itemInCart.product.id} itemData={itemInCart} />;
        })}
      </div>
      <div className="fees-container col">
        <FeeInformation
          feeName="Total"
          amountAsString={fixPrice(subtotalWithVat)}
        />
        <FeeInformation
          feeName="Shipping"
          amountAsString={fixPrice(SHIPPING_AND_HANDLING)}
        />
        <FeeInformation
          feeName="VAT (included)"
          amountAsString={fixPrice(vatCharge)}
        />
      </div>
      <FeeInformation
        feeName="grand total"
        amountAsString={fixPrice(grandTotal)}
        customPriceColor="dark-orange-text"
      />
      <ButtonSubmit />
    </section>
  );
};

export default SummaryDetails;
