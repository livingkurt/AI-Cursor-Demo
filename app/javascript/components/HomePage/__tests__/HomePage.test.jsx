import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "../HomePage";

describe("HomePage", () => {
  it("renders the welcome message", () => {
    render(<HomePage />);
    expect(screen.getByText("Welcome to AI Cursor Demo")).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(<HomePage />);
    expect(
      screen.getByText(/This is a Rails app with React frontend/)
    ).toBeInTheDocument();
  });
});
