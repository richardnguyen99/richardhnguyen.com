import * as React from "react";

import { SEO } from "@components/SEO";
import Construction from "@components/Layout/Construction";

const PostPage: React.FC = () => {
  return <Construction />;
};

export const Head = () => <SEO title="Posts" />;

export default PostPage;
