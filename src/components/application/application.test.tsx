import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  it("renders correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      name: "Job application form",
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      name: "Section 1",
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const nameElementByLabel = screen.getByLabelText("Name");
    expect(nameElementByLabel).toBeInTheDocument();

    const nameElementByLabel2 = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameElementByLabel2).toBeInTheDocument();

    const nameElementByPlaceholderText =
      screen.getByPlaceholderText("Full name");
    expect(nameElementByPlaceholderText).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const termsElementByWrapperLabel = screen.getByLabelText(
      "I agree to the terms and conditions."
    );
    expect(termsElementByWrapperLabel).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
