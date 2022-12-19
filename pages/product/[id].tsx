import type { GetStaticProps } from 'next';

import type { SingleProduct } from '#/lib/utils';
import { getProduct, getProducts } from '#/lib/utils';
import { Product } from '#/ui/Product';
import { Reviews } from '#/ui/Reviews';
import { SimilarProducts } from '#/ui/SimilarProducts';

// ====================
// 1. Static Generation
// ====================

type PageProps = {
  product: SingleProduct;
};

// Provide a list of products to pre-render at build time
export const getStaticPaths = async () => {
  const products = await getProducts();

  const productIds = products
    .slice(0, 3) // Only pre-render our "most popular" products
    .map((product) => product.id); // ["1", "2", "3"]

  return {
    paths: productIds.map((id) => ({ params: { id } })), // [{ params: { id: "1" } }, ...]

    // Incremental Static Regeneration:
    // - Generate the rest of our product catalogue at runtime, when they are visited
    // - Balance between faster builds and caching more ahead of time
    // ["4", "5", "..."]
    fallback: 'blocking',
  };
};

// Fetch necessary data for each product when pre-rendered or revalidated
export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const product = await getProduct(id as string);

  return {
    props: {
      product,
    },

    // Revalidate pages in the background without having to rebuild the entire site

    // Time based revalidation:
    // Periodically revalidate products when a new request comes in
    revalidate: 60, // At most once every 60 seconds

    // On demand revalidation:
    // Triggered by event e.g. CMS update webhook
    // Use an API route e.g. `await res.revalidate('/product/1')`
  };
};

// ===============
// 2. Dynamic Data
// ===============

// Server Side Rendering at runtime
// export const getServerSideProps: GetServerSideProps<{
//   product: SingleProduct;
// }> = async (context) => {
//   const id = context.params?.id as string;
//   const product = await getProduct(id);

//   return {
//     props: {
//       product,
//     },
//   };
// };

// =======
// 3. Page
// =======

export default function Page({
  product, // passed from getStaticProps or getServerSideProps
}: PageProps) {
  return (
    <div className="space-y-8 lg:space-y-14">
      <Product product={product} />
      <SimilarProducts products={product.similarProducts} />
      <Reviews reviews={product.reviews} />
    </div>
  );
}
