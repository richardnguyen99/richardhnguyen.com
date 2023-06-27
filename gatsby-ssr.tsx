/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * @see https://www.gatsbyjs.com/docs/ssr-apis/

 * Support for Typescript
 *
 * @see https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/#gatsby-browsertsx--gatsby-ssrtsx
 */

import * as React from "react";
import type { GatsbySSR } from "gatsby";

import ThemeProvider from "./src/components/Theme/Provider";
import RootLayout from "./src/components/Layout/Root";

export const onRenderBody: GatsbySSR["onRenderBody"] = (
  { setPostBodyComponents },
  _pluginOptions
) => {
  // Gatsby-SSR API method to add an array of components to the final DOM
  // node. See https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/#onRenderBody
  setPostBodyComponents([
    // Modal is for complex portal components such as settings and forms.
    <div key="modal" id="modal" />,

    // Menu is for medium portal components such as dropdowns.
    <div key="menu" id="menu" />,

    // Tooltip is for small portal components such as tooltips and popups.
    <div key="tooltip" id="tooltip" />,
  ]);
};

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({ element }) => {
  return (
    <ThemeProvider>
      <RootLayout>{element}</RootLayout>
    </ThemeProvider>
  );
};
