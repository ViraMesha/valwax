/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { avenir } from '@components/app/fonts';

import image from '../../../public/images/quote/image.jpg';
import Container from '../Container/Container';
import Section from '../Section/Section';
import Typography from '../Typography/Typography';

import styles from './Quote.module.css';

const Quote = () => {
  return (
    <Section>
      <Container>
        <div className={styles.textContainer}>
          <Typography
            variant="subheding4"
            color="var(--cl-secondary-900)"
            className={avenir.className}
          >
            "Свічка, запалена з любові, може висвітлити темні куточки"
          </Typography>
        </div>
      </Container>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt="A large beautiful candle surrounded by eucalyptus twigs"
        />
      </div>
    </Section>
  );
};

export default Quote;
