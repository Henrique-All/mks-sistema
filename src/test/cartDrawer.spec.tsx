import React from "react";
import { render, fireEvent, act, waitFor } from "@testing-library/react";
import CartDrawerComponent from "@/components/CartDrawer";
import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const mockData = [
  {
    id: 0,
    description:
      "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.",
    name: "Headset Cloud Stinger",
    photo:
      "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
    price: 600.0,
    brand: "HyperX",
  },
];
jest.mock("../utils/storage", () => ({
  getProducts: jest.fn(() => Promise.resolve(mockData)),
  deleteProducts: jest.fn(() => Promise.resolve([])),
}));

jest.mock("react-query");

describe("CartDrawerComponent", () => {
  it("renders CartDrawerComponent with initial state", async () => {
    // await act(async () => {
    const { getByText } = render(
      <CartDrawerComponent OpenSwiper={true} setOpenSwiper={() => {}} />
    );

    await waitFor(() => {
      expect(getByText("Carrinho de compras")).toBeInTheDocument();
      expect(getByText("Total:")).toBeInTheDocument();
      expect(getByText("Finalizar Compra")).toBeInTheDocument();
    });
    // });
  });

  it("adds items from the cart", async () => {
    await act(() => {
      const queryClient = new QueryClient();
      const useQueryMock = jest.spyOn(require("react-query"), "useQuery");
      useQueryMock.mockReturnValue({
        data: mockData,
        isLoading: false,
        isError: false,
      });

      const { getByText } = render(
        <QueryClientProvider client={queryClient}>
          <CartDrawerComponent OpenSwiper={true} setOpenSwiper={() => {}} />
        </QueryClientProvider>
      );

      waitFor(() => expect(getByText("1")).toBeInTheDocument());

      waitFor(() => expect(getByText("Total: R$ 0")).toBeInTheDocument());
    });
  });

  it("deletes an item from the cart", async () => {
    let getByTest: any;
    await act(async () => {
      const { getByText } = render(
        <CartDrawerComponent OpenSwiper={true} setOpenSwiper={() => {}} />
      );

      getByTest = getByText;
    });
    const comprarButton = getByTest("X");

    await act(async () => {
      fireEvent.click(comprarButton);
    });
    waitFor(() => expect(getByTest("Total: R$ 0")).toBeInTheDocument());
  });
});
