export type Product = {
  id: number;
  name: string;
  brand?: string;
  description: string;
  photo: string;
  price: number;
  createdAt?: string;
  updatedAt?: string;
  count?: number;
};
export type ProductAPI = {
  products: Product[];
};
