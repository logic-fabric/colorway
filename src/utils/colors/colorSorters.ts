export function sortHslColorCodesByHue(
  arrayToSortByHue: Array<string>
): Array<string> {
  const duplicatedArray = [...arrayToSortByHue];

  duplicatedArray.sort((color1, color2) => {
    const hue1 = parseInt(color1.split(",")[0].slice(4), 10);
    const hue2 = parseInt(color2.split(",")[0].slice(4), 10);

    if (hue1 < hue2) return -1;
    if (hue1 > hue2) return 1;
    return 0;
  });

  return duplicatedArray;
}
