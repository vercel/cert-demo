import type { NextApiRequest, NextApiResponse } from 'next';
// We'd normally get data from an external data source
import { products } from '#/lib/data';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.json(products);
}
