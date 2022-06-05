/**
 * React component for layout pages
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";

import { PageLayoutPropsWithChildren } from "./type";
import RootLayout from "./RootLayout";

import Utility from "@components/Utility";
import Navbar from "@components/Navbar";
import Seo from "@components/SEO";

const PageLayout: React.FC<PageLayoutPropsWithChildren> = ({ title, children, ...rest }) => {
  return (
    <RootLayout>
      <Seo title={title} lang="en" />
      <Navbar.Wrapper>
        <Navbar>Hello</Navbar>
      </Navbar.Wrapper>
      <Utility.Container {...rest}>{children}</Utility.Container>
    </RootLayout>
  );
};

export default PageLayout;
