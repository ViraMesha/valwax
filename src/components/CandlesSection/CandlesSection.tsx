import { Suspense } from 'react';
import { CandlesSectionI } from '@components/types';

import Container from '../Container/Container';
import Filter from '../Filter/Filter';
import Section from '../Section/Section';
import CandlesSkeleton from '../Skeletons/CandlesSkeleton/CandlesSkeleton';

import CandleList from './CandleList/CandleList';

import styles from './CandlesSection.module.scss';

const CandlesSection: React.FC<CandlesSectionI> = ({ dict, candles, paginBtnDict }) => {
  return (
    <Section id="candles-section" className={styles.section}>
      <Container className={styles.container}>
        <Filter dict={dict.filter} className={styles.filter} />
        <Suspense fallback={<CandlesSkeleton />}>
          <CandleList items={candles} paginBtnDict={paginBtnDict} />
        </Suspense>
      </Container>
    </Section>
  );
};

export default CandlesSection;
