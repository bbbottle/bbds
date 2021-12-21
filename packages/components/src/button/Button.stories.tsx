import * as React from "react";
import { Button, ButtonType } from "./Button";

export default {
  title: "Button",
  component: Button,
};

const onClick = console.log;

export const Default = () => <Button type={ButtonType.PRIMARY} onClick={onClick}>Button</Button>;
export const Danger = () => <Button type={ButtonType.DANGER} onClick={onClick}>Button</Button>;
export const Normal = () => <Button type={ButtonType.NORMAL} onClick={onClick}>Button</Button>;
export const Disabled = () => <Button type={ButtonType.DISABLED} onClick={onClick}>Button</Button>;
