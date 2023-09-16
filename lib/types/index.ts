interface SimilarBoxI {
  id: string;
  image: string;
  title: string;
  price: string;
}

export interface BoxDetailsI {
  id: string;
  images: string[];
  title: string;
  price: string;
  aroma: string[];
  components: string[];
  instruction: string;
  description: string;
  similar: SimilarBoxI[];
}
