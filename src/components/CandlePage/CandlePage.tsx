'use client';
import { useWindowSize } from 'usehooks-ts';

import CandlesSection from '../CandlesSection/CandlesSection';
import WaxDesc from '../WaxDesc/WaxDesc';

interface CandlesPageI {
  dict: {
    waxDesc: {
      title: string;
      text: string;
    };
  };
}

const CandlesPage: React.FC<CandlesPageI> = ({ dict }) => {
  const { width } = useWindowSize();
  const isLargeScreen = width >= 1230;
  const isSmallScreen = width < 1230;
  return (
    <>
      {isLargeScreen && <WaxDesc dict={dict.waxDesc} />}
      <CandlesSection />
      {isSmallScreen && <WaxDesc dict={dict.waxDesc} />}
    </>
  );
};

export default CandlesPage;
