import Link from 'next/link';
import Price from '@components/components/shared/Price/Price';
import Typography from '@components/components/Typography/Typography';
import type { BoxDetailsI, ButtonsTranslation } from '@components/types';

import BoxImgSlider from '../BoxImgSlider/BoxImgSlider';
import BuyButton from '../BuyButton/BuyButton';

import styles from './BoxesCard.module.scss';

type BoxesCardProps = {
  box: BoxDetailsI;
  dict: ButtonsTranslation;
  toastMessage: string;
};

const BoxesCard: React.FC<BoxesCardProps> = ({
  box,
  dict: { buyBtn, reviewBtn },
  toastMessage,
}) => {
  const { id, images, title, price, slug, text } = box;
  return (
    <li className={styles.card}>
      <BoxImgSlider img={images} />
      <div>
        <div className={styles.content}>
          <Link href={`${slug}/${id}`}>
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
            product={{ ...box, img: images[0], quantity: 0, link: slug }}
            buyBtn={buyBtn}
            toastMessage={toastMessage}
          />
          <Link href={`${slug}/${id}`}>{reviewBtn}</Link>
        </div>
      </div>
    </li>
  );
};

export default BoxesCard;
