import './globals.css';
import { Nunito } from 'next/font/google';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
	title: 'Wardrobe Revival',
	description: 'You need new clothes? Check this out!',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={nunito.className}>
				<CartProvider>
					<Navbar />
					{children}
				</CartProvider>
			</body>
		</html>
	);
}
