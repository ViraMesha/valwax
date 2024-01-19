export const fetchCartBoxes = async ({
  lang,
  ids,
}: CartApiRequest): Promise<BoxDetailsI[]> => {
  const response = await fetch(`/api/cart/boxes?lang=${lang}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(ids),
  });

  if (!response.ok) throw new Error('Error by fetching cart boxes.');
  const data = await response.json();
  return data;
};
