import { Suspense } from 'react';
import Container from '@components/components/Container/Container';
import Section from '@components/components/Section/Section';
import BoxesSkeleton from '@components/components/Skeletons/BoxesSkeleton/BoxesSkeleton';
import type { BoxesSectionProps } from '@components/types';

import BoxesList from './BoxesList/BoxesList';

import styles from './BoxesSection.module.scss';

const BoxesSection = ({ dict, boxes, toastMessage, lang }: BoxesSectionProps) => {
  return (
    <Section className={styles.section}>
      <Container>
        <Suspense fallback={<BoxesSkeleton />}>
          <BoxesList dict={dict} boxes={boxes} toastMessage={toastMessage} lang={lang}/>
        </Suspense>
      </Container>
    </Section>
  );
};

export default BoxesSection;
