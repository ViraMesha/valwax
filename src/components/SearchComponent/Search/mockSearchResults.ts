import { BoxDetailsI, CandleDetailsI } from '@components/types';

const mockSearchResults: (CandleDetailsI | BoxDetailsI)[] = [
  {
    id: '1',
    images: [
      '/images/aboutUs/Image1.jpg',
      '/images/aboutUs/Image2.jpg',
    ],
    title: 'Ароматична соєва свічка',
    description: 'Опис свічки...',
    price: '250',
    components: [],
     similar: [
      { id: '2', img: 'candle2.jpg', title: 'Свічка 2', price: '400' },
      { id: '3', img: 'candle3.jpg', title: 'Свічка 3', price: '350' },
    ],
  },
  {
    id: '1000',
    images: [
      '/images/aboutUs/Image1.jpg',
      '/images/aboutUs/Image3.jpg',
    ],
    title: 'Ароматична соєва свічка',
    price: '250',
    aroma: ['Арома 1', 'Арома 2'],
    components: [],
    description: 'Чудовий опис набору...',
    similar: [
      { id: '2', img: 'candle2.jpg', title: 'Свічка 2', price: '400' },
      { id: '3', img: 'candle3.jpg', title: 'Свічка 3', price: '350' },
    ],
  },
];

export default mockSearchResults;
