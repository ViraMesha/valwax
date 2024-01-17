import Breadcrumbs from '@components/components/Breadcrumbs/Breadcrumbs';
import CandlesPage from '@components/components/CandlesPage/CandlesPage';
import { buildFilterQuery } from '@components/helpers';
import { convertToServerLocale } from '@components/helpers/convertToServerLocale';
import { removeCandlesSuffix } from '@components/helpers/removeCandlesSuffix';
import { fetchCandles } from '@lib/api-services/fetchCandles';
import { getDictionary } from '@lib/utils/dictionary';

import { Locale } from '../../../../../i18n-config';

import { convertStringToNumber } from './../../../../helpers/convertStringToNumber';

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
  const { breadcrumbs, page, general } = await getDictionary(lang);

  const currentPage = convertStringToNumber(searchParams.page, 1);
  const perPage = convertStringToNumber(searchParams.perPage, 9);
  const aromaQuery = searchParams.aroma
    ? buildFilterQuery('aroma.notes.value', searchParams.aroma)
    : '';
  const volumeQuery = searchParams.volume
    ? buildFilterQuery('volume', searchParams.volume)
    : '';
  const containerColorQuery = searchParams.color
    ? buildFilterQuery('containerColor.value', searchParams.color)
    : '';
  const waxColorQuery = searchParams.color
    ? buildFilterQuery('waxColor.value', searchParams.color)
    : '';

  const sortQuery = searchParams.sort
    ? buildFilterQuery('sort', searchParams.sort)
    : '';

  const hasFetchQuery = searchParams.fetch;

  const wax = removeCandlesSuffix(slug);
  const currentLang = convertToServerLocale(lang);

  const promise = !hasFetchQuery
    ? fetchCandles({ currentLang, wax, currentPage, perPage })
    : fetchCandles({
        currentLang,
        wax,
        currentPage,
        perPage,
        aroma: aromaQuery,
        volume: volumeQuery,
        containerColor: containerColorQuery,
        waxColor: waxColorQuery,
        sort: sortQuery,
      });

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
      <CandlesPage
        dictWax={page.candles[slug]}
        dict={page.candles}
        lang={lang}
        candles={promise}
        paginBtnDict={general.buttons.showMore}
      />
    </>
  );
}
