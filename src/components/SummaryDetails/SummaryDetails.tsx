import ItemRow from "../ItemRow/ItemRow";
import FeeInformation from "../FeeInformation/FeeInformation";
import "./summary-details.sass";
import fixPrice from "../../fixPrice";
import { useContext } from "react";
import { CartContext, ItemToPurchase } from "../Context/CartContext";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";

const SummaryDetails = (): JSX.Element => {
  //@ts-ignore
  const {
    //@ts-ignore
    itemsInCart,
    //@ts-ignore
    calculateSubtotal,
    //@ts-ignore
    determineVat,
    //@ts-ignore
    includeVatInTotal,
    //@ts-ignore
    calculateGrandTotal,
  } = useContext(CartContext);
  const subtotalWithVat = includeVatInTotal();
  const vatCharge = determineVat();
  const shipping = 50;
  const grandTotal = calculateGrandTotal();
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
          key={1}
          feeName="Total"
          amountAsString={fixPrice(subtotalWithVat)}
        />
        <FeeInformation
          key={2}
          feeName="Shipping"
          amountAsString={fixPrice(shipping)}
        />
        <FeeInformation
          key={3}
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
