'use client';
import { useWindowSize } from 'usehooks-ts';

import CandlesDeskLargeSkeleton from './CandlesDeskLargeSkeleton';
import CandlesDeskSkeleton from './CandlesDeskSkeleton';
import CandlesMobSkeleton from './CandlesMobSkeleton';
import CandlesTabLargeSkeleton from './CandlesTabLargeSkeleton';
import CandlesTabSmallSkeleton from './CandlesTabSmallSkeleton';

import styles from './CandlesSkeleton.module.scss';

const CandlesSkeleton = () => {
  const { width } = useWindowSize();
  const mob = width < 667;
  const smallTab = width >= 667 && width < 768;
  const largeTab = width >= 768 && width < 1024;
  const desk = width >= 1024 && width < 1230;
  const largeDesk = width >= 1230;

  return (
    <ul className={styles.wrapper}>
      {[...Array(9)].map((_, index) => (
        <li key={index}>
          {mob && <CandlesMobSkeleton />}
          {smallTab && <CandlesTabSmallSkeleton />}
          {largeTab && <CandlesTabLargeSkeleton />}
          {desk && <CandlesDeskSkeleton />}
          {largeDesk && <CandlesDeskLargeSkeleton />}
        </li>
      ))}
    </ul>
  );
};

export default CandlesSkeleton;
