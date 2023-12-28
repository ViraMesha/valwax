import { BASE_URL } from '@components/constants';
import { CandleDetailsI } from '@components/types';

export const fetchSimilarCandles = async ({
  id,
  currentLang,
}: ApiRequest): Promise<CandleDetailsI[]> => {
  const response = await fetch(
    `${BASE_URL}/similar-products/candles?id=${id}&lang=${currentLang}`
  );

  // This will activate the closest `error.js` Error Boundary
  if (!response.ok) {
    throw new Error('Failed to fetch similar candles');
  }

  const data = await response.json();
  return data?._embedded?.candles;
};
