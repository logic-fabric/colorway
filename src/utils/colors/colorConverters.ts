import { NAMED_CSS_COLORS } from "./constants.ts";

export function convertHexaToRgbCode(colorCode: string): string {
  if (colorCode.length === 4) {
    colorCode = convertTo6DigitsHexaCode(colorCode);
  }

  const hexaRed = colorCode.slice(1, 3);
  const hexaGreen = colorCode.slice(3, 5);
  const hexaBlue = colorCode.slice(5);

  const rgbRed = parseInt(hexaRed, 16);
  const rgbGreen = parseInt(hexaGreen, 16);
  const rgbBlue = parseInt(hexaBlue, 16);

  return `rgb(${rgbRed}, ${rgbGreen}, ${rgbBlue})`;
}

export function convertNamedColorToHexaCode(color: string): string {
  return NAMED_CSS_COLORS[color.toLowerCase()];
}

export function convertTo6DigitsHexaCode(colorCode: string): string {
  const red = colorCode[1];
  const green = colorCode[2];
  const blue = colorCode[3];

  return `#${red}${red}${green}${green}${blue}${blue}`;
}
