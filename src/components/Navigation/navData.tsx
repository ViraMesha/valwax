export const navItems = [
  'Головна',
  'Свічки',
  'Створи Сам',
  'Бокси',
  'Оплата та Доставка',
];

type NavLink = Record<string, string | undefined>;

export const navLinks: NavLink = {
  Головна: '/',
  Свічки: '/candles',
  'Створи Сам': '/create-your-own',
  Бокси: '/boxes',
  'Оплата та Доставка': '/payment-and-delivery',
};
