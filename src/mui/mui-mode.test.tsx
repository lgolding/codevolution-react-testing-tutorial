import { render, screen } from "@testing-library/react";
import AppProviders from "../providers/app-providers";
import MuiMode from "./mui-mode";

describe("MuiMode", () => {
  it("renders text correctly", () => {
    render(<MuiMode />, {
      wrapper: AppProviders,
    });
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
