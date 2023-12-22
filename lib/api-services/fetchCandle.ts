interface CandleFetchRequest {
  id: string;
  currentLang: 'UA' | 'EN';
}

export const fetchCandle = async ({ id, currentLang }: CandleFetchRequest) => {
  const response = await fetch(
    `https://candle-store-backend-06135d73f38e.herokuapp.com/api/public/candles/${id}?lang=${currentLang}`
  );

  // This will activate the closest `error.js` Error Boundary
  if (!response.ok) {
    throw new Error('Failed to fetch candles');
  }

  const data = await response.json();
  return data;
};
