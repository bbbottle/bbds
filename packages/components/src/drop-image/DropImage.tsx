// @ts-ignore
import cls from "classnames";
import React, { FunctionComponent } from "react";
import { useState } from "react";
import { noop, wait } from "./utils";
import { useDropImage } from "./useDropImage";

export interface ImageDropProps<T> {
  uploader: (file: File, img: HTMLImageElement) => Promise<T>;
  onDrop?: (events: Event, file: File) => void;
  onUploadFinish?: (result: T) => void;
  waitTimeAfterFinish?: number;
  defaultBgColor?: string;
  dragOverBgColor?: string;
  dropAreaStyle?: CSSStyleDeclaration;
  placeholder?: any;
}

export const DropImage: FunctionComponent<ImageDropProps<any>> = (props) => {
  const {
    uploader,
    defaultBgColor = "#F3F4F6",
    onDrop,
    dragOverBgColor = "#EFF6FF",
    waitTimeAfterFinish = 2000,
    placeholder = "",
    onUploadFinish = noop,
    dropAreaStyle = {
      width: 300,
      height: 300,
    },
  } = props;
  const [showImagePreviewer, setShowImagePreviewer] = useState(false);
  const {
    handleDragLeave,
    handleDragOver,
    handleDrop,
    imageRef,
    imageSize,
    imageSrc,
    isDragOver,
    reset,
  } = useDropImage({
    onDrop,
    onImageLoad: async (image, file) => {
      await wait(500);
      setShowImagePreviewer(true);
      await onUploadFinish(await uploader(file, image));
      await wait(waitTimeAfterFinish);
      setShowImagePreviewer(false);
      await wait(500);
      reset();
    },
  });

  const getDropAreaStyle = () => {
    return Object.assign({}, dropAreaStyle, {
      background: isDragOver ? dragOverBgColor : defaultBgColor,
      width: imageSize.width || dropAreaStyle.width,
      height: imageSize.height || dropAreaStyle.height,
    });
  };

  return (
    <div
      className={cls(
        "transition-all items-center justify-center flex duration-200 ease-in-out",
        {
          "shadow-input": !imageSrc,
          "shadow-empty": imageSrc,
        }
      )}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={getDropAreaStyle()}
    >
      <img
        className={cls(
          "max-w-[100%]",
          "h-[auto]",
          "duration-300",
          "transition-opacity",
          "opacity-100",
          {
            "opacity-0": !showImagePreviewer,
          }
        )}
        ref={imageRef}
        src={imageSrc}
        width={imageSize.width}
        height={imageSize.height}
      />
      {!imageSrc && placeholder}
    </div>
  );
};
