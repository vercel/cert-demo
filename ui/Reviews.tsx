import { type IReview } from '#/lib/utils';
import { ProductReviewCard } from '#/ui/ProductReviewCard';

export function Reviews({ reviews }: { reviews: IReview[] }) {
  return (
    <div className="space-y-6">
      <div className="text-lg font-medium text-white">Customer Reviews</div>
      <div className="space-y-8">
        {reviews.map((review) => {
          return <ProductReviewCard key={review.id} review={review} />;
        })}
      </div>
    </div>
  );
}
