"use client";

import { useCart } from "@/context/CartContext";
import CartItem from "./CartItem";
import BuyNowButton from "./BuyNowButton";

const CartList = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div>
      {cartItems.map((product) => (
        <CartItem
          key={product.id}
          product={product}
          onRemove={removeFromCart}
        />
      ))}
      <BuyNowButton products={cartItems} />
    </div>
  );
};

export default CartList;
