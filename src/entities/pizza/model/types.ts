export type PizzaCategory = 'Meat' | 'Vegetarian' | 'Sea products' | 'Mushroom';
export type PizzaSize = 22 | 28 | 33;

export interface Pizza {
  id: number;
  name: string;
  category: PizzaCategory;
  description: string;
  sizes: PizzaSize[];
  prices: Record<PizzaSize, number>;
  imageUrl: string;
  isPopular: boolean;
}
