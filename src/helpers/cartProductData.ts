import { CartProductI } from '@components/types';

import candle3 from '../../public/images/candles/img-3.jpg';

const price = 550;
const img = candle3.src;
const title = 'Ароматична свічка Paradise';
const description = 'Свічка з соєвого воску з ароматом опалого листя.';
const quantity = 2;
const link = '/soy-candles';

const cartProductData: CartProductI[] = [
  {
    id: '1',
    img,
    title,
    description,
    price,
    quantity,
    link,
  },
  {
    id: '2',
    img,
    title,
    description,
    price,
    quantity,
    link,
  },
];

export default cartProductData;
