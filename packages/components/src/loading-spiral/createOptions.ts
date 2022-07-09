import { ATTR, VERTEX_SHADER, FRAGMENT_SHADER } from "./constants";
import { scaleIndex2ang, getRandom, randOpacityRgb, rgba } from "./utils";

export interface IOpt {
  multiplier: number;
  color: number[];
  spiralConstA: number;
  spiralConstB: number;
}

export const DEFAULT_OPT: IOpt = {
  multiplier: 10000,
  color: [209, 213, 219, 1],
  spiralConstA: 0.04,
  spiralConstB: 0.16,
};

export const createOptions = (opt: IOpt = DEFAULT_OPT) => {
  const { multiplier, spiralConstA, spiralConstB, color } = opt;

  const attributes = [
    {
      name: ATTR.POSITION_START,
      data: (index: number) => {
        const ang = scaleIndex2ang(multiplier)(index);
        const A = spiralConstA;
        const B = spiralConstB;

        const xPos = A * Math.pow(Math.E, B * ang) * Math.cos(ang);
        const yPos = A * Math.pow(Math.E, B * ang) * Math.sin(ang);

        return [xPos, yPos, 1];
      },
      size: 3,
    },
    {
      name: ATTR.COLOR,
      data: () => rgba(color),
      size: 3,
    },
  ];

  return {
    attributes,
    multiplier,
    vertex: VERTEX_SHADER,
    fragment: FRAGMENT_SHADER,
  };
};
