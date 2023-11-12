import { useEffect, useState } from "react";
import {
  CartContent,
  CartHeaderContent,
  Container,
  EndCartContent,
  TotalPrice,
} from "./styles";
import {
  CommonCartCard,
  CommonCartNameProduct,
  CommonCartPrice,
} from "@/styles/Commons";
import Image from "next/image";
import { deleteProducts, getProducts } from "@/utils/storage";

interface Swiper {
  OpenSwiper: boolean;
  setOpenSwiper: (open: boolean) => void;
}

export default function CartDrawerComponent({
  OpenSwiper,
  setOpenSwiper,
}: Swiper) {
  const [products, setProducts] = useState<any>([]);
  const [total, setTotal] = useState(0);
  const [countMap, setCountMap] = useState<{ [key: number]: number }>({});

  const increment = (productId: number) => {
    setCountMap((prevCountMap) => ({
      ...prevCountMap,
      [productId]: (prevCountMap[productId] || 0) + 1,
    }));
  };

  const decrement = (productId: number) => {
    if (countMap[productId] && countMap[productId] > 1) {
      setCountMap((prevCountMap) => ({
        ...prevCountMap,
        [productId]: prevCountMap[productId] - 1,
      }));
    }
  };

  const handleCloseClick = () => {
    setOpenSwiper(false);
  };

  const handleDelete = async (id: number) => {
    const response = await deleteProducts(id);
    setProducts(response);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getProducts();

        const totalPrice = response.reduce(
          (acc, item) => acc + (item.price || 0) * (countMap[item.id] || 1),
          0
        );
        setProducts(response);
        setTotal(totalPrice);

        // console.log(response);
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
      }
    }

    fetchData();
  }, [countMap, products]);

  return (
    <>
      {OpenSwiper ? (
        <Container>
          <CartHeaderContent>
            <p>Carrinho de compras</p>
            <button type="button" onClick={handleCloseClick}>
              <span>X</span>
            </button>
          </CartHeaderContent>

          <CartContent>
            {products.map((item: any) => (
              <CommonCartCard key={item.id}>
                <button
                  type="button"
                  className="close"
                  onClick={() => handleDelete(item.id)}
                >
                  F
                </button>
                <Image src={item.photo} alt="" width={40} height={40} />
                <CommonCartNameProduct>{item.name}</CommonCartNameProduct>
                <div className="price-content">
                  <div className="count">
                    <button onClick={() => decrement(item.id)}>-</button>
                    <p>{countMap[item.id] || 1}</p>
                    <button onClick={() => increment(item.id)}>+</button>
                  </div>
                  <CommonCartPrice>R$ {item.price}</CommonCartPrice>
                </div>
              </CommonCartCard>
            ))}
          </CartContent>
          <TotalPrice>
            <p>Total:</p>
            <strong>R$ {total}</strong>
          </TotalPrice>
          <EndCartContent>Finalizar Compra</EndCartContent>
        </Container>
      ) : null}
    </>
  );
}
