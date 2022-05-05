import AddColumnForm from "./AddColumnForm";
import { render, screen, fireEvent } from "@testing-library/react";

import texts from "../../texts/texts";

it("should have a button to add new column", () => {
  render(<AddColumnForm />);
  const buttonElement = screen.getByText(texts.ADD_COLUMN);
  expect(buttonElement).toBeInTheDocument();
});

it("should show input remove button after clicking add column button", () => {
  render(<AddColumnForm />);
  const buttonElement = screen.getByText(texts.ADD_COLUMN);
  fireEvent.click(buttonElement);
  const inputElement = screen.queryByTestId("add-column-input");
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).not.toBeInTheDocument();
});
