import { render, screen, fireEvent } from "@testing-library/react";
import { Counter } from "../Counter";

test("adds one click", () => {
    render(<Counter/>);

    const buttonElement = screen.getByTestId("plus-one-button");

    fireEvent.click(buttonElement);

    const textElement = screen.getByTestId("click-count");

    expect(textElement).toHaveTextContent("You clicked 1 times");
})

test("adds three click", () => {
    render(<Counter/>);

    const buttonElement = screen.getByTestId("plus-one-button");

    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);

    const textElement = screen.getByTestId("click-count");

    expect(textElement).toHaveTextContent("3");
})