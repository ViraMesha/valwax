'use client';
import { useWindowSize } from 'usehooks-ts';

import CandlesSection from '../CandlesSection/CandlesSection';
import WaxDesc from '../WaxDesc/WaxDesc';

const CandlePage = () => {
  const { width } = useWindowSize();
  const isLargeScreen = width >= 1230;
  const isSmallScreen = width < 1230;
  return (
    <>
      {isLargeScreen && <WaxDesc />}
      <CandlesSection />
      {isSmallScreen && <WaxDesc />}
    </>
  );
};

export default CandlePage;
