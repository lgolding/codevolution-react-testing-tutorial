import { render, screen } from "@testing-library/react";
import React from "react";
import { text } from "stream/consumers";
import { Greet } from "./greet";

test("Greet renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});

test("Greet renders with a name", () => {
  render(<Greet name="Larry" />);
  const textElement = screen.getByText(/hello, larry/i);
  expect(textElement).toBeInTheDocument();
});
