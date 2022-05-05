import App from "./App";
import { screen, render, fireEvent } from "@testing-library/react";

import texts from "./texts/texts";

function addColumn(allColumns) {
  allColumns.forEach((column) => {
    const buttonElement = screen.getByText(texts.ADD_COLUMN);
    fireEvent.click(buttonElement);
    const InputElemet = screen.queryByTestId("add-column-input");
    const formElement = screen.queryByTestId("add-column-form");
    fireEvent.change(InputElemet, { target: { value: column } });
    fireEvent.submit(formElement);
  });
}

it("should create column with status of submitted column name", () => {
  render(<App />);
  addColumn(["backlog"]);
  const columnElement = screen.queryByTestId("column");
  expect(columnElement).toHaveTextContent("backlog");
});

it("should remove columns after clicking reset button", async () => {
  render(<App />);
  const resetButtonElement = screen.getByText(texts.RESET);
  const columnElements = screen.getAllByTestId("column");
  await fireEvent.click(resetButtonElement);
  setTimeout(() => {
    expect(columnElements.length).toBe(0);
  }, 100);
});

it("should have multiple columns by submitting multiple form", async () => {
  render(<App />);
  await addColumn(["sprint", "done", "doing"]);
  const columnElements = screen.getAllByTestId("column");
  expect(columnElements.length).toBe(3);
});
