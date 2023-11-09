import { useState } from "react";
import {
  CartContent,
  CartHeaderContent,
  Container,
  EndCartContent,
} from "./styles";
import { products } from "./data";
import {
  CommonCartCard,
  CommonCartNameProduct,
  CommonCartPrice,
} from "@/styles/Commons";
import Image from "next/image";

interface Swiper {
  OpenSwiper: boolean;
  setOpenSwiper: (open: boolean) => void;
}

export default function CartDrawerComponent({
  OpenSwiper,
  setOpenSwiper,
}: Swiper) {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const handleCloseClick = () => {
    setOpenSwiper(false);
  };
  return (
    <>
      {OpenSwiper ? (
        <Container>
          <CartHeaderContent>
            <p>
              Carrinho <br />
              de compras
            </p>
            <button type="button" onClick={handleCloseClick}>
              <span>X</span>
            </button>
          </CartHeaderContent>

          <CartContent>
            {products.map((item) => (
              <>
                <CommonCartCard>
                  <Image src={item.img} alt="" />
                  <CommonCartNameProduct>{item.name}</CommonCartNameProduct>
                  <div className="count">
                    <button onClick={increment}>+</button>
                    <p>{count}</p>
                    <button onClick={decrement}>-</button>
                  </div>
                  <CommonCartPrice>R$ {item.price}</CommonCartPrice>
                </CommonCartCard>
              </>
            ))}
          </CartContent>

          <EndCartContent>Finalizar Compra</EndCartContent>
        </Container>
      ) : null}
    </>
  );
}
