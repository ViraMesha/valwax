import Breadcrumbs from '@components/components/Breadcrumbs/Breadcrumbs';
import CandlesPage from '@components/components/CandlesPage/CandlesPage';
import Pagination from '@components/components/shared/Pagination/Pagination';

import { Locale } from '../../../../../i18n-config';
import { getCandles } from '../../../../../lib/api-services/api';
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
  searchParams,
}: {
  params: {
    slug: 'soy-candles' | 'coconut-candles' | 'palm-candles';
    lang: Locale;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { breadcrumbs } = await getDictionary(lang);
  const { page } = await getDictionary(lang);

  const currentPage =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;
  const perPage =
    typeof searchParams.perPage === 'string' ? Number(searchParams.perPage) : 9;

  const promise = getCandles(currentPage, perPage);

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
        candles={promise}
        page={currentPage}
      />
    </>
  );
}
