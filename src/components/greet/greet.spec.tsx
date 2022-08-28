import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

describe("Greet", () => {
  it("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });
  it("renders with a name", () => {
    render(<Greet name="Larry" />);
    const textElement = screen.getByText(/hello, larry/i);
    expect(textElement).toBeInTheDocument();
  });
});
