import Container from '@components/components/Container/Container';
import Section from '@components/components/Section/Section';

import BoxesList from './BoxesList/BoxesList';

import styles from './BoxesSection.module.scss';

const BoxesSection = () => {
  return (
    <Section className={styles.section}>
      <Container>
        <BoxesList />
      </Container>
    </Section>
  );
};

export default BoxesSection;
