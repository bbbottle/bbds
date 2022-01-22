import React from "react";
import { HashRouter as Router } from "react-router-dom";

import { Breadcrumb, BreadcrumbProps } from "./Breadcrumb";

export default {
  title: "Breadcrumb",
  component: Breadcrumb,
};

const paths = [
  {
    name: "~",
    path: "/",
  },
  {
    name: "ext",
    path: "/ext",
  },
  {
    name: "txt",
  },
];

const pathsWithCn = [
  {
    name: "~",
    path: "/",
  },
  {
    name: "ext",
    path: "/ext",
  },
  {
    name: "txt",
    path: "/txt",
  },
  {
    name: "与或非禁区",
  },
];

const Template = (args: BreadcrumbProps) => (
  <Router>
    <Breadcrumb {...args} />
  </Router>
);

export const Default = Template.bind({});
// @ts-ignore
Default.args = { paths };

export const WithChineseWords = Template.bind({});
// @ts-ignore
WithChineseWords.args = { paths: pathsWithCn };
