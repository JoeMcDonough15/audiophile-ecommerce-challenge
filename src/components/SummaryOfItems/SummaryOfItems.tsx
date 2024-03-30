import { useContext } from "react";
import { CartContext, ItemToPurchase } from "../Context/CartContext";
import ItemRow from "../ItemRow/ItemRow";

interface Props {
  displayOne?: boolean;
}

const SummaryOfItems = ({ displayOne = false }: Props): JSX.Element => {
  const { itemsInCart } = useContext(CartContext);
  return (
    <>
      {!displayOne ? (
        <div className="items-in-cart col">
          {itemsInCart.map((itemInCart: ItemToPurchase) => {
            return (
              <ItemRow key={itemInCart.product.id} itemData={itemInCart} />
            );
          })}
        </div>
      ) : (
        <>
          <ItemRow itemData={itemsInCart[0]} />
        </>
      )}
    </>
  );
};

export default SummaryOfItems;
