// @ts-ignore
import Phenomenon from "phenomenon";
// @ts-ignore
import classNames from "classnames";
import React, { useEffect } from "react";
import { createSettings, ISettings } from "./createSettings";
import { createOptions, DEFAULT_OPT, IOpt } from "./createOptions";
import { useResizedCanvasRef } from "./useCanvasRef";

export interface LoadingSpiralProps extends IOpt, ISettings {
  className?: "string";
}

export const LoadingSpiral = (props: LoadingSpiralProps) => {
  const { canvasRef, containerRef } = useResizedCanvasRef();
  const { className, canvas, step, ...rest } = props;

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const phenomenon = new Phenomenon({
      settings: createSettings({ canvas: canvasRef.current, step })
    });

    phenomenon.add(
      "spiral",
      createOptions(Object.assign({}, DEFAULT_OPT, rest))
    );
  }, []);

  return (
    <div
      className={classNames(
        "fixed h-full w-full overflow-hidden flex justify-center items-center",
        className
      )}
      ref={containerRef}
    >
      <canvas ref={canvasRef} />
    </div>
  );
};
