import img1 from '../../../../public/images/boxes/boxes_section/box.jpg';
import img2 from '../../../../public/images/boxes/boxes_section/box2.jpg';
import img3 from '../../../../public/images/boxes/boxes_section/boxes3.jpg';
import img4 from '../../../../public/images/boxes/boxes_section/boxes4.jpg';

export interface BoxI {
  id: string;
  img: string[];
  title: string;
  price: string;
  link: string;
  text: string;
}

const text =
  'Ласкаво просимо на сторінку, де ваша творчість запалюється, а натхнення вибухає на повну! Тут ви знайдете наші захоплюючі бокси для створення своїх влаcних шедеврів свічок. Ми підготували для вас набори, які містять все необхідне: відбір найкращих матеріалів до вимоги у виборі дизайну.';

const price = '355,00';

const boxesData: BoxI[] = [
  {
    id: '1',
    img: [img1.src, img1.src, img1.src],
    title: 'Бокс - Мінімал',
    price,
    link: '/boxes',
    text,
  },
  {
    id: '2',
    img: [img2.src, img2.src, img2.src],
    title: 'Бокс - Стандарт                                                  ',
    price,
    link: '/boxes',
    text,
  },
  {
    id: '3',
    img: [img3.src, img3.src, img3.src],
    title: 'Бокс - Стандарт ПРО',
    price,
    link: '/boxes',
    text,
  },
  {
    id: '4',
    img: [img4.src, img4.src, img4.src],
    title: 'Бокс - Дабл ПРО',
    price,
    link: '/boxes',
    text,
  },
];

export default boxesData;
