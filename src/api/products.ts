import { env } from "@/config/env";
import { Crud } from "./crud";
import { ProductAPI } from "@/@types/product";

const apiUrl = env.apiUrl as string;

const { defaultGet } = new Crud(apiUrl);

export const getProduct = () =>
  defaultGet<ProductAPI>("products?page=1&rows=10&sortBy=id&orderBy=DESC");
