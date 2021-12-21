import React from "react";

import { Link, LinkColor } from "./Link";
import { HashRouter as Router } from "react-router-dom";

export default {
  title: 'Link',
  component: Link,
};

export const Default = () => <Router><Link to="/foo/bar">Foo</Link></Router>
export const External = () => <Router><Link to="https://bbki.ng" external>bbki.ng</Link></Router>
export const Gray = () => <Router><Link to="https://bbki.ng" external color={LinkColor.GRAY}>bbki.ng</Link></Router>
