export interface BoxDetailsI {
  id: string;
  images: string[];
  title: string;
  price: string;
  aroma: string[];
  components: { title: string; content: string }[];
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
  components: { title: string; content: string }[];
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
