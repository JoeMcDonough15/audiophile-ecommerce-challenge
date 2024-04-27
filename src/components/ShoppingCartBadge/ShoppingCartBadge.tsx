import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/CartContext";
import "./shopping-cart-badge.sass";

const ShoppingCartBadge = (): JSX.Element => {
  const { itemsInCart, numItemsInCart } = useContext(CartContext);
  const [badgeVisible, setBadgeVisible] = useState(false);

  useEffect(() => {
    setBadgeVisible(numItemsInCart() > 0);
  }, [itemsInCart.length]);

  let shoppingCartBadgeClasses = "shopping-cart-badge ";
  if (!badgeVisible) {
    shoppingCartBadgeClasses += "hide";
  }

  return (
    <div className={shoppingCartBadgeClasses}>
      <span className="shopping-cart-badge-text">
        {numItemsInCart() < 10 ? numItemsInCart() : "9+"}
      </span>
    </div>
  );
};

export default ShoppingCartBadge;
