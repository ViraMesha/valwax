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
      id: '1',
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
        'Ласкаво просимо на сторінку, де ваша   творчість запалюється , а натхнення вибу- хає на повну ! Тут ви знайдете наші захоп- люючі бокси для створення своїх власних шедеврів свічок. Ми підготували для вас набори, які містять все необхідне: відбір найкращих матеріалів до вимоги у виборі дизайну. Ласкаво просимо на сторінку, де ваша творчість запалюється , а натхнення вибу- хає на повну ! Тут ви знайдете наші захоп- люючі бокси для створення своїх власних шедеврів свічок. Ми підготували для вас набори, які містять все необхідне: відбір найкращих матеріалів до вимоги у виборі дизайну.  Ласкаво просимо на сторінку, де ваша творчість запалюється , а натхнення вибухає на повну ! Тут ви знайдете наші захоплюючі бокси для створення своїх власних шедеврів свічок. Ми підготували для вас набори, які містять все необхідне: відбір найкращих матеріалів до вимоги у виборі дизайну.',
      similar: relatedProducts,
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
      id: '1',
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
    };

    return fakeCandleDetails;
  } catch (error) {
    throw error;
  }
};
