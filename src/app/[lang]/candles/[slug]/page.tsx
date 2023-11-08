import Breadcrumbs from '@components/components/Breadcrumbs/Breadcrumbs';
import CandlesPage from '@components/components/CandlesPage/CandlesPage';

import { Locale } from '../../../../../i18n-config';
import { getDictionary } from '../../../../../lib/utils/dictionary';

export async function generateMetadata({
  params: { slug, lang },
}: {
  params: {
    slug: 'soy-candles' | 'coconut-candles' | 'palm-candles';
    lang: Locale;
  };
}) {
  const { breadcrumbs } = await getDictionary(lang);
  return {
    title: `Valwax | ${breadcrumbs[slug]}`,
  };
}

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
            path: `/candles/${slug}`,
          },
        ]}
        lang={lang}
      />
      {/* <Tabs dict={page.candles.tabs} lang={lang} /> */}
      <CandlesPage
        dictWax={page.candles[slug]}
        dict={page.candles}
        lang={lang}
      />
    </>
  );
}
