import { Suspense } from 'react';
import { CandleI } from '@components/types';
import { useWindowSize } from 'usehooks-ts';

import Container from '../Container/Container';
import Filter from '../Filter/Filter';
import Section from '../Section/Section';

import CandleList from './CandleList/CandleList';
import candleData from './candleData';

import styles from './CandlesSection.module.scss';

interface CandlesSectionI {
  dict: {
    filter: any;
  };
  candles: Promise<CandleI[]>;
}

const CandlesSection: React.FC<CandlesSectionI> = ({ dict, candles }) => {
  return (
    <Section className={styles.section}>
      <Container className={styles.container}>
        <Filter dict={dict.filter} className={styles.filter} />
        <Suspense fallback={<div>Loading candles...</div>}>
          <CandleList items={candles} />
        </Suspense>
      </Container>
    </Section>
  );
};

export default CandlesSection;
