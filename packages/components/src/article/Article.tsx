// @ts-ignore
import classNames from "classnames";
import React, { FunctionComponent } from "react";

export type ArticleProps = {
  title: any;
  className?: string;
  content?: any;
  children: any;
  description?: any;
};

export const Article: FunctionComponent<ArticleProps> = (props) => {
  const { title, content, children, className, description } = props;
  return (
    <div className={classNames("article", className)}>
      <div className="text-[2.25rem] leading-none">{title}</div>
      <hr className="my-64 border-gray-200" />
      {description && <div className="mb-128">{description}</div>}
      <div className="text-gray-700">{children || content}</div>
    </div>
  );
};
