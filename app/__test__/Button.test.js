import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "../Components/ui/Button";
import "@testing-library/jest-dom/extend-expect";

describe("Button", () => {
  test("renders button with correct text", () => {
    const buttonText = "Click me";
    const { getByText } = render(<Button>{buttonText}</Button>);
    const button = getByText(buttonText);
    expect(button).toBeInTheDocument();
  });

  test("calls onClick handler when clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button onClick={onClickMock}>Click me</Button>);
    const button = getByText("Click me");
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });

});
