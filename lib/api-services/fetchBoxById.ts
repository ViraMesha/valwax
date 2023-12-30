import { BASE_URL } from '@components/constants';
import { BoxDetailsI } from '@components/types';

export const fetchBoxById = async ({ id, currentLang }: ApiRequest) => {
  const response = await fetch(`${BASE_URL}/boxes/${id}?lang=${currentLang}`);

  // This will activate the closest `error.js` Error Boundary
  if (!response.ok) {
    throw new Error('Failed to fetch the box');
  }

  const data: BoxDetailsI = await response.json();
  return data;
};
