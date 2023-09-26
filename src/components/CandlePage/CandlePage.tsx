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
  dictFilter: {
    filter: any;
  }
}

const CandlesPage: React.FC<CandlesPageI> = ({ dict, dictFilter }) => {
  const { width } = useWindowSize();
  const isLargeScreen = width >= 1230;
  const isSmallScreen = width < 1230;
  return (
    <>
      {isLargeScreen && <WaxDesc dict={dict.waxDesc} />}
      <CandlesSection dict={dictFilter}/>
      {isSmallScreen && <WaxDesc dict={dict.waxDesc} />}
    </>
  );
};

export default CandlesPage;
