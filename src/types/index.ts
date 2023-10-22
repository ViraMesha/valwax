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
