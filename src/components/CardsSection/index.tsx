import React from "react";
import {
  CommonButton,
  CommonCard,
  CommonCardDescription,
  CommonCardPrice,
  CommonCardTitle,
} from "../../styles/Commons";
import Image from "next/image";
import { saveProducts } from "../../utils/storage";

interface Product {
  id: number;
  name: string;
  brand?: string;
  description: string;
  photo: string;
  price: number;
  createdAt?: string;
  updatedAt?: string;
}

export default function CardsSection({
  id,
  name,
  brand,
  description,
  photo,
  price,
  createdAt,
  updatedAt,
}: Product) {
  const datas: Product = {
    id,
    name,
    brand,
    description,
    photo,
    price,
    createdAt,
    updatedAt,
  };

  const handleSave = async () => {
    const datasWithBrandAsString: Product = {
      ...datas,
      brand: datas.brand || "",
    };

    await saveProducts(datasWithBrandAsString);
  };

  return (
    <CommonCard>
      <Image
        data-testid="image"
        src={photo}
        alt="image"
        width={100}
        height={100}
      />
      <div className="title">
        <CommonCardTitle data-testid="name">{name}</CommonCardTitle>
        <CommonCardPrice data-testid="price">{price}</CommonCardPrice>
      </div>
      <CommonCardDescription data-testid="description">
        {description}
      </CommonCardDescription>
      <CommonButton onClick={handleSave}>COMPRAR</CommonButton>
    </CommonCard>
  );
}
