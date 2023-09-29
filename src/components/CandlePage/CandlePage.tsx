'use client';
import { useWindowSize } from 'usehooks-ts';

import { Locale } from '../../../i18n-config';
import CandlesSection from '../CandlesSection/CandlesSection';
import Tabs from '../Tabs/Tabs';
import WaxDesc from '../WaxDesc/WaxDesc';

interface CandlesPageI {
  dictWax: {
    waxDesc: {
      title: string;
      text: string;
    };

  };
  dict: {
    tabs: {
      fullTitle: string[];
      abbreviatedTitle: string[];
    };
    filter: any;
  };
  lang: Locale;
}

const CandlesPage: React.FC<CandlesPageI> = ({ dictWax, dict, lang }) => {
  const { width } = useWindowSize();
  const isLargeScreen = width >= 1230;
  const isSmallScreen = width < 1230;
  return (
    <>
      <Tabs dict={dict} lang={lang} />
      {isLargeScreen && <WaxDesc dict={dictWax.waxDesc} />}
      <CandlesSection dict={dict} />
      {isSmallScreen && <WaxDesc dict={dictWax.waxDesc} />}
    </>
  );
};

export default CandlesPage;
