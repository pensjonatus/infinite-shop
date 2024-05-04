import { ProductInfo } from "@/pages/api/product";
import { useEffect, useState } from "react";
import Button from "./Button";
import ProductDetails from "./ProductDetails";
import CurrencyDisplay from "./CurrencyDisplay";

export function ProductDisplay() {
  const [product, setProduct] = useState<ProductInfo | null>(null);
  const [cart, setCart] = useState<ProductInfo[]>([]);

  async function fetchProduct() {
    if (product !== null) {
      setProduct(null);
    }

    const response = await fetch("/api/product");
    const data = await response.json();
    setProduct(data);
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  function handleBuy() {
    setCart([...cart, product!]);
    fetchProduct();
  }

  function handleSkip() {
    fetchProduct();
  }

  return (
    <div className="product-display-wrapper">
      <h1 className="text-3xl font-bold text-center pb-8">Infinite Shop</h1>
      <div className="flex justify-between gap-4">
        <Button onClick={handleBuy}>Buy</Button>
        <Button onClick={handleSkip}>Skip</Button>
      </div>
      <hr />
      <p className="py-2">
        <span className="font-bold text-orange-500">{cart.length}</span> items
        in your cart (
        <CurrencyDisplay
          amount={cart.reduce(
            (accumulator, item) => accumulator + item.price,
            0
          )}
        />
        )
      </p>
      <ProductDetails product={product} />
    </div>
  );
}
