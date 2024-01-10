import { BASE_URL } from '@components/constants';
import { BoxDetailsI, CandleDetailsI } from '@components/types';

export const fetchSimilarProducts = async ({
  id,
  currentLang,
}: ApiRequest): Promise<CandleDetailsI[] | BoxDetailsI[]> => {
  const response = await fetch(
    `${BASE_URL}/related-products?id=${id}&lang=${currentLang}`
  );

  // This will activate the closest `error.js` Error Boundary
  if (!response.ok) {
    throw new Error('Failed to fetch related products');
  }

  const data = await response.json();
  return data?._embedded?.relatedProducts;
};
