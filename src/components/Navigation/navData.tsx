import type { NavDictI } from '@components/types';

export const generateNavLinks = ({
  home,
  candles,
  soy,
  coconut,
  palm,
  createYourOwn,
  paymentAndDelivery,
  boxes,
}: NavDictI) => {
  return {
    [home]: '',
    [candles]: '/candles',
    [soy]: '/candles/soy-candles',
    [coconut]: '/candles/coconut-candles',
    [palm]: '/candles/palm-candles',
    [createYourOwn]: '/create-your-own',
    [boxes]: '/boxes',
    [paymentAndDelivery]: '/payment-and-delivery',
  };
};
