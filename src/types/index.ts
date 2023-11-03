import { StaticImageData } from 'next/image';

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
};

export interface ConfiguratorSectionI {
  dict: configuratorSectionI;
  dictGeneral: generalI;
}

export interface ParameterI {
  dict: parameterI;
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
    buttonText: string;
  };
}

export interface ProductListDictionary {
  deleteButtonText: string;
  totalText: string;
  descriptionPropertyNames: ProductDescription;
}
