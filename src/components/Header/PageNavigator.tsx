import * as React from "react";
import { Link } from "gatsby";

import Brand from "@components/Brand/Brand";
import Item from "./Item";

/**
 * Page Navigator is a part of the <Header /> component.
 *
 * The purpose of this component is to group and define the layout for header
 * items. The items are rendered by `<Item />`.
 *
 * @returns React.FC
 */
const PageNavigator: React.FC = () => {
  return (
    <div
      id="header-page-navigator"
      className="flex-grow-[2] flex items-center mr-6"
    >
      <Link to="/" className="flex items-center h-16">
        <div className="w-14 h-14 p-2 rounded-full dark:hover:bg-slate-800 flex items-center justify-center">
          <Brand />
        </div>
      </Link>
      <div className="hidden md:flex">
        <Item id="header-page-posts-link" to="/posts" name="Posts" />

        <Item id="header-page-categories-link" to="/tags" name="Tags" />
        <Item id="header-page-about-link" to="/about" name="About" />
      </div>
    </div>
  );
};

export default PageNavigator;
