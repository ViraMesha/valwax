import { ServerLocale } from '@components/types';

export const fetchBoxes = async (lang: ServerLocale) => {
  const response = await fetch(
    `https://candle-store-backend-06135d73f38e.herokuapp.com/api/public/boxes?lang=${lang}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch boxes');
  }

  const data = await response.json();
  return data?._embedded?.boxes;
};
