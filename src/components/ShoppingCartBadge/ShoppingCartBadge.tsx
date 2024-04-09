import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/CartContext";
import "./shopping-cart-badge.sass";

const ShoppingCartBadge = (): JSX.Element => {
  const { numItemsInCart } = useContext(CartContext);
  const [badgeVisible, setBadgeVisible] = useState(false);

  useEffect(() => {
    setBadgeVisible(numItemsInCart > 0);
  }, [numItemsInCart]);

  let shoppingCartBadgeClasses = "shopping-cart-badge ";
  if (!badgeVisible) {
    shoppingCartBadgeClasses += "hide";
  }

  return (
    <div className={shoppingCartBadgeClasses}>
      <span className="shopping-cart-badge-text">{numItemsInCart}</span>
    </div>
  );
};

export default ShoppingCartBadge;
