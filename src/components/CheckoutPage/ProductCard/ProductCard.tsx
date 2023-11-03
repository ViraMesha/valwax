import Image from 'next/image';
import Link from 'next/link';
import CandleQuantity from '@components/components/shared/CandleQuantity/CandleQuantity';
import Price from '@components/components/shared/Price/Price';
import Typography from '@components/components/Typography/Typography';
import type {
  CustomCandleDescription,
  ProductDescription,
} from '@components/types';

import { useStateActionsContext } from '../../../../context/StateContext';

import styles from './ProductCard.module.scss';

type TProperty = keyof CustomCandleDescription;
type TPropertyWithoutContainer = Exclude<TProperty, 'container'>;

interface ProductCardProps {
  deleteButtonText: string;
  id: string;
  img: string;
  title: string;
  description?: string | CustomCandleDescription;
  price: number;
  quantity: number;
  link: string;
  key: string;
  descriptionPropertyNames: ProductDescription;
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
  descriptionPropertyNames: propertyNames,
}) => {
  const { onRemove } = useStateActionsContext();
  const isCustomCandle = link.includes('create-your-own');

  // Extract the keys of the description object
  const descriptionKeys =
    description && typeof description === 'object' && Object.keys(description);

  return (
    <li className={styles.card}>
      <Link href={isCustomCandle ? `${link}` : `${link}/${id}`}>
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
            <Link href={isCustomCandle ? `${link}` : `${link}/${id}`}>
              <Typography variant="bodyRegular" className={styles.card__title}>
                {title}
              </Typography>
            </Link>
            {description && typeof description === 'string' && (
              <Typography
                variant="bodyS"
                color="var(--cl-gray-500)"
                className={styles.card__description}
              >
                {description}
              </Typography>
            )}
            {descriptionKeys && (
              <Typography
                variant="bodyS"
                color="var(--cl-gray-500)"
                className={styles.card__description}
              >
                {/*  Loop through the keys of the description object */}
                {descriptionKeys.map((property, i) => {
                  if (property !== 'container') {
                    return (
                      <span key={property}>
                        {/* Display the property name using propertyNames dictionary */}
                        {propertyNames[property as TPropertyWithoutContainer]} -{' '}
                        <span className={styles.pinkText}>
                          {/* Display the property value with pink text color */}
                          {description[property as TProperty]}
                        </span>
                        {/* Add a period if it's the last property, or a comma if not */}
                        {i === descriptionKeys.length - 1 ? (
                          <span>.</span>
                        ) : (
                          <span>, </span>
                        )}
                      </span>
                    );
                  }
                  return (
                    <span key={property} className={styles.pinkText}>
                      {/* Display the property value with pink text color */}
                      {description[property as TProperty]},{' '}
                    </span>
                  );
                })}
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
