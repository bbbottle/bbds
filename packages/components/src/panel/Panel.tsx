import React, { useEffect, useState } from "react";

export type PanelProps = {
  width?: number;
  children: any;
  className?: string;
};

export const Panel = (props: PanelProps) => {
  const { className, width, children } = props;
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  const style = {
    width: width || 512,
  };

  return (
    <div
      className={`transition-all ease-in-out duration-700 ${className} ${
        show ? "shadow-panel" : "shadow-empty"
      } p-32`}
      style={style}
    >
      {children}
    </div>
  );
};
