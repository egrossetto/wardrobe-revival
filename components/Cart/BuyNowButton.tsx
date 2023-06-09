import { Product } from "@/types/product";

type Props = {
  products: Product[];
};

const BuyNowButton = ({ products }: Props) => {
  const handleBuyNow = () => {
    const phoneNumber = "+5491168974853"; // Replace with your WhatsApp phone number

    let message = `I want to buy: \n`; // Customize the message as needed

    message += products.map((product) => {
      return `${product.name} in size ${product.size} \n`;
    });

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message.replaceAll(",", "")
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      onClick={handleBuyNow}
    >
      Buy now
    </button>
  );
};

export default BuyNowButton;
