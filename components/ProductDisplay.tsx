import { ProductInfo } from "@/pages/api/product";
import { useEffect, useState } from "react";
import Button from "./Button";
import ProductDetails from "./ProductDetails";
import CurrencyDisplay from "./CurrencyDisplay";
import CartDisplay from "./CartDisplay";
import Subliminal from "./Subliminal";

type ProductDisplayProps = {
  title: string;
};

export function ProductDisplay({ title }: ProductDisplayProps) {
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
    const cartInLocalStorage = localStorage.getItem("cart");
    if (cartInLocalStorage) {
      setCart(JSON.parse(cartInLocalStorage));
    }
    fetchProduct();
  }, []);

  useEffect(() => {
    const cartInLocalStorage = localStorage.getItem("cart");
    if (cart.length > 0 && cartInLocalStorage !== JSON.stringify(cart)) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  function handleBuy() {
    if (product) {
      setCart([...cart, product!]);
      fetchProduct();
    }
  }

  function handleSkip() {
    fetchProduct();
  }

  return (
    <div className="product-display-wrapper">
      <div>
        <h1 className="text-3xl font-bold text-center pb-6">♾️ {title}</h1>
        <hr />
        <CartDisplay cart={cart} />
        <ProductDetails product={product} />
      </div>
      <div className="flex justify-between gap-4 py-2">
        <Button onClick={handleBuy} size="large">
          Buy
        </Button>
        <Button onClick={handleSkip} size="large">
          Skip
        </Button>
      </div>
      <Subliminal />
    </div>
  );
}
