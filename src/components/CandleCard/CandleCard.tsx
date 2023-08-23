import Image from 'next/image';
import Link from 'next/link';

import { CandleI } from '../CandleList/candleData';

import styles from './CandleCard.module.css';
import Typography from '../Typography/Typography';

const CandleCard: React.FC<CandleI> = ({ img, title, price, link }) => {
  return (
    <li>
      <Link href={link}>
        <div className={styles.img_container}>
          <Image
            src={img}
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
      </Link>
      <div>
        <Link href={link}>
          <Typography variant="bodyRegular">{title}</Typography>
        </Link>
        <div className={styles.price_container}>
          <p className={styles.price}>{price}</p>
          <span>₴</span>
        </div>
      </div>
    </li>
  );
};

export default CandleCard;
