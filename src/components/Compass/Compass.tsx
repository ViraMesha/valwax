import Image from 'next/image';
import Link from 'next/link';

import { Locale } from '../../../i18n-config';
import boxImg from '../../../public/images/Compass/box-card.jpg';
import candleImg from '../../../public/images/Compass/candle-card.jpg';
import createImg from '../../../public/images/Compass/create-card.jpg';
import Container from '../Container/Container';
import Section from '../Section/Section';
import Typography from '../Typography/Typography';

import styles from './Compass.module.scss';

interface CompassI {
  dict: {
    candles: string;
    boxes: string;
    createYouOwn: string;
  };
  lang: Locale;
}

const Compass: React.FC<CompassI> = ({ dict, lang }) => {
  return (
    <Section id="compass">
      <Container>
        {/* <h2>Navigation section</h2> */}
        <div className={styles.wrapper}>
          <Link
            href={`/${lang}/soy-candles`}
            className={`${styles.candle} ${styles.card}`}
          >
            <Image
              src={candleImg}
              alt="candle"
              className={styles.image}
              sizes="(min-width: 1230) 588px,
              (min-width: 1024) 480px,
              (min-width: 768px) 352px,
              (min-width: 667px) 619px,
              327px"
              // fill
              priority
            />
            <div className={styles.gradient}>
              <Typography
                variant="bodyXLHeavy"
                color="var(--cl-gray-50)"
                className={styles.text}
              >
                {dict.candles}
              </Typography>
            </div>
          </Link>
          <Link
            href={`/${lang}/boxes`}
            className={`${styles.box} ${styles.card}`}
          >
            <Image
              src={boxImg}
              alt="box"
              className={styles.image}
              sizes="(min-width: 1230) 588px,
                    (min-width: 1024) 480px,
                    (min-width: 768px) 352px,
                    (min-width: 667px) 619px,
                    327px"
              priority
            />
            <div className={styles.gradient}>
              <Typography
                variant="bodyXLHeavy"
                color="var(--cl-gray-50)"
                className={styles.text}
              >
                {dict.boxes}
              </Typography>
            </div>
          </Link>
          <Link
            href={`/${lang}/create-your-own`}
            className={`${styles.create} ${styles.card}`}
          >
            <Image
              src={createImg}
              alt="create"
              className={styles.image}
              sizes="(min-width: 1230) 588px,
              (min-width: 1024) 480px,
              (min-width: 768px) 352px,
              (min-width: 667px) 619px,
              327px"
              priority
            />
            <div className={styles.gradient}>
              <Typography
                variant="bodyXLHeavy"
                color="var(--cl-gray-50)"
                className={styles.text}
              >
                {dict.createYouOwn}
              </Typography>
            </div>
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default Compass;
