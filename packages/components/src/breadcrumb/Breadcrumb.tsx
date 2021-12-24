import React from "react";
import { Link } from "../link/Link";

export type PathObj = {
  path?: string;
  name: string;
};

export type BreadcrumbProps = {
  paths: PathObj[];
};

export const Breadcrumb = (props: BreadcrumbProps) => {
  const { paths } = props;
  const PathElements = paths.map(({ path, name }, index) => {
    const slash = index === 0 ? null : <span className="text-gray-400">/</span>;
    const link = path ? (
      <Link to={path}>{name}</Link>
    ) : (
      <span className="text-gray-400">{name}</span>
    );

    return (
      <>
        {slash}
        {link}
      </>
    );
  });
  return <div className="breadcrumb">{PathElements}</div>;
};
