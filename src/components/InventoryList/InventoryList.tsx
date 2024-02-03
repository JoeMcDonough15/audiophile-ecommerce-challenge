import Quantity from "../Quantity/Quantity";
import "./inventory-list.sass";

interface Props {
  productIncludes: { quantity: number; item: string }[];
}

const InventoryList = ({ productIncludes }: Props): JSX.Element => {
  return (
    <ul className="product-includes-list">
      {productIncludes.map((listItem) => {
        return (
          <li key={listItem.item} className="row inventory-list-row">
            <Quantity
              quantity={listItem.quantity}
              customClass="dark-orange-text"
              withTimes
            />
            <p className="inventory-item-text">{listItem.item}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default InventoryList;
