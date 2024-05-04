import { ProductInfo } from "@/pages/api/product";
import Image from "next/image";
import { Loader } from "./Loader";
import CurrencyDisplay from "./CurrencyDisplay";

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
      <h2 className="text-xl font-semibold pt-4">{product.title}</h2>
      <h3 className="text-lg font-semibold text-right text-green-600">
        <CurrencyDisplay amount={product.price} />
      </h3>
      <p className="image-container">
        <Image
          src={product.images[0]}
          alt={product.title}
          width={200}
          height={200}
          className="image"
        />
      </p>
    </>
  );
}
