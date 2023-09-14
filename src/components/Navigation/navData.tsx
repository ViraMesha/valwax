type NavItem =
  | 'Головна'
  | 'Свічки'
  | 'Створи Сам'
  | 'Бокси'
  | 'Оплата та Доставка';

type CandlesMenuItem = 'Соєві свічки' | 'Кокосові свічки' | 'Пальмові свічки';

type NavLink = Record<NavItem | CandlesMenuItem, string | undefined>;

export const navItems: NavItem[] = [
  'Головна',
  'Свічки',
  'Створи Сам',
  'Бокси',
  'Оплата та Доставка',
];

export const candlesMenuItems: CandlesMenuItem[] = [
  'Соєві свічки',
  'Кокосові свічки',
  'Пальмові свічки',
];

export const navLinks: NavLink = {
  Головна: '',
  Свічки: '/candles',
  'Соєві свічки': '/candles',
  // 'Соєві свічки': '/soy-candles',
  'Кокосові свічки': '/coconut-candles',
  'Пальмові свічки': '/palm-candles',
  'Створи Сам': '/create-your-own',
  Бокси: '/boxes',
  'Оплата та Доставка': '/payment-and-delivery',
};

export const navigationTranslations: Record<string, Record<string, string>> = {
  uk: {
    Головна: 'Головна',
    Свічки: 'Свічки',
    'Створи Сам': 'Створи Сам',
    Бокси: 'Бокси',
    'Оплата та Доставка': 'Оплата та Доставка',
    'Соєві свічки': 'Соєві свічки',
    'Кокосові свічки': 'Кокосові свічки',
    'Пальмові свічки': 'Пальмові свічки',
  },
  en: {
    Головна: 'Home',
    Свічки: 'Candles',
    'Створи Сам': 'Create Yourself',
    Бокси: 'Boxes',
    'Оплата та Доставка': 'Payment and delivery',
    'Соєві свічки': 'Soy candles',
    'Кокосові свічки': 'Coconut candles',
    'Пальмові свічки': 'Palm candles',
  },
};
