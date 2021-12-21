import * as React from "react";
import { EventHandler } from "react";

export enum ButtonType {
  DANGER = 'danger',
  PRIMARY = 'primary',
  NORMAL = 'normal',
  DISABLED = 'disabled',
}

export interface ButtonProps {
  children: React.ReactNode;
  type?: ButtonType;
  onClick: EventHandler<React.MouseEvent<HTMLButtonElement>>
}

export function Button(props: ButtonProps) {
  const typeClsMap = {
    [ButtonType.DANGER]: 'text-red-500 shadow-button',
    [ButtonType.PRIMARY]: 'text-blue-500 shadow-button',
    [ButtonType.DISABLED]: 'text-gray-400 cursor-not-allowed',
    [ButtonType.NORMAL]: 'text-black shadow-button',
  };
  const { type = ButtonType.NORMAL, onClick } = props;
  return <button className={`${typeClsMap[type]} py-8 px-16`} onClick={onClick}>{props.children}</button>;
}

Button.displayName = "Button";
