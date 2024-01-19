import { BASE_URL } from '@components/constants';

export const fetchBoxes = async (
  lang: ServerLocale
): Promise<BoxDetailsI[]> => {
  //TODO: Remove revalidate
  const response = await fetch(`${BASE_URL}/boxes?lang=${lang}`, {
    next: { revalidate: 3600 },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch boxes');
  }

  const data = await response.json();
  return data?._embedded?.boxes;
};
