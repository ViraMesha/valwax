import img1 from '../../public/images/candles/img-1.jpg';
import img2 from '../../public/images/candles/img-2.jpg';
import img3 from '../../public/images/candles/img-3.jpg';
import { CandleI } from '../types';

export const relatedProducts: CandleI[] = [
  {
    id: '1',
    img: img1.src,
    title: 'Осінь.',
    price: '370,00',
    link: '/soy-candles',
  },
  {
    id: '2',
    img: img2.src,
    title: 'Імбир і спеції.',
    price: '355,00',
    link: '/soy-candles',
  },
  {
    id: '3',
    img: img3.src,
    title: 'Кашемірова слива.',
    price: '355,00',
    link: '/soy-candles',
  },
  {
    id: '4',
    img: img1.src,
    title: 'Осінь.',
    price: '370,00',
    link: '/soy-candles',
  },
];
