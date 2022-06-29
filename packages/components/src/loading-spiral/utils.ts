export const scaleIndex = (multiplier: number, max: number) => (
  index: number
): number => {
  return index / (multiplier / max);
};

export const scaleIndex2ang = (multiplier: number) =>
  scaleIndex(multiplier, 360);

export const getRandom = (value: number, index = 1) => {
  return value + Math.random() * value * 0.04 * index;
};

export const rgba = (val: number[]) => {
  const [r, g, b, a] = val;

  return [r / 255, g / 255, b / 255, a];
};

export const randOpacityRgb = (val: number[]) => {
  const [r, g, b] = val;

  return rgba([r, g, b, Math.random()]);
};
