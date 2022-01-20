// @ts-ignore
import classNames from "classnames";
import React from "react";

export type ArticleProps = {
  title: string;
  className?: string;
  content?: any;
  children: any;
};

export const Article = (props: ArticleProps) => {
  const { title, content, children, className } = props;
  return (
    <div className={classNames("article", className)}>
      <div className="text-[2.25rem]">{title}</div>
      <hr className="my-64 border-gray-200" />
      <div className="text-gray-700">{children || content}</div>
    </div>
  );
};
