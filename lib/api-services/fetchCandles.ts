import { BASE_URL } from '@components/constants';

export const fetchCandles = async (
  wax: string,
  currentPage = 1,
  perPage = 9
) => {
  const response = await fetch(
    `${BASE_URL}/candles?wax=${wax}&page=${currentPage}&size=${perPage}`
  );
  const data = await response.json();
  return data._embedded.candles;
};
