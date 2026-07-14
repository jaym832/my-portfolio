import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Javier portfolio homepage", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", {
      name: /building revenue-driving customer-facing systems at scale/i,
    })
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /view case studies/i })).toBeInTheDocument();
});
