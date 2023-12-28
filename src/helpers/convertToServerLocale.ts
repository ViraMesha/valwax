import { Locale } from '../../i18n-config';

export const convertToServerLocale = (lang: Locale): ServerLocale => {
  return lang === 'uk' ? 'UA' : 'EN';
};
