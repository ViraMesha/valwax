import Breadcrumbs from '@components/components/Breadcrumbs/Breadcrumbs';
import CandlesPage from '@components/components/CandlePage/CandlePage';
import Tabs from '@components/components/Tabs/Tabs';

import { Locale } from '../../../../../i18n-config';
import { getDictionary } from '../../../../../lib/utils/dictionary';

export default async function Page({
  params: { slug, lang },
}: {
  params: {
    slug: 'soy-candles' | 'coconut-candles' | 'palm-candles';
    lang: Locale;
  };
}) {
  const { breadcrumbs } = await getDictionary(lang);
  const { page } = await getDictionary(lang);

  return (
    <>
      <Breadcrumbs
        items={[
          {
            label: breadcrumbs[slug],
            path: `/${slug}`,
          },
        ]}
        lang={lang}
      />
      {/* <Tabs dict={page.candles.tabs} lang={lang} /> */}
      <CandlesPage dictWax={page.candles[slug]} dict={page.candles} lang={lang}/>
    </>
  );
}
