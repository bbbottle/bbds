import React from "react";

import { SkeletonColor, Skeleton, SkeletonProps } from "./Seleton";

export default {
  title: "Skeleton",
  component: Skeleton,
  argTypes: {
    bgColor: {
      options: [SkeletonColor.RED, SkeletonColor.BLUE, SkeletonColor.GRAY],
      defaultValue: SkeletonColor.BLUE,
    },
    width: {
      defaultValue: 60,
    },
    height: {
      defaultValue: 24,
    },
  },
};

export const Default = (props: SkeletonProps) => <Skeleton {...props} />;
