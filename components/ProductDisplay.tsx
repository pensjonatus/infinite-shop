import { ProductInfo } from "@/pages/api/product";
import { useEffect, useState } from "react";
import Button from "./Button";
import ProductDetails from "./ProductDetails";

export function ProductDisplay() {
  const [product, setProduct] = useState<ProductInfo | null>(null);

  function fetchProduct() {
    if (product !== null) {
      setProduct(null);
    }
    fetch("/api/product")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  function handleBuy() {
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
      <ProductDetails product={product} />
    </div>
  );
}
