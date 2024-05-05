import CartBadge from "./CartBadge";
import CurrencyDisplay from "./CurrencyDisplay";

export type CartData = {
  numberOfItems: number;
  sum: number;
};

export default function CartDisplay({ numberOfItems, sum }: CartData) {
  return (
    <p className="py-2">
      <span className="font-bold text-orange-500">{numberOfItems}</span>
      <CartBadge itemCount={numberOfItems} /> items in your cart (
      <CurrencyDisplay amount={sum} />)
    </p>
  );
}
