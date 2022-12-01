import { IReview } from '#/lib/utils';
import { ProductRating } from '#/ui/ProductRating';
import styles from './ProductReviewCard.module.css';

export const ProductReviewCard = ({ review }: { review: IReview }) => {
  return (
    <div>
      <div>
        <div className={styles['card-heading']}>
          <div className={styles['card-image']} />
          <div className={styles['card-title']}>{review.name}</div>
        </div>

        {review.rating ? <ProductRating rating={review.rating} /> : null}
      </div>

      <div className={styles['card-text']}>{review.text}</div>
    </div>
  );
};
