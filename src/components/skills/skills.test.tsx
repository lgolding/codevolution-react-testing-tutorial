import { getByRole, render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript"];

  it("renders correctly", () => {
    render(<Skills skills={skills} />);
    const skillsList = screen.getByRole("list");
    expect(skillsList).toBeInTheDocument();
  });

  it("displays all the skills", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
  });

  it("renders Log in button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", {
      name: "Log in",
    });
    expect(loginButton).toBeInTheDocument();
  });

  it("does not render the Start learning", () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startLearningButton).toBeNull();
  });
});
