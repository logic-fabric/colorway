import { render, screen } from "@testing-library/react";

import { App } from "./App";

test("Renders main heading", async () => {
  render(<App />);
  const mainHeadingElement = screen.getByText(/class components/i);

  expect(mainHeadingElement).toBeInTheDocument();
});
