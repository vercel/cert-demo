import type { IProduct } from '#/lib/utils';
import { getProducts } from '#/lib/utils';
import { ProductCard } from '#/ui/ProductCard';
import Link from 'next/link';

export const getStaticProps = async () => {
  const products = await getProducts();

  return {
    props: {
      products,
    },
  };
};

type PageProps = {
  products: IProduct[];
};

export default function Page({ products }: PageProps) {
  return (
    <div className="space-y-7">
      <h1 className="text-3xl font-semibold text-white">My Camera Shop</h1>

      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="col-span-4 lg:col-span-1">
            <Link
              // vs `<a>`, we get:
              // - client-side navigation (no full page reload)
              // - prefetching (<Link>'s in viewport)
              // - ...
              href={`/product/${product.id}`}
              className="block rounded-xl ring-offset-8 ring-offset-black hover:ring hover:ring-vercel-pink"
            >
              <ProductCard product={product} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
