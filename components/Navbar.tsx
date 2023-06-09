"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { TiShoppingCart } from "react-icons/ti";

const Navbar = () => {
  const { quantity } = useCart();

  return (
    <nav className="bg-white py-4 px-6 flex justify-between border-b-2">
      <Link href="/" className="flex items-center">
        <h1 className="text-lg font-semibold">Wardrobe Revival</h1>
      </Link>
      <Link href="/cart" className="flex items-center">
        <div className="relative">
          <div className="bg-black rounded-full p-2 cursor-pointer transition-colors duration-300 hover:bg-gray-400">
            <TiShoppingCart className="h-6 w-6 text-white" />
          </div>
          {quantity > 0 && (
            <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
              {quantity}
            </div>
          )}
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
