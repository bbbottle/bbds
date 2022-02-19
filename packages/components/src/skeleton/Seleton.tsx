// @ts-ignore
import classNames from "classnames";
import React from "react";

export enum SkeletonColor {
  BLUE = "blue",
  RED = "red",
  GRAY = "gray",
}

const COLOR_MAPPING = {
  [SkeletonColor.BLUE]: "bg-blue-100",
  [SkeletonColor.RED]: "bg-red-100",
  [SkeletonColor.GRAY]: "bg-gray-100",
};

export type SkeletonProps = {
  width?: number;
  height?: number;
  bgColor?: SkeletonColor;
};

export const Skeleton = (props: SkeletonProps) => {
  const { bgColor = SkeletonColor.GRAY, width = 26, height = 24 } = props;

  return (
    <div
      className={classNames(COLOR_MAPPING[bgColor], "animate-pulse", "rounded")}
      style={{ width, height }}
    />
  );
};
