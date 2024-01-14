export const fetchCartCandles = async ({
  lang,
  ids,
}: CartApiRequest): Promise<CandleDetailsI[]> => {
  const response = await fetch(`/api/cart/candles?lang=${lang}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(ids),
  });

  if (!response.ok) throw new Error('Error by fetching cart candles.');
  const data = await response.json();
  return data;
};
