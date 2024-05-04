// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import products from "./products.json";

export type ProductInfo = {
  title: string;
  price: number;
  images: string[];
};

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductInfo>
) {
  return res
    .status(200)
    .send(products[getRandomNumber(0, products.length - 1)]);
}
