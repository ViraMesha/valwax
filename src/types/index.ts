export interface BoxDetailsI {
  id: string;
  images: string[];
  title: string;
  price: string;
  aroma: string[];
  accordionTitle: string[];
  accordionContent: string[];
  description: string;
  similar: CandleI[];
}

export interface CandleI {
  id: string;
  img: string;
  title: string;
  price: string;
  link?: string;
}

export interface CandleDetailsI {
  id: string;
  images: string[];
  title: string;
  description: string;
  price: string;
  accordionTitle: string[];
  accordionContent: string[];
  similar: CandleI[];
}

export interface CartProductI {
  id: string;
  img: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  link: string;
}
