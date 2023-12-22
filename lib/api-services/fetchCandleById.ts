import { BASE_URL } from '@components/constants';
import { CandleDetailsI } from '@components/types';

interface CandleFetchRequest {
  id: string;
  currentLang: 'UA' | 'EN';
}

export const fetchCandleById = async ({
  id,
  currentLang,
}: CandleFetchRequest): Promise<CandleDetailsI> => {
  const response = await fetch(`${BASE_URL}/candles/${id}?lang=${currentLang}`);

  // This will activate the closest `error.js` Error Boundary
  if (!response.ok) {
    throw new Error('Failed to fetch candles');
  }

  const data: CandleDetailsI = await response.json();
  return data;
};
