import Link from 'next/link'
import Image from "next/image";
import Container from '../Container/Container'
import styles from './Compass.module.css'
import Typography from '../Typography/Typography'
import candleImg from '../../../public/images/Compass/candle-card.jpg'
import boxImg from '../../../public/images/Compass/box-card.png'
import createImg from '../../../public/images/Compass/create-card.png'

const Compass = () => {
  return (
    <Container>
      {/* <h2>Navigation section</h2> */}
      <div className={styles.wrapper}>
        <Link href="/candle" className={`${styles.candle} ${styles.card}`}>
          <Image
            src={candleImg}
            alt='candle'
            className={styles.image}
            width={588}
            height={798}
            priority
          />
          <Typography
            variant='bodyXLHeavy'
            className={styles.text}
          >
            Свічки
          </Typography>
        </Link>
        <Link href="/candle" className={`${styles.box} ${styles.card}`}>
          <Image
            src={boxImg}
            alt='box'
            className={styles.image}
            width={588}
            height={387}
            priority
          />
          <Typography
            variant='bodyXLHeavy'
            className={styles.text}
          >
            Бокси
          </Typography>
        </Link>
        <Link href="/candle" className={`${styles.create} ${styles.card}`}>
          <Image
            src={createImg}
            alt='create'
            className={styles.image}
            width={588}
            height={387}
            priority
          />
          <Typography
            variant='bodyXLHeavy'
            className={styles.text}
          >
            Створи свічку сам
          </Typography>
        </Link>
      </div>
    </Container>
  )
}

export default Compass
