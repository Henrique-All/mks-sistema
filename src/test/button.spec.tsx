import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { CommonButton } from "@/styles/Commons";

describe("CommonButton", () => {
  it("executes onClick handler on button click", () => {
    const mockHandleSave = jest.fn();
    const { getByText } = render(
      <CommonButton onClick={mockHandleSave}>COMPRAR</CommonButton>
    );

    const comprarButton = getByText("COMPRAR");

    fireEvent.click(comprarButton);
    expect(mockHandleSave).toHaveBeenCalled();
  });
});
