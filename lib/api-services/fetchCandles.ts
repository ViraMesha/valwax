import { BASE_URL } from '@components/constants';
import { CandleApiResponse } from '@components/types';

export const fetchCandles = async (
  lang = 'UA',
  wax: string,
  currentPage = 0,
  perPage = 9
): Promise<CandleApiResponse> => {
  const response = await fetch(
    `${BASE_URL}/candles?lang=${lang}&wax=${wax}&page=${
      currentPage - 1
    }&size=${perPage}`
  );
  const data = await response.json();
  return {
    candles: data?._embedded?.candles,
    totalPages: data?.page?.totalPages,
  };
};
