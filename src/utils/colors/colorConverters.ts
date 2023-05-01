export function convertTo6DigitsHexaCode(colorCode: string): string {
  const red = colorCode[1];
  const green = colorCode[2];
  const blue = colorCode[3];

  return `#${red}${red}${green}${green}${blue}${blue}`;
}
