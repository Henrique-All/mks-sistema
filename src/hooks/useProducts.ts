import { ProductContext } from "@/context";
import { useContext } from "react";

export const useProducts = () => useContext(ProductContext);
