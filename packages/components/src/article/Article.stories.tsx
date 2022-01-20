import React from "react";
import { Article } from "./Article";

export default {
  title: "Article",
  component: Article,
};

export const Default = () => (
  <Article title="Foobar" className="max-w-md">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac metus
    accumsan, vehicula purus vitae, blandit enim. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Vestibulum ac metus accumsan, vehicula purus
    vitae, blandit enim. Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Vestibulum ac metus accumsan, ve
  </Article>
);
