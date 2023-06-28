'use client';

import { Product } from '@/types/product';
import { BiTrash } from 'react-icons/bi';
import Image from 'next/image';
import { useState } from 'react';
import Currency from '../Currency';

type Props = {
	product: Product;
	onRemove: Function;
};

const CartItem = ({ product, onRemove }: Props) => {
	const { images, name, description, size, price } = product;

	const [isRemoving, setIsRemoving] = useState(false);

	const handleRemove = () => {
		setIsRemoving(true);
		// Add a delay before removing the item to allow the transition to take effect
		setTimeout(() => {
			onRemove(product.id);
		}, 500); // Adjust the delay duration as needed
	};

	return (
		<div className="flex items-center justify-center">
			<div
				className={`flex justify-between items-center w-1/2 border-b py-4 transition-opacity duration-500 ${
					isRemoving ? 'opacity-0' : 'opacity-100'
				}`}
			>
				<div className="mr-4">
					<Image
						src={images[0]}
						alt={name}
						width={120}
						height={500}
						className="h-auto w-auto rounded"
						priority={false}
					/>
				</div>
				<div className="flex flex-col flex-grow items-center justify-center">
					<h2 className="font-semibold mb-2">{name}</h2>
					<p className="text-gray-600 mb-2">{description}</p>
					<p className="text-gray-600 mb-2">{size}</p>
					<Currency price={price} />
				</div>
				<BiTrash
					className="m-4 h-7 w-7 cursor-pointer"
					onClick={handleRemove}
				>
					Remove
				</BiTrash>
			</div>
		</div>
	);
};

export default CartItem;
