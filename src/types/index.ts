import { StaticImageData } from 'next/image';

import { Locale } from '../../i18n-config';

export interface BoxDetailsI {
  id: string;
  images: string[];
  title: string;
  price: number;
  aroma: string[];
  components: ComponentI[];
  description: string;
  similar: CandleI[];
  slug: string;
}

export interface CandleI {
  id: string;
  img: string;
  title: string;
  price: number;
  link?: string;
}

export interface ComponentI {
  title: string;
  content: string;
}

export interface CandleDetailsI {
  id: string;
  images: string[];
  title: string;
  description: string;
  price: number;
  components: ComponentI[];
  similar: CandleI[];
  slug: string;
}

export type CustomCandleDescription = {
  container: string;
  wax: string;
  aroma: string;
  wick: string;
  color: string;
};

export interface CartProductI {
  id: string;
  img: string;
  title: string;
  description?: string | CustomCandleDescription;
  price: number;
  quantity: number;
  link: string;
}

type parameterI = {
  number: string;
  title: string;
  options: string[];
  images?: StaticImageData[];
  colors?: string[];
};

export type configuratorSectionI = {
  container: parameterI;
  wax: parameterI;
  aroma: parameterI;
  wick: parameterI;
  color: parameterI;
};

export type generalI = {
  buttons: { [key: string]: string };
  titles: { [key: string]: string };
  messages: { [key: string]: string };
};

export interface ConfiguratorSectionI {
  dict: configuratorSectionI;
  dictGeneral: generalI;
}

export interface ParameterI {
  dict: parameterI;
  onChangeParam: (v: string, p: string) => void;
  parameter: string;
}

export interface OptionEventI {
  target: { value: string };
}

export interface ProductDetails {
  id: string;
  images: string[];
  title: string;
  price: number;
  slug: string;
}

export interface AreaData {
  Ref?: string;
  Description?: string;
  REGION_ID?: string;
  REGION_UA?: string;
  CITY_ID?: string;
  CITY_UA?: string;
  POSTOFFICE_ID?: string;
  POSTOFFICE_UA?: string;
}

export interface SelectOptions {
  ref: string;
  value: string;
  label: string;
}
export interface ButtonsDictI {
  buyNow: string;
  addToCart: string;
}

export interface ProductDescription {
  wax: string;
  aroma: string;
  wick: string;
  color: string;
}

export interface CheckoutPageDictionary {
  productList: {
    deleteButtonText: string;
    totalText: string;
    descriptionPropertyNames: ProductDescription;
  };
  form: {
    contactFormTitle: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    delivery: string;
    deliveryOptions: string[];
    paymentOptions: string[];
    areaLabel: string;
    areaPlaceholder: string;
    cityLabel: string;
    cityPlaceholder: string;
    warehouseLabel: string;
    warehousePlaceholder: string;
    notesLabel: string;
    notesPlaceholder: string;
    buttonText: string;
  };
}

export interface ProductListDictionary {
  deleteButtonText: string;
  totalText: string;
  descriptionPropertyNames: ProductDescription;
}

export interface NavDictI {
  home: string;
  candles: string;
  soy: string;
  coconut: string;
  palm: string;
  createYourOwn: string;
  paymentAndDelivery: string;
  boxes: string;
}
export interface BoxI {
  id: string;
  img: string[];
  title: string;
  price: number;
  link: string;
  text: string;
  description: string;
}

type FilterT = {
    title: string;
    subtitle: string;
    up: string;
    down: string;
    cleanUp: string;
    result: string;
    category: { [key: string]: { title: string; option: string[] } };
}

export interface FilterI {
  dict: FilterT;
  className?: string;
  onModal?: () => void;
}

export interface CandlesSectionI {
  dict: {
    filter: FilterT;
  };
  candles: Promise<CandleI[]>;
}

export interface FilterTagsI {
  dict: {
    cleanFilter: string;
  };
}

export interface TabsI {
  dict: {
    tabs: {
      fullTitle: string[];
      abbreviatedTitle: string[];
    };
    filter: {
      title: string;
      subtitle: string;
      up: string;
      down: string;
      cleanUp: string;
      result: string;
      category: any;
      cleanFilter: string;
    };
  };
  lang: Locale;
}