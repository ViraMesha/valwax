import Image from 'next/image';
import Link from 'next/link';
import CandleQuantity from '@components/components/shared/CandleQuantity/CandleQuantity';
import Typography from '@components/components/Typography/Typography';

import styles from './ProductCard.module.scss';

interface ProductCardProps {
  deleteButtonText: string;
  id: string;
  img: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  link: string;
  key: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  img,
  title,
  price,
  description,
  quantity,
  link,
  deleteButtonText,
}) => {
  return (
    <li className={styles.card}>
      <Link href={`${link}/${id}`}>
        <div className={styles.card__img_container}>
          <Image
            src={img}
            fill
            priority
            alt={title}
            sizes="(min-width: 1230) 78px,
                    (min-width: 1024) 108px,
                    (min-width: 768px) 143px,
                    (min-width: 667px) 143px,
                    70px"
          />
        </div>
      </Link>
      <div className={styles.card__block}>
        <div className={styles.card__content}>
          <div className={styles.card__info}>
            <Link href={`${link}/${id}`}>
              <Typography variant="bodyRegular" className={styles.card__title}>
                {title}
              </Typography>
            </Link>
            <Typography
              variant="bodyS"
              color="var(--cl-gray-500)"
              className={styles.card__description}
            >
              {description}
            </Typography>
          </div>
          <div className={styles.price_container}>
            <Typography variant="button" className={styles.price}>
              {price}
            </Typography>
            <span>&#8372;</span>
          </div>
        </div>
        <div className={styles.card__actions}>
          <CandleQuantity className={styles.buttonGroup} />
          <button type="button">
            <Typography variant="bodyS" className={styles.delete}>
              {deleteButtonText}
            </Typography>
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
