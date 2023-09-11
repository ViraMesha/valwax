/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { avenir } from '@components/app/fonts';

import image from '../../../public/images/quote/image.jpg';
import Container from '../Container/Container';
import Section from '../Section/Section';
import Typography from '../Typography/Typography';

import styles from './Quote.module.css';

interface QuoteI {
  dict: {
    text: string;
  };
}

const Quote: React.FC<QuoteI> = ({ dict }) => {
  return (
    <Section>
      <Container>
        <div className={styles.textContainer}>
          <Typography
            variant="subheding4"
            color="var(--cl-secondary-900)"
            className={avenir.className}
          >
            "{dict.text}"
          </Typography>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={image}
            alt="A large beautiful candle surrounded by eucalyptus twigs"
            fill
            quality={100}
            sizes="(min-width: 1230) 1200px,
                    (min-width: 1024) 976px,
                    (min-width: 768px) 720px,
                    (min-width: 667px) 619px,
                    327px"
          />
        </div>
      </Container>
    </Section>
  );
};

export default Quote;
