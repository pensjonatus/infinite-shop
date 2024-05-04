import { ProductInfo } from "@/pages/api/product";
import CurrencyDisplay from "./CurrencyDisplay";
import CartBadge from "./CartBadge";

export default function CartDisplay({ cart }: { cart: ProductInfo[] }) {
  return (
    <p className="py-2">
      <span className="font-bold text-orange-500">{cart.length}</span>
      <CartBadge itemCount={cart.length} /> items in your cart (
      <CurrencyDisplay
        amount={cart.reduce((accumulator, item) => accumulator + item.price, 0)}
      />
      )
    </p>
  );
}
