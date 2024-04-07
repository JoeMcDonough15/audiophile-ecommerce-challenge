import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import "./confirmation-modal.sass";
import ConfirmationSvg from "./ConfirmationSvg";
import ConfirmationTable from "./ConfirmationTable";
import getFirstName from "../../getFirstName";
import ButtonLink from "../ButtonLink/ButtonLink";
import { ROUTE_PATHS } from "../constants";
import { CustomerContext } from "../Context/CustomerContext";

const ConfirmationModal = (): JSX.Element => {
  const { customerInformation, setFormComplete } = useContext(CustomerContext);
  const { removeAllItemsFromCart } = useContext(CartContext);
  return (
    <section className="confirmation-modal">
      <ConfirmationSvg />
      <div className="confirmation-text-container col">
        <h5 className="order-confirmation-header black-text">{`Thank you for your order, ${getFirstName(
          customerInformation.name
        )}`}</h5>
        <p>You will receive an email confirmation shortly.</p>
      </div>
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
