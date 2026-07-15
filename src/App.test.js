import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Javier portfolio homepage", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", {
      name: /i turn messy workflows into software people can actually use/i,
    })
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /view case studies/i })).toBeInTheDocument();
});
