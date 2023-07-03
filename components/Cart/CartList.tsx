'use client';

import { useCart } from '@/context/CartContext';
import CartItem from './CartItem';
import BuyNowButton from './BuyNowButton';

const CartList = () => {
	const { cartItems, removeFromCart } = useCart();

	const isCartEmpty = cartItems.length < 1;

	return (
		<div>
			<div className="flex align-center justify-center mt-2">
				<h1 className="text-md font-bold text-gray-800 mb-4 md:text-3xl">
					Your Wardrobe Revival cart{isCartEmpty ? ' is empty.' : '.'}
				</h1>
			</div>
			{cartItems.map((product) => (
				<CartItem
					key={product.id}
					product={product}
					onRemove={removeFromCart}
				/>
			))}
			<div className="flex align-center justify-center mt-2">
				{!isCartEmpty && <BuyNowButton products={cartItems} />}
			</div>
		</div>
	);
};

export default CartList;
