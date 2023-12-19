import img1 from '../../public/images/candles/img-1.jpg';
import img2 from '../../public/images/candles/img-2.jpg';
import img3 from '../../public/images/candles/img-3.jpg';
import { CandleI } from '../types';

export const relatedProducts: CandleI[] = [
  {
    id: '1',
    images: [img1.src],
    title: 'Осінь.',
    price: 370,
    slug: '/candles/soy-candles',
  },
  {
    id: '2',
    images: [img2.src],
    title: 'Імбир і спеції.',
    price: 355,
    slug: '/candles/soy-candles',
  },
  {
    id: '3',
    images: [img3.src],
    title: 'Кашемірова слива.',
    price: 355,
    slug: '/candles/soy-candles',
  },
  {
    id: '4',
    images: [img1.src],
    title: 'Осінь.',
    price: 370,
    slug: '/candles/soy-candles',
  },
];
