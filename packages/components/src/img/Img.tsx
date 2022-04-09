// @ts-ignore
import classnames from "classnames";
import React, { useState } from "react";
import { ImgProps, ossProcessType } from "./types";
import { addOssWebpProcessStyle, calcDefaultImgSize, delay } from "./utils";

const emptyDataURL =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

export const Img = (props: ImgProps) => {
  const {
    src,
    className,
    renderedWidth,
    avgColor,
    thumbnailSrc,
    processType,
    size,
  } = props;
  const { width, height } = calcDefaultImgSize(
    props,
    renderedWidth,
    size === "normal" ? 0.6 : 1
  );
  const [loaded, setLoaded] = useState(false);
  const [decoded, setDecoded] = useState(false);

  const baseWrapperStyle = {
    width: "initial",
    height: "initial",
    backgroundColor: avgColor || "unset",
  };

  const dynamicWrapperStyle = loaded
    ? {
        backgroundImage: "none",
      }
    : {
        backgroundSize: "cover",
        backgroundPosition: "0% 0%",
        backgroundImage: `url(${
          thumbnailSrc
            ? thumbnailSrc
            : addOssWebpProcessStyle(src, ossProcessType.THUMBNAIL)
        })`,
      };

  const handleImgLoad = (img: HTMLImageElement) => {
    const updateFunc = async () => {
      const p = "decode" in img ? img.decode : Promise.resolve;
      try {
        await p();
      } catch (e) {}
      await delay(500);
      setDecoded(true);
      await delay(500);
      setLoaded(true);
    };

    // if (img.complete) {
    //   updateFunc().then();
    //   return;
    // }

    img.onload = updateFunc;
  };

  return (
    <span
      className={classnames(
        className,
        "inline-block",
        "relative",
        "overflow-hidden",
        "leading-none",
        "align-bottom",
        "border-0"
      )}
      style={Object.assign({}, baseWrapperStyle, dynamicWrapperStyle)}
    >
      <img
        ref={(input) => {
          if (!input) {
            return;
          }

          handleImgLoad(input);
        }}
        width={width}
        height={height}
        src={addOssWebpProcessStyle(src, processType || ossProcessType.WEBP)}
        decoding="async"
        loading="lazy"
        style={{
          contentVisibility: "auto",
        }}
        className={classnames("transition-opacity", "opacity-100", {
          "opacity-0": !decoded,
        })}
      />
      <img
        src={emptyDataURL}
        className={classnames(
          "lqip-blur",
          "absolute",
          "h-full",
          "w-full",
          "transition-opacity",
          "opacity-100",
          {
            "opacity-0": decoded,
          }
        )}
        style={{ top: 0, left: 0 }}
      />
    </span>
  );
};