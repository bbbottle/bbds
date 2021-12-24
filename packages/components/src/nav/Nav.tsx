import React from "react";
import { Breadcrumb, PathObj } from "../breadcrumb/Breadcrumb";
import { Logo } from "../logo/Logo";

export type NavProps = {
  paths: PathObj[];
  className?: string;
};

export const Nav = (props: NavProps) => {
  return (
    <div className={`p-8 w-full flex items-center ${props.className}`}>
      <Logo className="mr-8" />
      <Breadcrumb paths={props.paths} />
    </div>
  );
};
