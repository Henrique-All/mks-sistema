// {
//   "products": [
//     {
//       "id": 1,
//       "name": "iPhone X 128 GB",
//       "brand": "Apple",
//       "description": "O Apple iPhone X é um smartphone iOS avançado e abrangente em todos os pontos de vista com algumas características excelentes",
//       "price": 2000.1
//     }
//   ],
//   "count": 1
// }

import { Product } from "@/@types/product";
import { getProduct } from "@/api";
import { FC, ReactNode, createContext } from "react";
import { useQuery } from "react-query";

type GetProductContext = {
  products: Array<Product>;
  isLoading: boolean;
};

const defaultObj: GetProductContext = {
  products: [],
  isLoading: false,
};

export const ProductContext = createContext<GetProductContext>(defaultObj);

type GetProductProviderProps = {
  children?: ReactNode;
};

export const ProductsProvider: FC<GetProductProviderProps> = ({ children }) => {
  const fetchProducts = async (): Promise<Product[]> => {
    const response = await getProduct();
    return response.products;
  };

  const { isLoading, data } = useQuery("products", fetchProducts);
  const products = data || [];

  return (
    <ProductContext.Provider
      value={{
        products,
        isLoading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
