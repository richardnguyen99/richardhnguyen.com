import * as React from "react";
import clsx from "classnames";

import PageNavigator from "./PageNavigator";
import ToolBar from "./ToolBar";

export type Props = React.PropsWithChildren<object>;

/**
 * A standalone component that allows visitors to navigate to different pages.
 *
 * This component encapsulates all the links and functionalities so there is no
 * need to pass data or props to it. Everything is handled either by Gatsby or
 * through contexts.
 *
 * @returns React.FC
 */
const Header: React.FC<Props> = () => {
  return (
    <header
      id="global-header"
      className={clsx("duration-300 z-50", {
        "w-full fixed z-10 border-b": true, // Layout
        "bg-slate-50 dark:bg-[#0B1416] ": true, // Style
        "border-slate-300 dark:border-slate-800": true, // Border
      })}
    >
      <div
        id="header-container"
        className={clsx("px-10", {
          "md:mx-auto md:max-w-3xl md:px-10": true,
          "lg:max-w-4xl": true,
          "xl:max-w-6xl": true,
        })}
      >
        <nav id="header-flex" className="flex items-center h-full">
          <PageNavigator />
          <ToolBar />
        </nav>
      </div>
    </header>
  );
};

export default Header;
