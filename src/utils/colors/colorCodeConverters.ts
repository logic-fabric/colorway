import { NAMED_CSS_COLORS } from "./constants.ts";

export function convertHexaToHslCode(colorCode: string): string {
  if (colorCode.length === 4) {
    colorCode = convertTo6DigitsHexaCode(colorCode);
  }

  const hexaRed = colorCode.slice(1, 3);
  const hexaGreen = colorCode.slice(3, 5);
  const hexaBlue = colorCode.slice(5);

  const redRatio = parseInt(hexaRed, 16) / 255;
  const greenRatio = parseInt(hexaGreen, 16) / 255;
  const blueRatio = parseInt(hexaBlue, 16) / 255;

  const maxRatio = Math.max(redRatio, greenRatio, blueRatio);
  const minRatio = Math.min(redRatio, greenRatio, blueRatio);
  const ratioDelta = maxRatio - minRatio;

  let hue;
  if (ratioDelta === 0) {
    hue = 0;
  } else if (maxRatio === redRatio) {
    hue = 60 * ((Math.abs(greenRatio - blueRatio) / ratioDelta) % 6);
  } else if (maxRatio === greenRatio) {
    hue = 60 * ((2 + Math.abs(blueRatio - redRatio) / ratioDelta) % 6);
  } else {
    hue = 60 * ((4 + Math.abs(redRatio - blueRatio) / ratioDelta) % 6);
  }

  const luminosity = (maxRatio + minRatio) / 2;

  let saturation;
  if (ratioDelta === 0) {
    saturation = 0;
  } else {
    saturation = ratioDelta / (1 - Math.abs(2 * luminosity - 1));
  }

  return `hsl(${Math.round(hue)}, ${Math.round(
    100 * saturation
  )}%, ${Math.round(100 * luminosity)}%)`;
}

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
