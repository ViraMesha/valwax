import box1 from '../../public/images/boxes/boxes_section/box.jpg';
import box2 from '../../public/images/boxes/boxes_section/box2.jpg';
import box3 from '../../public/images/boxes/boxes_section/boxes3.jpg';
import box4 from '../../public/images/boxes/boxes_section/boxes4.jpg';
import candle1 from '../../public/images/candles/img-1.jpg';
import candle2 from '../../public/images/candles/img-2.jpg';
import candle3 from '../../public/images/candles/img-3.jpg';
import { relatedProducts } from '../../src/helpers/relatedProducts';
import { BoxDetailsI, BoxI, CandleDetailsI, CandleI } from '../../src/types';

export const getCandles = async (): Promise<CandleI[]> => {
  try {
    await new Promise(resolve => setTimeout(resolve, 5000));

    const fakeCandles: CandleI[] = [
      {
        id: '1',
        img: candle1.src,
        title: 'Осінь.',
        price: 370,
      },
      {
        id: '2',
        img: candle2.src,
        title: 'Імбир і спеції.',
        price: 355,
      },
      {
        id: '3',
        img: candle3.src,
        title: 'Кашемірова слива.',
        price: 355,
      },
      {
        id: '4',
        img: candle1.src,
        title: 'Осінь.',
        price: 370,
      },
      {
        id: '5',
        img: candle2.src,
        title: 'Імбир і спеції.',
        price: 355,
      },
      {
        id: '6',
        img: candle3.src,
        title: 'Кашемірова слива.',
        price: 355,
      },
      {
        id: '7',
        img: candle1.src,
        title: 'Осінь.',
        price: 370,
      },
      {
        id: '8',
        img: candle2.src,
        title: 'Імбир і спеції.',
        price: 355,
      },
      {
        id: '9',
        img: candle3.src,
        title: 'Кашемірова слива.',
        price: 355,
      },
    ];

    return fakeCandles;
  } catch (error) {
    throw error;
  }
};

export const getBoxes = async (): Promise<BoxI[]> => {
  const price = 355;

  const description =
    'Бокс "Стандарт" - це ваша можливість підняти свій рівень у світі свічкового мистецтва та вразити всіх красою та ароматом свічки.';

  try {
    await new Promise(resolve => setTimeout(resolve, 5000));

    const fakeBoxes: BoxI[] = [
      {
        id: '1',
        img: [box1.src, box1.src, box1.src],
        title: 'Бокс - Мінімал',
        price,
        link: '/boxes',
        text: `Ваш Перший Крок до Творчості зі Свічками! Іноді все велике починається з малого. Наш бокс "Мінімал" - це ваша можливість спробувати свій талант у створенні свічок без зайвих складнощів. Ви знайдете все необхідне для вашого першого витвору тут, і ваша подорож у світ свічкового мистецтва розпочнеться з легкості та задоволення.`,
        description,
      },
      {
        id: '2',
        img: [box2.src, box2.src, box2.src],
        title:
          'Бокс - Стандарт                                                  ',
        price,
        link: '/boxes',
        text: `Крок до Справжньої Майстерності в Свічковому Мистецтві!  Готові підняти планку і стати справжнім майстром свічок? Наш бокс "Стандарт" - це ваша можливість розкрити весь світ можливостей та виразити свою творчість через створення свічок. У цьому боксі вас чекає все необхідне, щоб стати справжнім професіоналом у світі свічкового мистецтва.`,
        description,
      },
      {
        id: '3',
        img: [box3.src, box3.src, box3.src],
        title: 'Бокс - Стандарт ПРО',
        price,
        link: '/boxes',
        text: `Ваш Вищий Рівень Майстерності в Свічковому Мистецтві! Якщо ви прагнете до справжньої майстерності у світі створення свічок, то бокс "Стандарт Pro" - це ваш найкращий вибір. Він містить у собі усі необхідні інструменти та матеріали, щоб ви могли створити свої шедевральні свічки і долучитися до еліти свічкових майстрів.`,
        description,
      },
      {
        id: '4',
        img: [box4.src, box4.src, box4.src],
        title: 'Бокс - Дабл ПРО',
        price,
        link: '/boxes',
        text: `Подвійна Доза Творчості у Свічковому Мистецтві!Ви не готові зупинятися на одній свічці? Тоді бокс "Дабл Про" - це ваша найкраща можливість подарувати собі подвійну порцію творчості у створенні свічок. У цьому боксі ви знайдете все, щоб створити дві унікальні свічки та поділитися ними з близькими.`,
        description,
      },
    ];

    return fakeBoxes;
  } catch (error) {
    throw error;
  }
};

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
