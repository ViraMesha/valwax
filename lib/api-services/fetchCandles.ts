import { BASE_URL } from '@components/constants';
import type { CandleApiResponse } from '@components/types';

interface CandlesFetchRequest {
  currentLang: ServerLocale;
  wax: string;
  currentPage: number;
  perPage: number;
}

export const fetchCandles = async ({
  currentLang = 'UA',
  wax,
  currentPage,
  perPage = 9,
}: CandlesFetchRequest): Promise<CandleApiResponse> => {
  const response = await fetch(
    `${BASE_URL}/candles?lang=${currentLang}&wax=${wax}&page=${
      currentPage > 1 ? currentPage - 1 : 0
    }&size=${perPage}`
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
