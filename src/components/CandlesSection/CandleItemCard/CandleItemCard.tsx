'use client';
import Image from 'next/image';
import Link from 'next/link';
import Price from '@components/components/shared/Price/Price';
import Typography from '@components/components/Typography/Typography';
import { useLangFromPathname } from '@components/hooks';

import type { CandleDetailsI } from '../../../types';

import styles from './CandleItemCard.module.scss';

const CandleItemCard: React.FC<CandleDetailsI> = ({
  id,
  images,
  title,
  price,
  slug,
  name,
}) => {
  const lang = useLangFromPathname();

  return (
    <li className={styles.card}>
      <Link href={`/${lang}${slug}/${id}`}>
        <div className={styles.img_container}>
          {images && images.length > 0 && (
            <Image
              src={images[0]}
              fill
              priority
              alt={title}
              sizes="(min-width: 1230) 282px,
                    (min-width: 1024) 312px,
                    (min-width: 768px) 224px,
                    (min-width: 667px) 300px,
                    154px"
            />
          )}
        </div>
        <Typography
          variant="bodyRegular"
          className={styles.title}
          title={title}
        >
          {name}
        </Typography>
      </Link>
      <Price price={price} />
    </li>
  );
};

export default CandleItemCard;
