import { convertTo6DigitsHexaCode } from "./colorConverters";

const HEXA_3_DIGITS_TO_HAX_6_DIGITS = {
  "#000": "#000000",
  "#fff": "#ffffff",
  "#fc9": "#ffcc99",
  "#0c3": "#00cc33",
};

describe("GIVEN a 3 digits hexadecimal color code", () => {
  describe("WHEN using convertTo6DigitsHexaCode()", () => {
    test("THEN it can be converted in a 6 digits hexadecimal color code", () => {
      for (let color in HEXA_3_DIGITS_TO_HAX_6_DIGITS) {
        expect(convertTo6DigitsHexaCode(color)).toBe(
          HEXA_3_DIGITS_TO_HAX_6_DIGITS[color]
        );
      }
    });
  });
});
