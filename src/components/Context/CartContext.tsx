import { PropsWithChildren, createContext, useState } from "react";
import { Product } from "./ProductsContext";

const VAT = 0.2;
export const SHIPPING_AND_HANDLING = 50;

export interface ItemToPurchase {
  quantity: number;
  product: Product;
}

interface CartContextType {
  itemsInCart: ItemToPurchase[];
  numItemsInCart: () => number;
  addItemToCart: (arg0: ItemToPurchase) => void;
  removeItemFromCart: (arg0: ItemToPurchase) => void;
  removeAllItemsFromCart: () => void;
  calculateSubtotal: () => number;
  determineVat: () => number;
  includeVatInTotal: () => number;
  calculateGrandTotal: (arg0: number) => number;
}

export const CartContext = createContext<CartContextType>({
  itemsInCart: [],
  numItemsInCart: () => 0,
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  removeAllItemsFromCart: () => {},
  calculateSubtotal: () => 0,
  determineVat: () => 0,
  includeVatInTotal: () => 0,
  calculateGrandTotal: () => 0,
});

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [itemsInCart, setItemsInCart] = useState<ItemToPurchase[]>([]);

  const addItemToCart = (itemToPurchase: ItemToPurchase) => {
    const isItemInCart = itemsInCart.some((itemInCart) => {
      return itemToPurchase.product.id === itemInCart.product.id;
    });
    if (isItemInCart) {
      const updatedItems = itemsInCart.map((itemInCart) =>
        itemInCart.product.id === itemToPurchase.product.id
          ? {
              ...itemInCart,
              quantity: itemInCart.quantity + itemToPurchase.quantity,
            }
          : itemInCart
      );
      setItemsInCart(updatedItems);
    } else {
      setItemsInCart([...itemsInCart, itemToPurchase]);
    }
  };

  const removeItemFromCart = (itemToRemove: ItemToPurchase) => {
    const updatedItems = itemsInCart
      .map((itemInCart) => {
        return itemInCart.product.id === itemToRemove.product.id
          ? { ...itemInCart, quantity: itemInCart.quantity - 1 }
          : itemInCart;
      })
      .filter((itemInCart) => {
        return itemInCart.quantity > 0;
      });
    setItemsInCart(updatedItems);
  };

  const removeAllItemsFromCart = () => {
    setItemsInCart([]);
  };

  const numItemsInCart = () => {
    return itemsInCart.reduce((total, currentItem) => {
      return total + currentItem.quantity;
    }, 0);
  };

  const calculateSubtotal = () => {
    return itemsInCart.reduce((total, currentItem) => {
      return total + currentItem.product.price * currentItem.quantity;
    }, 0);
  };

  const determineVat = () => {
    return calculateSubtotal() * VAT;
  };

  const includeVatInTotal = () => {
    return calculateSubtotal() + determineVat();
  };

  const calculateGrandTotal = (subtotalPlusVat: number) => {
    if (subtotalPlusVat === 0) {
      return 0;
    }
    return subtotalPlusVat + SHIPPING_AND_HANDLING;
  };

  return (
    <CartContext.Provider
      value={{
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
