import { Suspense } from 'react';
import { CandlesSectionI } from '@components/types';

import Container from '../Container/Container';
import Filter from '../Filter/Filter';
import Section from '../Section/Section';
import CandlesSkeleton from '../Skeletons/CandlesSkeleton/CandlesSkeleton';

import CandleList from './CandleList/CandleList';

import styles from './CandlesSection.module.scss';

// interface CandlesSectionI {
//   dict: {
//     filter: FilterI;
//   };
//   candles: Promise<CandleI[]>;
// }

const CandlesSection: React.FC<CandlesSectionI> = ({ dict, candles }) => {
  return (
    <Section className={styles.section}>
      <Container className={styles.container}>
        <Filter dict={dict.filter} className={styles.filter} />
        <Suspense fallback={<CandlesSkeleton />}>
          <CandleList items={candles} />
        </Suspense>
      </Container>
    </Section>
  );
};

export default CandlesSection;
