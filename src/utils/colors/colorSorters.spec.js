import { sortHslColorCodesByHue } from "./colorSorters";

const UNORDERED_HSL_COLORS = [
  "hsl(45, 30%, 15%)",
  "hsl(0, 0%, 100%)",
  "hsl(210, 60%, 80%)",
  "hsl(15, 40%, 30%)",
];

const SORTED_BY_HUE_COLORS = [
  "hsl(0, 0%, 100%)",
  "hsl(15, 40%, 30%)",
  "hsl(45, 30%, 15%)",
  "hsl(210, 60%, 80%)",
];

describe("GIVEN an array of HSL color codes", () => {
  describe("WHEN using sortHslColorCodesByHue()", () => {
    test("THEN it sorts color codes by hue", () => {
      expect(sortHslColorCodesByHue(UNORDERED_HSL_COLORS)).toEqual(
        SORTED_BY_HUE_COLORS
      );
    });
  });
});
