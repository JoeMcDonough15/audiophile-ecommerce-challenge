import { useContext } from "react";
import { OrderInformation } from "../../pages/Checkout/Checkout";
import { CartContext } from "../Context/CartContext";
import "./confirmation-modal.sass";
import ConfirmationSvg from "./ConfirmationSvg";
import ConfirmationTable from "./ConfirmationTable";
import getFirstName from "../../getFirstName";
import ButtonLink from "../ButtonLink/ButtonLink";
import { ROUTE_PATHS } from "../constants";

interface Props {
  orderInformation: OrderInformation;
  setFormComplete: (arg0: boolean) => void;
}
const ConfirmationModal = ({
  orderInformation,
  setFormComplete,
}: Props): JSX.Element => {
  const { removeAllItemsFromCart } = useContext(CartContext);
  return (
    <section className="confirmation-modal">
      <ConfirmationSvg />
      <h5 className="order-confirmation-header black-text">{`Thank you for your order, ${getFirstName(
        orderInformation.name
      )}`}</h5>
      <p className="order-confirmation-instructions">{`You will receive an email confirmation shortly at ${orderInformation.email}`}</p>
      <ConfirmationTable />
      <ButtonLink
        buttonDestination={ROUTE_PATHS.HOME}
        buttonText="go back home"
        className="button-dark-orange button-confirmation-modal"
        onClick={() => {
          removeAllItemsFromCart();
          setFormComplete(false);
        }}
      />
    </section>
  );
};

export default ConfirmationModal;
