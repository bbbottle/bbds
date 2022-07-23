import { ATTR, VERTEX_SHADER, FRAGMENT_SHADER } from "./constants";
import { scaleIndex2ang, rgba } from "./utils";

export interface IOpt {
  multiplier: number;
  color: number[];
  offset?: number;
  length: number;
}

export const DEFAULT_OPT: IOpt = {
  multiplier: 50000,
  color: [209, 213, 219, 1],
  offset: -0.3,
  length: 0.15,
};

export const createOptions = (opt: IOpt = DEFAULT_OPT) => {
  const { multiplier, color, length, offset = -1 * 0.3 } = opt;

  const radius = (0.028 / 0.15) * length;
  const attributes = [
    {
      name: ATTR.POSITION_START,
      data: (index: number, total: number) => {
        const percent = index / total;
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
