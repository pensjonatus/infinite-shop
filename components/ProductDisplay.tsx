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
      <h1>Product Display</h1>
      <div className="flex justify-between gap-4">
        <Button onClick={handleBuy}>Buy</Button>
        <Button onClick={handleSkip}>Skip</Button>
      </div>
      <hr />
      <div className="flex flex-col items-center gap-4">
        <ProductDetails product={product} />
      </div>
    </div>
  );
}
