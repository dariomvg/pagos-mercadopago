export type Details = {
  id: number;
  title: string;
  detail: string;
};

export type Detail = {
  id: number;
  detail: string;
};

export type Product = {
  id: string;
  picture: string;
  name: string;
  details: Detail[];
  price: number;
  stock: number;
  category: string;
  description: string;
};
