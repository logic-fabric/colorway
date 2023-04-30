import { render, screen } from "@testing-library/react";

import { App } from "./App";

test("App name is rendered as main heading", async () => {
  render(<App />);
  const mainHeadingElement = screen.getByRole("heading", { level: 1 });

  expect(mainHeadingElement.textContent).toMatch(/colorway/i);
});
