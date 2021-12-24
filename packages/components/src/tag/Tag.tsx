import React from "react";
import { Link, LinkColor, LinkProps } from "../link/Link";

export const Tag = (props: Pick<LinkProps, "to" | "children">) => {
  return (
    <Link {...props} color={LinkColor.GRAY}>
      <small>#{props.children}</small>
    </Link>
  );
};
