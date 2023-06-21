'use client';

import Slider from 'react-slick';
import { useCart } from '@/context/CartContext';
import { Product } from '@/types/product';
import Image from 'next/image';
import Currency from '../Currency';

const settings = {
	className: 'slider variable-width',
	dots: true,
	centerMode: true,
	slidesToShow: 1,
	slidesToScroll: 1,
};

type Props = {
	product: Product;
};

const ProductCard = ({ product }: Props) => {
	const { addToCart, removeFromCart, isItemOnCart } = useCart();

	const handleAddToCart = () => {
		addToCart(product);
	};

	const handleRemoveFromCart = () => {
		removeFromCart(product.id);
	};

	return (
		<div className="bg-white rounded-md p-4 shadow-md flex flex-col">
			<div className="mb-6">
				<Slider {...settings}>
					{product.images.map((image) => (
						<Image
							key={image}
							src={image}
							alt={product.name}
							width={250}
							height={250}
						/>
					))}
				</Slider>
			</div>
			<div className="flex-grow">
				<h2 className="font-semibold mb-2">{product.name}</h2>
				<p className="text-gray-600 mb-2">{product.description}</p>
				<p className="text-gray-600 mb-2">{product.size}</p>
				<Currency price={product.price} />
			</div>
			{isItemOnCart(product.id) ? (
				<button
					className="bg-gray-500 transition-colors duration-200 hover:bg-gray-600 text-gray-200 font-semibold mt-5 py-2 px-4 rounded-md text-sm w-full"
					onClick={handleRemoveFromCart}
				>
					Remove from Cart
				</button>
			) : (
				<button
					className="bg-gray-300 transition-colors duration-200 hover:bg-gray-400 text-gray-700 font-semibold mt-5 py-2 px-4 rounded-md text-sm w-full"
					onClick={handleAddToCart}
				>
					Add to Cart
				</button>
			)}
		</div>
	);
};

export default ProductCard;
