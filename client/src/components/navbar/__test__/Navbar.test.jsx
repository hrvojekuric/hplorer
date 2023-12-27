import Navbar from "../Navbar";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BrowserRouter } from "react-router-dom";

describe("renders navbar component correctly", () => {
  it("navigates to home page when clicked", () => {
    render(<Navbar />, { wrapper: BrowserRouter });
    const route = screen.getByText(/hplorer/i);
    expect(route).toBeInTheDocument();
  });
});
