import { render, screen } from "@testing-library/react";

import { ColorBox, DEFAULT_COLOR, DEFAULT_SIZE } from "./ColorBox";

const DECLARED_COLOR = "navy";
const DECLARED_SIZE = "50px";

describe("GIVEN a ColorBox component with no passed props", () => {
  test("THEN its background color is grey, width and height are default ones AND it has no border-radius", () => {
    render(<ColorBox />);

    const colorBox = screen.getByTestId("color-box");
    const styles = getComputedStyle(colorBox);

    expect(styles.backgroundColor).toBe(DEFAULT_COLOR);
    expect(styles.width).toBe(DEFAULT_SIZE);
    expect(styles.height).toBe(DEFAULT_SIZE);
    expect(styles.borderRadius).toBe("0");
  });
});

describe("GIVEN a ColorBox component with declared color and size props", () => {
  test("THEN its background color is the declared color", () => {
    render(<ColorBox color={DECLARED_COLOR} size={DECLARED_SIZE} />);

    const colorBox = screen.getByTestId("color-box");
    const styles = getComputedStyle(colorBox);

    expect(styles.backgroundColor).toBe(DECLARED_COLOR);
  });

  test("THEN its width and height equals the declared size", () => {
    render(<ColorBox color={DECLARED_COLOR} size={DECLARED_SIZE} />);

    const colorBox = screen.getByTestId("color-box");
    const styles = getComputedStyle(colorBox);

    expect(styles.width).toBe(DECLARED_SIZE);
    expect(styles.height).toBe(DECLARED_SIZE);
  });
});

describe("GIVEN a ColorBox component declared has rounded", () => {
  test("THEN its width equals its height and its border-radius is 50%", () => {
    render(<ColorBox isRounded={true} />);

    const colorBox = screen.getByTestId("color-box");
    const styles = getComputedStyle(colorBox);

    expect(styles.width).toBe(styles.height);
    expect(styles.borderRadius).toBe("50%");
  });
});
