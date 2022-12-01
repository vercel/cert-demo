import { type IReview } from '#/lib/utils';
import { ProductReviewCard } from '#/ui/ProductReviewCard';
// import { ProductReviewCard as ProductReviewCardCss } from '#/ui/modules/ProductReviewCard';

export function Reviews({ reviews }: { reviews: IReview[] }) {
  return (
    <div className="space-y-7">
      <h3 className="text-2xl font-medium text-white">Customer Reviews</h3>
      <div className="space-y-8">
        {reviews.map((review) => {
          return (
            <div key={review.id}>
              <ProductReviewCard review={review} />
              {/* Styled using in-built CSS Modules */}
              {/* <ProductReviewCardCss review={review} /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
