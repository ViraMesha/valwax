import Image from 'next/image';
import Link from 'next/link';
import Button from '@components/components/Button/Button';
import Typography from '@components/components/Typography/Typography';

import { BoxI } from '../boxesData';

import styles from './BoxesCard.module.scss';

const BoxesCard: React.FC<BoxI> = ({ img, title, price, link, text }) => {
  return (
    <li className={styles.card}>
      <Link href={link}>
        <div className={styles.img_container}>
          <Image
            className={styles.image}
            src={img[0]}
            priority
            fill
            quality={100}
            alt={title}
            sizes="(min-width: 1230) 515px,
                    (min-width: 1024) 480px,
                    100%"
          />
        </div>
      </Link>
      <div className={styles.card_body}>
        <div className={styles.content}>
          <Link href={link}>
            <Typography variant="subheadingBold" className={styles.title}>
              {title}
            </Typography>
          </Link>
          <Typography variant="bodyRegular" className={styles.text}>
            {text}
          </Typography>
        </div>
        <div className={styles.price_container}>
          <Typography variant="bodyRegular" className={styles.price}>
            {price}
          </Typography>
          <span>&#8372;</span>
        </div>
        <div className={styles.button_container}>
          <Button variant="primary">купити</Button>
          <Link href="/boxes">Переглянути</Link>
        </div>
      </div>
    </li>
  );
};

export default BoxesCard;
