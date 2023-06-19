import CartList from "@/components/Cart/CartList";

export default function Home() {
  return (
    <main>
      <div className="flex align-center justify-center mt-2">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Your Wardrobe Revival cart.
        </h1>
      </div>
      <CartList />
    </main>
  );
}
