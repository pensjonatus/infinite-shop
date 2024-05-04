import { ProductInfo } from "@/pages/api/product";
import Image from "next/image";
import { Loader } from "./Loader";
import { ImageResponse } from "next/server";

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

  if (product.error) {
    return (
      <pre className="text-red-500">
        <code>{product.error}</code>
      </pre>
    );
  }
  return (
    <>
      <p className="image-container">
        {product.images?.map((image) => (
          <Image
            src={image}
            alt=""
            width={200}
            height={200}
            className="image"
          />
        ))}
      </p>
      <h2>{product.title}</h2>
      <h3>{product.price}</h3>
      <p>{product.description}</p>
    </>
  );
}
