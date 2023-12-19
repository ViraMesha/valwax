'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Price from '@components/components/shared/Price/Price';
import Typography from '@components/components/Typography/Typography';

import { CandleI } from '../../../types';

import styles from './CandleItemCard.module.scss';

const CandleItemCard: React.FC<CandleI> = ({ id, images, title, price }) => {
  const pathname = usePathname();
  const lang = pathname.split('/')[1];
  const isCurrent = pathname.split('/')[3];
  return (
    <li className={styles.card}>
      <Link href={`/${lang}/candles/${isCurrent}/${id}`}>
        <div className={styles.img_container}>
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
        </div>
        <Typography variant="bodyRegular" className={styles.title}>
          {title}
        </Typography>
      </Link>
      <Price price={price} />
    </li>
  );
};

export default CandleItemCard;
