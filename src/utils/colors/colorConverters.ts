export function convertHexaToRGBCode(colorCode: string): string {
  if (colorCode.length === 4) {
    colorCode = convertTo6DigitsHexaCode(colorCode);
  }

  const hexaRed = colorCode.slice(1, 3);
  const hexaGreen = colorCode.slice(3, 5);
  const hexaBlue = colorCode.slice(5);

  const RGBRed = parseInt(hexaRed, 16);
  const RGBGreen = parseInt(hexaGreen, 16);
  const RGBBlue = parseInt(hexaBlue, 16);

  return `rgb(${RGBRed}, ${RGBGreen}, ${RGBBlue})`;
}

export function convertTo6DigitsHexaCode(colorCode: string): string {
  const red = colorCode[1];
  const green = colorCode[2];
  const blue = colorCode[3];

  return `#${red}${red}${green}${green}${blue}${blue}`;
}
