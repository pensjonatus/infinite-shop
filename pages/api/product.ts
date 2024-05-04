// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type ProductInfo = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  error?: string;
};

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductInfo>
) {
  fetch(`https://fakestoreapi.com/products/${getRandomNumber(1, 20)}`)
    .then((res) => res.json())
    .then((json) => res.status(200).json(json))
    .catch((err) =>
      res.status(500).json({
        id: 0,
        title: "",
        price: 0,
        category: "",
        description: "",
        image: "",
        error: `Cannot get product info: ${err}`,
      })
    );
}
