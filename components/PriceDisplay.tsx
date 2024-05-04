import CurrencyDisplay from "./CurrencyDisplay";

export default function PriceDisplay({ price }: { price: number }) {
  const isDiscount = Math.random() < 0.02;

  return (
    <h3 className="text-lg font-semibold justify-end flex gap-2">
      {isDiscount && (
        <>
          <span className="text-gray-400 italic">2% off!</span>
          <span className="text-red-600 line-through">
            <CurrencyDisplay amount={price} />
          </span>
        </>
      )}
      <span className="text-green-600">
        <CurrencyDisplay amount={isDiscount ? price * 0.98 : price} />
      </span>
    </h3>
  );
}
