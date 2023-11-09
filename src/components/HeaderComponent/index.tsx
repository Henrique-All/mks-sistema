import Link from "next/link";
import { Button, HeaderMain, NavMain } from "./styles";
import Image from "next/image";
import MKS from "../../assets/logo/MKS.png";
import System from "../../assets/logo/Sistemas.png";
import Car from "../../assets/icons/carIcon.svg";
import CartDrawerComponent from "../CartDrawer";
import { useState } from "react";

export function HeaderComponent() {
  const [openSwiper, setOpenSwiper] = useState(false);

  const handleButtonClick = () => {
    setOpenSwiper(!openSwiper); // Alterna entre verdadeiro e falso
  };

  return (
    <>
      <HeaderMain>
        <NavMain>
          <Link href="/">
            <Image src={MKS} alt="" />
            <Image src={System} alt="" />
          </Link>

          <Button onClick={handleButtonClick}>
            <Image src={Car} alt="" />
            <span>0</span>
          </Button>
        </NavMain>
      </HeaderMain>
      <CartDrawerComponent
        OpenSwiper={openSwiper}
        setOpenSwiper={setOpenSwiper}
      />
    </>
  );
}
