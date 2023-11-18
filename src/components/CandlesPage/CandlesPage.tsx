import { CandleI } from '@components/types';

import { Locale } from '../../../i18n-config';
import CandlesSection from '../CandlesSection/CandlesSection';
import Tabs from '../Tabs/Tabs';
import WaxDesc from '../WaxDesc/WaxDesc';

import styles from './CandlesPage.module.scss';

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
  candles: Promise<CandleI[]>;
}

const CandlesPage: React.FC<CandlesPageI> = ({
  dictWax,
  dict,
  lang,
  candles,
}) => {
  return (
    <>
      <Tabs dict={dict} lang={lang} />
      <WaxDesc dict={dictWax?.waxDesc} className={styles.waxDescAboveCandles} />
      <CandlesSection dict={dict} candles={candles} />
      <WaxDesc dict={dictWax?.waxDesc} className={styles.waxDescBelowCandles} />
    </>
  );
};

export default CandlesPage;
