import Link from 'next/link';
import Typography from '@components/components/Typography/Typography';

import AddButton from '../AddButton/AddButton';
import { BoxI } from '../boxesData';
import BoxImgSlider from '../BoxImgSlider/BoxImgSlider';

import styles from './BoxesCard.module.scss';

type BoxesCardProps = {
  box: BoxI;
  dict: {
    buyBtn: string;
    reviewBtn: string;
  };
};

const BoxesCard: React.FC<BoxesCardProps> = ({
  box: { id, img, title, price, link, text },
  dict: { buyBtn, reviewBtn },
}) => {
  return (
    <li className={styles.card}>
      <BoxImgSlider img={img} />
      <div className={styles.card_body}>
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
        <div className={styles.price_container}>
          <Typography
            variant="bodyRegular"
            className={styles.price}
            color="var(--cl-gray-500)"
          >
            {price}
          </Typography>
          <span>&#8372;</span>
        </div>
        <div className={styles.button_container}>
          <AddButton
            product={{ id, img: img[0], title, price, link, quantity: 0 }}
            buyBtn={buyBtn}
          />
          <Link href={`${link}/${id}`}>{reviewBtn}</Link>
        </div>
      </div>
    </li>
  );
};

export default BoxesCard;
