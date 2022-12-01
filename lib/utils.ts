// `fetch` on the the server requires absolute paths
function getBaseUrl() {
  // production: https://acme.vercel.app or https://acme.com
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // development: https://localhost:3000
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export const getProducts = async () => {
  const res = await fetch(`${getBaseUrl()}/api/products`);
  const products = res.json() as Promise<IProduct[]>;

  return products;
};

export const getProduct = async (id: string) => {
  const res = await fetch(`${getBaseUrl()}/api/products/${id}`);
  const product = res.json() as Promise<SingleProduct>;

  return product;
};

export type IProduct = {
  id: string;
  image?: string;
  imageBlur?: string;
  stock: number;
  rating: number;
  name: string;
  price: Price;
  isBestSeller: boolean;
  leadTime: number;
  discount?: Discount;
  usedPrice?: UsedPrice;
  description: string;
};

export type Price = {
  amount: number;
  currency: Currency;
  scale: number;
};

export type Currency = {
  code: string;
  base: number;
  exponent: number;
};

export type Discount = {
  percent: number;
  expires?: number;
};

export type UsedPrice = {
  amount: number;
  currency: Currency;
  scale: number;
};

export type IReview = {
  id: string;
  name: string;
  rating: number;
  text: string;
};

export type SingleProduct = IProduct & {
  reviews: IReview[];
  similarProducts: IProduct[];
};
