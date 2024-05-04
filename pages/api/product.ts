// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type ProductInfo = {
  title: string;
  price: number;
  description: string;
  images: string[];
  error?: string;
};

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductInfo>
) {
  fetch(`https://api.escuelajs.co/api/v1/products/${getRandomNumber(1, 200)}`)
    .then((res) => res.json())
    .then((json) => res.status(200).json(json))
    .catch((err) =>
      res.status(500).json({
        title: "",
        price: 0,
        description: "",
        images: [],
        error: `Cannot get product info: ${err}`,
      })
    );
}
