import {
  convertHexaToHslCode,
  convertHexaToRgbCode,
  convertNamedColorToHexaCode,
  convertTo6DigitsHexaCode,
} from "./colorCodeConverters";

const HEXA_3_DIGITS_TO_HEXA_6_DIGITS = {
  "#000": "#000000",
  "#fff": "#ffffff",
  "#fc9": "#ffcc99",
  "#0c3": "#00cc33",
};

const HEXA_3_DIGITS_TO_RGB = {
  "#000": "rgb(0, 0, 0)",
  "#fff": "rgb(255, 255, 255)",
  "#fc9": "rgb(255, 204, 153)",
  "#0c3": "rgb(0, 204, 51)",
};

const HEXA_6_DIGITS_TO_RGB = {
  "#000000": "rgb(0, 0, 0)",
  "#ffffff": "rgb(255, 255, 255)",
  "#ffcc99": "rgb(255, 204, 153)",
  "#00cc33": "rgb(0, 204, 51)",
};

const HEXA_6_DIGITS_TO_HSL = {
  "#000000": "hsl(0, 0%, 0%)",
  "#ffffff": "hsl(0, 0%, 100%)",
  "#ffcc99": "hsl(30, 100%, 80%)",
  "#00cc33": "hsl(135, 100%, 40%)",
};

const NAMED_COLORS_TO_HEXA = {
  black: "#000000",
  Blue: "#0000ff",
  green: "#008000",
  mediumspringgreen: "#00fa9a",
  mediumTurquoise: "#48d1cc",
  MediumVioletRed: "#c71585",
  Purple: "#800080",
  red: "#ff0000",
  White: "#ffffff",
};

describe("GIVEN a 3 digits hexadecimal color code", () => {
  describe("WHEN using convertTo6DigitsHexaCode()", () => {
    test("THEN it can be converted as a 6 digits hexadecimal color code", () => {
      for (let color in HEXA_3_DIGITS_TO_HEXA_6_DIGITS) {
        expect(convertTo6DigitsHexaCode(color)).toBe(
          HEXA_3_DIGITS_TO_HEXA_6_DIGITS[color]
        );
      }
    });
  });

  describe("WHEN using convertHexaToRgbCode()", () => {
    test("THEN it can be converted as a RGB color code", () => {
      for (let color in HEXA_3_DIGITS_TO_RGB) {
        expect(convertHexaToRgbCode(color)).toBe(HEXA_3_DIGITS_TO_RGB[color]);
      }
    });
  });
});

describe("GIVEN a 6 digits hexadecimal color code", () => {
  describe("WHEN using convertHexaToHslCode()", () => {
    test("THEN it can be converted as a HSL color code", () => {
      for (let color in HEXA_6_DIGITS_TO_HSL) {
        expect(convertHexaToHslCode(color)).toBe(HEXA_6_DIGITS_TO_HSL[color]);
      }
    });
  });

  describe("WHEN using convertHexaToRgbCode()", () => {
    test("THEN it can be converted as a RGB color code", () => {
      for (let color in HEXA_6_DIGITS_TO_RGB) {
        expect(convertHexaToRgbCode(color)).toBe(HEXA_6_DIGITS_TO_RGB[color]);
      }
    });
  });
});

describe("GIVEN a named CSS color", () => {
  describe("WHEN using convertNamedColorToHexaCode()", () => {
    test("THEN it can be converted as a 6 digits hexadecimal color code", () => {
      for (let color in NAMED_COLORS_TO_HEXA) {
        expect(convertNamedColorToHexaCode(color)).toBe(
          NAMED_COLORS_TO_HEXA[color]
        );
      }
    });
  });
});
