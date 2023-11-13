import Container from '@components/components/Container/Container';
import Section from '@components/components/Section/Section';

import BoxesList from './BoxesList/BoxesList';

import styles from './BoxesSection.module.scss';

const BoxesSection = ({
  dict,
}: {
  dict: {
    buyBtn: string;
    reviewBtn: string;
  };
}) => {
  return (
    <Section className={styles.section}>
      <Container>
        <BoxesList dict={dict} />
      </Container>
    </Section>
  );
};

export default BoxesSection;
