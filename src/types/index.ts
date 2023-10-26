import { StaticImageData } from "next/image";

export interface BoxDetailsI {
  id: string;
  images: string[];
  title: string;
  price: number;
  aroma: string[];
  components: ComponentI[];
  description: string;
  similar: CandleI[];
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
}

export interface CartProductI {
  id: string;
  img: string;
  title: string;
  description?: string;
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
  capacity: parameterI;
  wax: parameterI;
  aroma: parameterI;
  wick: parameterI;
  color: parameterI;
}

export type generalI = {
  buttons: {[key: string]: string;};
  titles: {[key: string]: string;};
}

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