import Image from 'next/image';
import { avenir } from '@components/app/fonts';

import heroBg from '../../../public/images/hero/hero.jpg';
import Button from '../Button/Button';
import Container from '../Container/Container';
import Section from '../Section/Section';
import Typography from '../Typography/Typography';

import styles from './Hero.module.css';

const Hero = () => {
  return (
    <Section className={styles.sectionWrapper}>
      <Container>
        <Image
          src={heroBg.src}
          alt="Background Image"
          width={1200}
          height={650}
          quality={100}
          priority
          className={styles.bgImage}
        />
        <div className={styles.content}>
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
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
