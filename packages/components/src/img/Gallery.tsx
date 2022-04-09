// @ts-ignore
import classnames from "classnames";
import React, { ReactElement, ReactNode } from "react";
import { RandomRowsLayout, RandomRowsLayoutProps } from "./RandomRowsLayout";
import { ImgProps } from "./types";
import { Img } from "./Img";

export interface GalleryProps
  extends Omit<
    RandomRowsLayoutProps,
    "classNames" | "cellsCount" | "cellRenderer"
  > {
  images: ImgProps[];
  children?: ReactNode;
  imageRenderer?: (Img: ReactElement) => ReactNode;
}

export const Gallery = (props: GalleryProps) => {
  const { images, children, imageRenderer = (i) => i, ...rest } = props;
  const renderImage = (index: number, isLargeImage: boolean, col: number) => {
    const image: any = images[index];
    if (!image) {
      return null;
    }

    return (
      <div
        className={classnames("mb-256", {
          "md:mr-64": col === 0,
          "md:ml-64": col !== 0,
        })}
      >
        {imageRenderer(
          <Img {...image} size={isLargeImage ? "large" : "normal"} />
        )}
      </div>
    );
  };

  return (
    <div className="w-full flex justify-center">
      <RandomRowsLayout
        classNames="mx-32 mt-128 max-w-screen-xl"
        cellsCount={images.length}
        cellRenderer={renderImage}
        {...rest}
      />
      {children}
    </div>
  );
};
