import { ProductInfo } from "@/pages/api/product";
import Image from "next/image";
import { Loader } from "./Loader";
import CurrencyDisplay from "./CurrencyDisplay";
import PriceDisplay from "./PriceDisplay";

type ProductDetailsProps = {
  product: ProductInfo | null;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  if (product === null) {
    return (
      <div className="w-full h-full flex justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <h2 className="text-lg font-semibold pt-4">{product.title}</h2>
      <PriceDisplay price={product.price} />
      <p className="image-container relative">
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          objectFit="contain"
          className="image"
        />
      </p>
    </>
  );
}
