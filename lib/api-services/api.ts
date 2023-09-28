import img1 from '../../public/images/boxes/boxes_section/box.jpg';
import img2 from '../../public/images/boxes/boxes_section/box2.jpg';
import { BoxDetailsI, CandleDetailsI } from '../types';
import { relatedProducts } from '../utils/relatedProducts';

export const getBoxDetails = async (id: string): Promise<BoxDetailsI> => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const fakeBoxDetails: BoxDetailsI = {
      id: '1',
      images: [img1.src, img2.src, img1.src, img2.src],
      title: 'Бокс - Мінімал',
      price: ' 355,00 ',
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
        'Тара на 30 мл',
        'Віск',
        'Аромаолія ( на вибір)',
        'Деревяний гніт',
        'Тримач для гноту ',
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
      images: [img1.src, img2.src],
      title: 'Ароматична свічка Paradise',
      description: 'Свічка з соєвого воску з ароматом опалого листя.',
      price: ' 355,00 ',
      topNotes: ['Кедр', 'пекан'],
      baseNotes: ['Кедр', 'пекан'],
      size: '300 мл',
    };

    return fakeCandleDetails;
  } catch (error) {
    throw error;
  }
};
