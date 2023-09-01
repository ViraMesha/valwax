import Image from 'next/image';
import Link from 'next/link';

import boxImg from '../../../public/images/Compass/box-card.jpg';
import candleImg from '../../../public/images/Compass/candle-card.jpg';
import createImg from '../../../public/images/Compass/create-card.jpg';
import Container from '../Container/Container';
import Section from '../Section/Section';
import Typography from '../Typography/Typography';

import styles from './Compass.module.scss';

const Compass = () => {
  return (
    <Section>
      <Container>
        {/* <h2>Navigation section</h2> */}
        <div className={styles.wrapper}>
          <Link href="/candles" className={`${styles.candle} ${styles.card}`}>
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
                Свічки
              </Typography>
            </div>
          </Link>
          <Link href="/boxes" className={`${styles.box} ${styles.card}`}>
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
                Бокси
              </Typography>
            </div>
          </Link>
          <Link href="/candle" className={`${styles.create} ${styles.card}`}>
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
                Створи свічку сам
              </Typography>
            </div>
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default Compass;
