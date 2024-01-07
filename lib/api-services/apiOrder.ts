import { showToast } from "@components/helpers/showToast";


export const sendOrder = async (order: {}) => {
  try {

    const response = await fetch(`/api/checkout/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    });

    const data = await response.json()

    if (!response.ok || !data.success) {
      throw new Error('Failed to fetch data');
    };

    showToast('Ваше замовлення оформленно')
  } catch (error) {
    showToast('Ой щось не так', 'error')
  };
};

