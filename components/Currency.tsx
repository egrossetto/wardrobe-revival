type Props = {
  price: number;
};

const Currency = ({ price }: Props) => {
  return (
    <p className="text-lg text-gray-800 font-semibold">
      {price.toLocaleString("es-AR", { style: "currency", currency: "ARS" })}
    </p>
  );
};

export default Currency;
