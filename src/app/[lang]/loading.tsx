import Container from '@components/components/Container/Container';
import Section from '@components/components/Section/Section';

import styles from './loading.module.scss';

export default function Loading() {
  return (
    <Section>
      <Container className={styles.container}>
        <p>Loading...</p>
      </Container>
    </Section>
  );
}
