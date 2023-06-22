'use client';

import { DbProduct, Product } from '@/types/product';
import ProductCard from './ProductCard';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

type Props = {
	serverProducts: DbProduct[];
};

const ProductList = ({ serverProducts }: Props) => {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		const getProductsData = async () => {
			const promises = serverProducts.map(async (product) => {
				const { data } = await supabase.storage
					.from('images-bucket')
					.list(product.folder_name, {
						limit: 10,
						offset: 0,
					});

				const imageURLs = data?.map((file) => {
					return `${process.env.NEXT_PUBLIC_SUPABASE_IMAGE_URL}${product.folder_name}/${file.name}`;
				});

				return {
					id: product.id,
					name: product.name,
					price: Number(product.price),
					description: product.description,
					size: product.size,
					images: imageURLs,
				} as Product;
			});

			const newProducts = await Promise.all(promises);
			setProducts(newProducts);
		};

		getProductsData();
	}, []);

	return (
		<div>
			<div className="container mx-auto my-4">
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
					{products.length > 0 &&
						products?.map((product: Product) => (
							<ProductCard key={product.id} product={product} />
						))}
				</div>
			</div>
		</div>
	);
};

export default ProductList;
