import Link from "next/link";
import { Button, HeaderMain, NavMain } from "./styles";
import Image from "next/image";
import MKS from "@/assets/logo/MKS.png";
import System from "@/assets/logo/Sistemas.png";
import Car from "@/assets/icons/carIcon.svg";
import CartDrawerComponent from "@/components/CartDrawer";
import { useState } from "react";
import { useProducts } from "@/hooks";
import CardsSection from "@/components/CardsSection";
import { CardContent } from "@/components/CardsSection/styles";

export default function HomePage() {
  const [openSwiper, setOpenSwiper] = useState(false);

  const { products, isLoading } = useProducts();

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  const handleButtonClick = () => {
    setOpenSwiper(!openSwiper);
  };

  return (
    <>
      <HeaderMain>
        <NavMain>
          <Link href="/">
            <Image src={MKS} alt="" priority={false} />
            <Image src={System} alt="" priority={false} />
          </Link>

          <Button onClick={handleButtonClick}>
            <Image src={Car} alt="" />
          </Button>
        </NavMain>
      </HeaderMain>
      <CartDrawerComponent
        OpenSwiper={openSwiper}
        setOpenSwiper={setOpenSwiper}
      />

      <CardContent>
        {products.map((item) => (
          <div key={String(item.id)}>
            <CardsSection
              id={item.id}
              description={item.description}
              name={item.name}
              photo={item.photo}
              price={item.price}
              brand={item.brand}
            />
          </div>
        ))}
      </CardContent>
    </>
  );
}
