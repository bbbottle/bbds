import React from "react";
import { HashRouter as Router } from "react-router-dom";

import { Breadcrumb } from "./Breadcrumb";

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

export const Default = () => (
  <Router>
    <Breadcrumb paths={paths} />
  </Router>
);
