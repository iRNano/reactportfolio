import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders key sections", () => {
  render(<App />);

  expect(screen.getByRole("heading", { name: /skills/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /projects/i })).toBeInTheDocument();
  expect(screen.getByText(/made by adrian/i)).toBeInTheDocument();
});

