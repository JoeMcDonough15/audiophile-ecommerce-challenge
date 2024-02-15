import { PropsWithChildren, createContext, useState } from "react";
import { FeaturedProductObject } from "../App";

export interface ItemToPurchase {
  quantity: number;
  product: FeaturedProductObject;
}

export const CartContext = createContext<ItemToPurchase[]>([]);

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [itemsInCart, setItemsInCart] = useState<ItemToPurchase[]>([]);

  const numItemsInCart = () => {
    return itemsInCart.length;
  };

  const addItemToCart = (itemToPurchase: ItemToPurchase) => {
    const isItemInCart = itemsInCart.find((itemInCart) => {
      return itemToPurchase.product.id === itemInCart.product.id; // will find item if it's already in the cart, or else will return undefined
    });
    if (isItemInCart) {
      setItemsInCart(
        itemsInCart.map((itemInCart) => {
          return itemInCart.product.id === itemToPurchase.product.id
            ? {
                ...itemInCart,
                quantity: itemInCart.quantity + itemToPurchase.quantity,
              }
            : itemInCart;
        })
      );
    } else {
      setItemsInCart([...itemsInCart, itemToPurchase]);
    }
  };

  const removeItemFromCart = (itemToRemove: ItemToPurchase) => {
    setItemsInCart(
      itemsInCart.map((itemInCart) => {
        return itemInCart.product.id === itemToRemove.product.id
          ? { ...itemInCart, quantity: (itemInCart.quantity -= 1) }
          : itemInCart;
      })
    );

    setItemsInCart(
      itemsInCart.filter((itemInCart) => {
        return itemInCart.quantity > 0;
      })
    );
  };

  const removeAllItemsFromCart = () => {
    setItemsInCart([]);
  };

  const calculateSubtotal = () => {
    if (numItemsInCart() === 0) {
      return 0;
    }
    return itemsInCart.reduce((total, currentItem) => {
      return (total += currentItem.product.price * currentItem.quantity);
    }, 0);
  };

  const determineVat = () => {
    return calculateSubtotal() * 0.2;
  };

  const includeVatInTotal = () => {
    return calculateSubtotal() * 1.2;
  };

  const calculateGrandTotal = () => {
    if (calculateSubtotal() === 0) {
      return 0;
    }
    return includeVatInTotal() + 50;
  };

  return (
    <CartContext.Provider
      value={{
        //@ts-ignore
        itemsInCart,
        numItemsInCart,
        addItemToCart,
        removeItemFromCart,
        removeAllItemsFromCart,
        calculateSubtotal,
        determineVat,
        includeVatInTotal,
        calculateGrandTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
