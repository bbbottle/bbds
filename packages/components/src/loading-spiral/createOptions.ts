import { ATTR, VERTEX_SHADER, FRAGMENT_SHADER } from "./constants";
import { scaleIndex2ang, rgba } from "./utils";

export interface IOpt {
  multiplier: number;
  color: number[];
  spiralConstA: number;
  spiralConstB: number;
  offset?: number;
}

export const DEFAULT_OPT: IOpt = {
  multiplier: 10000,
  color: [209, 213, 219, 1],
  spiralConstA: 0.04,
  spiralConstB: 0.16,
  offset: -0.3,
};

export const createOptions = (opt: IOpt = DEFAULT_OPT) => {
  const {
    multiplier,
    spiralConstA,
    spiralConstB,
    color,
    offset = -1 * 0.3,
  } = opt;

  const attributes = [
    {
      name: ATTR.POSITION_START,
      data: (index: number, total: number) => {
        const percent = index / total;
        const length = 0.28;
        const radius = 0.056;
        const pi2 = Math.PI * 2;

        let x = length * Math.sin(pi2 * percent),
          y = radius * Math.cos(pi2 * 3 * percent),
          z,
          t;

        t = (percent % 0.25) / 0.25;
        t = (percent % 0.25) - (2 * (1 - t) * t * -0.0185 + t * t * 0.25);
        if (
          Math.floor(percent / 0.25) == 0 ||
          Math.floor(percent / 0.25) == 2
        ) {
          console.log("neg t");
          t *= -1;
        }
        z = radius * Math.sin(pi2 * 2 * (percent - t));

        return [x, y, z];
      },
      size: 3,
    },
    {
      name: ATTR.COLOR,
      data: () => rgba(color),
      size: 3,
    },
    {
      name: ATTR.OFFSET_Y,
      data: () => [offset],
      size: 1,
    },
  ];

  return {
    attributes,
    multiplier,
    vertex: VERTEX_SHADER,
    fragment: FRAGMENT_SHADER,
  };
};
