import heroBg from '../../../public/images/hero/hero.jpg';

export interface HeroContent {
  id: number;
  backgroundImage: string;
  heading1: string;
  heading2: string;
  heading3: string;
  buttonText: string;
}

const heading1 = 'Запалюйте світло,';

const heading2 = 'пробуджуйте емоції,';

const heading3 = 'творіть натхнення!';

const buttonText = 'Переглянути Каталог';

const heroCards: HeroContent[] = [
  {
    id: 1,
    backgroundImage: heroBg.src,
    heading1,
    heading2,
    heading3,
    buttonText,
  },
  {
    id: 2,
    backgroundImage: heroBg.src,
    heading1,
    heading2,
    heading3,
    buttonText,
  },
  {
    id: 3,
    backgroundImage: heroBg.src,
    heading1,
    heading2,
    heading3,
    buttonText,
  },
];

export default heroCards;
