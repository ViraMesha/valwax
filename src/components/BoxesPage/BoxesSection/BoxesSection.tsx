import { Suspense } from 'react';
import Container from '@components/components/Container/Container';
import Section from '@components/components/Section/Section';
import { BoxI } from '@components/types';

import BoxesList from './BoxesList/BoxesList';

import styles from './BoxesSection.module.scss';

const BoxesSection = ({
  dict,
  boxes,
}: {
  dict: {
    buyBtn: string;
    reviewBtn: string;
  };
  boxes: Promise<BoxI[]>;
}) => {
  return (
    <Section className={styles.section}>
      <Container>
        <Suspense fallback={<p>Loading boxes...</p>}>
          <BoxesList dict={dict} boxes={boxes} />
        </Suspense>
      </Container>
    </Section>
  );
};

export default BoxesSection;
