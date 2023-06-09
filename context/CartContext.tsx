"use client";

import { createContext, useContext, useState } from "react";
import { Product } from "@/types/product";

interface CartContextValue {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  isItemOnCart: (productId: number) => boolean;
  cartTotal: number;
  quantity: number;
}

const CartContext = createContext<CartContextValue>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  isItemOnCart: () => {
    return false;
  },
  cartTotal: 0,
  quantity: 0,
});

export const useCart = () => {
  return useContext(CartContext);
};

interface Props {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId: number) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const isItemOnCart = (productId: number) => {
    return Boolean(cartItems.find((item) => item.id === productId));
  };

  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  const quantity = cartItems.length;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        isItemOnCart,
        cartTotal,
        quantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
