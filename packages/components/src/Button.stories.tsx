import * as React from "react";
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const Primary = () => <Button primary>Button</Button>;
Primary.storyName = "I am the primary button";
