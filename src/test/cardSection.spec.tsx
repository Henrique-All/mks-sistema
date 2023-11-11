import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardsSection from "../components/CardsSection";

// Testar componente
describe("render components", () => {
  const componentProps = (
    <CardsSection
      id={0}
      description="O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade."
      name="Headset Cloud Stinger"
      photo="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp"
      price={600.0}
      brand="HyperX"
    />
  );
  it("should render with specific elements", () => {
    const { getByText, getByAltText } = render(componentProps);

    expect(getByText("Headset Cloud Stinger")).toBeInTheDocument();
  });

  it("should render with specific image", async () => {
    const component = render(componentProps);

    const imageElement = screen.getByAltText("image");

    expect(imageElement).toBeInTheDocument();

    // Verifica se a imagem tem as dimensões esperadas
    expect(imageElement).toHaveAttribute("width", "100");
    expect(imageElement).toHaveAttribute("height", "100");
  });
  it("should render with specific title", async () => {
    const component = render(componentProps);

    const name = await component.findByTestId("name");

    expect(name.textContent).toBe("Headset Cloud Stinger");
  });
  it("should render with specific price", async () => {
    const component = render(componentProps);

    const price = await component.findByTestId("price");

    expect(price.textContent).toBe("600");
  });

  it("should render with specific title", async () => {
    const component = render(componentProps);

    const description = await component.findByTestId("description");

    expect(description.textContent).toBe(
      "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade."
    );
  });
});
