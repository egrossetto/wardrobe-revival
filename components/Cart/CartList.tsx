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
      <div className="flex align-center justify-center mt-2">
        <BuyNowButton products={cartItems} />
      </div>
    </div>
  );
};

export default CartList;
