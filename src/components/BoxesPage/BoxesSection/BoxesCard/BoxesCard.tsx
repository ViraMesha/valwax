import Link from 'next/link';
import Price from '@components/components/shared/Price/Price';
import Typography from '@components/components/Typography/Typography';

import { BoxI } from '../boxesData';
import BoxImgSlider from '../BoxImgSlider/BoxImgSlider';
import BuyButton from '../BuyButton/BuyButton';

import styles from './BoxesCard.module.scss';

type BoxesCardProps = {
  box: BoxI;
  dict: {
    buyBtn: string;
    reviewBtn: string;
  };
};

const BoxesCard: React.FC<BoxesCardProps> = ({
  box: { id, img, title, price, link, text, description },
  dict: { buyBtn, reviewBtn },
}) => {
  return (
    <li className={styles.card}>
      <BoxImgSlider img={img} />
      <div>
        <div className={styles.content}>
          <Link href={`${link}/${id}`}>
            <Typography variant="subheadingBold" className={styles.title}>
              {title}
            </Typography>
          </Link>
          <Typography variant="bodyRegular" className={styles.text}>
            {text}
          </Typography>
        </div>
        <Price priceStyle={styles.price} price={price} />
        <div className={styles.button__container}>
          <BuyButton
            product={{
              id,
              img: img[0],
              title,
              price,
              link,
              description,
              quantity: 0,
            }}
            buyBtn={buyBtn}
          />
          <Link href={`${link}/${id}`}>{reviewBtn}</Link>
        </div>
      </div>
    </li>
  );
};

export default BoxesCard;
