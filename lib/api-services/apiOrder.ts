import { delayFn } from "@components/helpers/delayFn";
import { showToast } from "@components/helpers/showToast";


export const sendOrder = async (order: {}) => {
  try {
    delayFn(500);
    const response = await fetch(`/api`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    };
    showToast('Ваше замовлення оформленно')
  } catch (error) {
    showToast('Ой щось не так', 'error')
  };
};