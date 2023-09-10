import Breadcrumbs from '@components/components/Breadcrumbs/Breadcrumbs';
import CandlePage from '@components/components/CandlePage/CandlePage';

import { Locale } from '../../../../i18n-config';
import { getDictionary } from '../../../../lib/dictionary';

const Candles = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { breadcrumbs } = await getDictionary(lang);
  return (
    <>
      <Breadcrumbs
        items={[
          {
            label: breadcrumbs.soyCandles,
            path: `/candles`,
          },
        ]}
        lang={lang}
      />
      <CandlePage />
    </>
  );
};

export default Candles;
