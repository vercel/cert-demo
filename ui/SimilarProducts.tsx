import { IProduct } from '#/lib/utils';
import { ProductCard } from '#/ui/ProductCard';
import Link from 'next/link';

export function SimilarProducts({ products }: { products: IProduct[] }) {
  return (
    <div className="space-y-7">
      <h3 className="text-2xl font-medium text-white">Similar Products</h3>

      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="col-span-4 lg:col-span-1">
            <Link
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
