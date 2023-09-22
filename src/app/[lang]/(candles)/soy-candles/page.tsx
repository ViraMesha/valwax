import Breadcrumbs from '@components/components/Breadcrumbs/Breadcrumbs';
import CandlesPage from '@components/components/CandlePage/CandlePage';
import Tabs from '@components/components/Tabs/Tabs';

import { Locale } from '../../../../i18n-config';
import { getDictionary } from '../../../../lib/utils/dictionary';

const SoyCandles = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const { breadcrumbs } = await getDictionary(lang);
  const { page } = await getDictionary(lang);

  return (
    <>
      <Breadcrumbs
        items={[
          {
            label: breadcrumbs.soyCandles,
            path: `/soy-candles`,
          },
        ]}
        lang={lang}
      />
      <Tabs dict={page.soyCandles.tabs} />
      <CandlesPage dict={page.soyCandles} />
    </>
  );
};

export default SoyCandles;
