import { env } from "@/config/env";
import { Crud } from "./crud";
import { Product } from "@/@types/product";

const apiUrl = env.apiUrl as string;

const { defaultGet } = new Crud(apiUrl);

export const getProduct = () =>
  defaultGet<{ products: Product[] }>(
    "/products?page=1&rows=10&sortBy=id&orderBy=DESC"
  );
