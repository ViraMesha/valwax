import Image from 'next/image';
import { avenir } from '@components/app/fonts';

import heroBg from '../../../public/images/hero/hero.jpg';
import Button from '../Button/Button';
import Container from '../Container/Container';
import Typography from '../Typography/Typography';

import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.sectionWrapper}>
      <Image
        src={heroBg.src}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <Container>
        <div className={styles.heading}>
          <Typography variant="heading1" className={avenir.className}>
            Запалюйте світло,
          </Typography>
          <Typography variant="heading1" className={avenir.className}>
            пробуджуйте емоції,
          </Typography>
          <Typography variant="heading1" className={avenir.className}>
            творіть натхнення!
          </Typography>
        </div>
        <Button variant="primary">Переглянути Каталог</Button>
      </Container>
    </section>
  );
};

export default Hero;
