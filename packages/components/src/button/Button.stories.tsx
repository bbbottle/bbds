import * as React from "react";
import { Button, ButtonType } from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const Default = () => <Button type={ButtonType.PRIMARY}>Button</Button>;
export const Danger = () => <Button type={ButtonType.DANGER}>Button</Button>;
export const Normal = () => <Button type={ButtonType.NORMAL}>Button</Button>;
export const Disabled = () => <Button type={ButtonType.DISABLED}>Button</Button>;
