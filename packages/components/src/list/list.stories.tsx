import { HashRouter as Router } from "react-router-dom";
import React from "react";
import { List } from "./list";
import { Link } from "../link/Link";

export default {
  title: "List",
  component: List,
};

export const Default = () => {
  return <List items={["foo", "bar", "baz"]} itemRenderer={(n) => n} />;
};

export const HorizontalList = () => {
  return (
    <List items={["foo", "bar", "baz"]} itemRenderer={(n) => n} horizontal />
  );
};

export const LinkList = () => {
  const ExtensionsList = [
    {
      path: "txt",
      name: "txt",
    },
    {
      path: "png",
      name: "png",
    },
    {
      path: "avi",
      name: "avi",
    },
  ];

  const renderExt = ({ name, path }: any) => {
    return (
      <Link to={path} key={name}>
        {name}
      </Link>
    );
  };

  return (
    <Router>
      <List items={ExtensionsList} itemRenderer={renderExt} />
    </Router>
  );
};
