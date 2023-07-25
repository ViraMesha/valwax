import Link from "next/link";
import Image from "next/image";
import Container from "../Container/Container";
import styles from "./Compass.module.css";
import Typography from "../Typography/Typography";

const Navigation = () => {
  return (
    <Container>
      {/* <h2>Navigation section</h2> */}
      <div className={styles.wrapper}>
        <Link href="/candle" className={`${styles.candle} ${styles.card}`}>
          <Image
            src="/navigation-card/candle-card.jpg"
            alt="candle"
            className={styles.image}
            width={588}
            height={798}
            priority
          />
          <Typography variant="bodyXLHeavy" className={styles.text}>
            Свічки
          </Typography>
        </Link>
        <Link href="/candle" className={`${styles.box} ${styles.card}`}>
          <Image
            src="/navigation-card/candle-card.jpg"
            alt="box"
            className={styles.image}
            width={588}
            height={387}
            priority
          />
          <Typography variant="bodyXLHeavy" className={styles.text}>
            Бокси
          </Typography>
        </Link>
        <Link href="/candle" className={`${styles.create} ${styles.card}`}>
          <Image
            src="/navigation-card/candle-card.jpg"
            alt="create"
            className={styles.image}
            width={588}
            height={387}
            priority
          />
          <Typography variant="bodyXLHeavy" className={styles.text}>
            Створи свічку сам
          </Typography>
        </Link>
      </div>
    </Container>
  );
};

export default Navigation;
