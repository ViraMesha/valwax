import { BASE_URL } from '@components/constants';
import type { CandleApiResponse } from '@components/types';

interface CandlesFetchRequest {
  currentLang: ServerLocale;
  wax: string;
  currentPage: number;
  perPage: number;
  aroma?: string;
  volume?: string;
  waxColor?: string;
  containerColor?: string;
  sort?: string;
}

export const fetchCandles = async ({
  currentLang = 'UA',
  wax,
  currentPage,
  perPage = 9,
  aroma,
  volume,
  waxColor,
  containerColor,
  sort,
}: CandlesFetchRequest): Promise<CandleApiResponse> => {
  const buildQueryParams = () => {
    let query = '';
    if (aroma) {
      query += '&' + aroma;
    }
    if (volume) {
      query += '&' + volume;
    }
    if (waxColor) {
      query += '&' + waxColor;
    }
    if (containerColor) {
      query += '&' + containerColor;
    }

    if (sort) {
      query += '&' + sort;
    }
    return query;
  };

  //TODO: Remove revalidate
  const response = await fetch(
    `${BASE_URL}/candles?lang=${currentLang}&wax=${wax}&page=${
      currentPage > 1 ? currentPage - 1 : 0
    }&size=${perPage}${buildQueryParams()}`,
    { next: { revalidate: 86400 } }
  );

  // This will activate the closest `error.js` Error Boundary
  if (!response.ok) {
    throw new Error('Failed to fetch candles');
  }

  const data = await response.json();
  return {
    candles: data?._embedded?.candles,
    totalPages: data?.page?.totalPages,
  };
};
