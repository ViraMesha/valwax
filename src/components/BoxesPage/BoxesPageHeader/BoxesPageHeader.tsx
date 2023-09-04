import Image from 'next/image';
import Container from '@components/components/Container/Container';
import Section from '@components/components/Section/Section';
import Typography from '@components/components/Typography/Typography';

import bg from '../../../../public/images/boxes/boxes_header/bg.jpg';

import styles from './BoxesPageHeader.module.scss';

const BoxesPageHeader = () => {
  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.body}>
          <Image
            priority
            src={bg}
            alt="Вид зверху на свічку"
            sizes="100vw"
            className={styles.img}
          />
          <div className={styles.content}>
            <Typography variant="subheadingLight" className={styles.title}>
              Бокси для твоєї творчості
            </Typography>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default BoxesPageHeader;
