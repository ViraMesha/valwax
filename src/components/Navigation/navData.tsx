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
  Головна: '/',
  Свічки: '/candles',
  'Соєві свічки': '/soy-candles',
  'Кокосові свічки': '/coconut-candles',
  'Пальмові свічки': '/palm-candles',
  'Створи Сам': '/create-your-own',
  Бокси: '/boxes',
  'Оплата та Доставка': '/payment-and-delivery',
};
