import type { NextApiRequest, NextApiResponse } from 'next';
// We'd normally get data from an external data source
import { products, reviews } from '#/lib/data';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const id = req.query.id as string;

  const product = products.find((product) => product.id === id);

  res.json({
    ...product,
    reviews,
    similarProducts: products.filter((product) => product.id !== id),
  });
}
