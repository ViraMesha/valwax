import { handleErrorWithMessage } from '@components/helpers/handleErrorWithMessage';

export const subscribeToNewsletter = async (email: string) => {
  try {
    const res = await fetch(
      `https://candle-store-backend-06135d73f38e.herokuapp.com//subscription/subscribe?email=${email}`,
      {
        method: 'POST',
      }
    );
    return await res.json();
  } catch (error: unknown) {
    handleErrorWithMessage(error);
  }
};
