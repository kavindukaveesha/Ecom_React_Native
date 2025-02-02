import { Product } from "./product";

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  products: Product[];
 }