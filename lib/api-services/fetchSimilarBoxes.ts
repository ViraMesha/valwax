import { BASE_URL } from '@components/constants';
import { BoxDetailsI } from '@components/types';

export const fetchSimilarBoxes = async ({
  id,
  currentLang,
}: ApiRequest): Promise<BoxDetailsI[]> => {
  const response = await fetch(
    `${BASE_URL}/similar-products/boxes?id=${id}&lang=${currentLang}`
  );

  // This will activate the closest `error.js` Error Boundary
  if (!response.ok) {
    throw new Error('Failed to fetch similar boxes');
  }

  const data = await response.json();
  return data?._embedded?.boxes;
};
