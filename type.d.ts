type ServerLocale = 'UA' | 'EN';

interface IProductDescriptionDict {
  price: string;
  quantity: string;
  topNotes: string;
  baseNotes: string;
  volume: string;
  containerVolume: string;
  matchsticks: string;
  wick: string;
  wax: string;
  color: string;
  aroma: string;
}

interface ApiRequest {
  id: string;
  currentLang: 'UA' | 'EN';
}
