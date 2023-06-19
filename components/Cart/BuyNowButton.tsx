import { Product } from "@/types/product";

type Props = {
  products: Product[];
};

const BuyNowButton = ({ products }: Props) => {
  const handleBuyNow = () => {
    let message = `I want to buy: \n`;

    message += products.map((product) => {
      return `${product.name} in size ${product.size} \n`;
    });

    const url = `https://wa.me/${
      process.env.NEXT_PUBLIC_PHONE_NUMBER
    }?text=${encodeURIComponent(message.replaceAll(",", ""))}`;

    window.open(url, "_blank");
  };

  return (
    <button
      className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded"
      onClick={handleBuyNow}
    >
      Buy now
    </button>
  );
};

export default BuyNowButton;
