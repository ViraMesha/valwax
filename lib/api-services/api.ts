import { extractErrorMessage } from '@components/helpers/extractErrorMessage';

import box1 from '../../public/images/boxes/boxes_section/box.jpg';
import box2 from '../../public/images/boxes/boxes_section/box2.jpg';
import box3 from '../../public/images/boxes/boxes_section/boxes3.jpg';
import candle1 from '../../public/images/candles/img-1.jpg';
import candle2 from '../../public/images/candles/img-2.jpg';
import candle3 from '../../public/images/candles/img-3.jpg';
import { relatedProducts } from '../../src/helpers/relatedProducts';
import { BoxDetailsI, CandleDetailsI } from '../../src/types';

export const getBoxDetails = async (id: string): Promise<BoxDetailsI> => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const fakeBoxDetails: BoxDetailsI = {
      id: '234',
      images: [box1.src, box2.src, box3.src],
      title: 'Бокс - Мінімал',
      price: 355,
      aroma: [
        'Чиста бавовна',
        'Кориця і ваніль',
        'Свіжа кава',
        'Гарбуз зі спеціями',
        'Пелюстки троянд',
        'Сухий джин',
        'Грейпфрут і м’ята',
        'Свіжа кава',
      ],
      components: [
        { title: 'Верхні ноти', content: 'Кедр, пекан' },
        { title: 'Базові ноти', content: 'Кедр, пекан' },
        { title: 'Об’єм', content: 'Кедр, пекан' },
      ],
      description:
        'Бокс "Стандарт" - це ваша можливість підняти свій рівень у світі свічкового мистецтва та вразити всіх красою та ароматом свічки.',
      similar: relatedProducts,
      slug: '/boxes',
    };

    return fakeBoxDetails;
  } catch (error) {
    throw error;
  }
};

export const getCandleDetails = async (id: string): Promise<CandleDetailsI> => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const fakeCandleDetails: CandleDetailsI = {
      id: '123',
      images: [candle1.src, candle2.src, candle3.src, candle1.src],
      title: 'Ароматична свічка Paradise',
      description: 'Свічка з соєвого воску з ароматом опалого листя.',
      price: 355,
      components: [
        { title: 'Верхні ноти', content: 'Кедр, пекан' },
        { title: 'Базові ноти', content: 'Кедр, пекан' },
        { title: 'Об’єм', content: 'Кедр, пекан' },
      ],
      similar: relatedProducts,
      slug: '/candles/soy-candles',
    };

    return fakeCandleDetails;
  } catch (error) {
    throw error;
  }
};

export const fetchSearchResults = async (query: string | undefined) => {
  try {
    const response = await fetch(`/api/search?query=${query}`);
    const data = await response.json();
    return data;
  } catch (error: unknown) {
    extractErrorMessage(error);
  }
};
