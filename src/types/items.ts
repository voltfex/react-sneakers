export interface Items {
  id: number;
  imageUrl: string;
  name: string;
  price: string;
  descr: string;
  brand: string;
  category: string;
}

export interface FiltersProps {
  brand: string[];
  priceRange: { from: number; to: number };
  sizes: number[];
}
