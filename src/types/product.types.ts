import { Detail } from "./types";

export type Product = {
    id: string;
    picture_url: string;
    title: string;
    quantity: number;
    details: Detail[];
    unit_price: number;
    stock: number;
    category: string;
    description: string;
  };
  