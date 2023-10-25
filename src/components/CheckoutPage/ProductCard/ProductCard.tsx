import Image from 'next/image';
import Link from 'next/link';
import CandleQuantity from '@components/components/shared/CandleQuantity/CandleQuantity';
import Price from '@components/components/shared/Price/Price';
import Typography from '@components/components/Typography/Typography';

import { useStateActionsContext } from '../../../../context/StateContext';

import styles from './ProductCard.module.scss';

interface ProductCardProps {
  deleteButtonText: string;
  id: string;
  img: string;
  title: string;
  description?: string;
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
  const { onRemove } = useStateActionsContext();
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
            {description && (
              <Typography
                variant="bodyS"
                color="var(--cl-gray-500)"
                className={styles.card__description}
              >
                {description}
              </Typography>
            )}
          </div>
          <Price price={price} />
        </div>
        <div className={styles.card__actions}>
          <CandleQuantity
            className={styles.buttonGroup}
            id={id}
            qty={quantity}
            isCartQuantity
          />
          <button type="button" onClick={() => onRemove(id)}>
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