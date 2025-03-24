export type TCityInfo = {
  id: number;
  name: string;
  country: string;
  population: number;
  image: string;
  tags: { id: number; name: string }[];
  isFavorite: boolean;
  description: string;
};
