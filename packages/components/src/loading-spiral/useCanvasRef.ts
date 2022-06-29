import { useEffect, useRef } from "react";

export const useResizedCanvasRef = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const { width, height } = container.getBoundingClientRect();
    const canvasSize = Math.max(width, height);
    canvas.setAttribute("width", `${canvasSize}`);
    canvas.setAttribute("height", `${canvasSize}`);
  }, []);

  return {
    canvasRef,
    containerRef
  };
};
