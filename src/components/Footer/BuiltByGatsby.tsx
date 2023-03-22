import * as React from "react";
import { Link } from "gatsby";

const BuiltByGatsby: React.FC = () => {
  return (
    <p className="text-sm pb-4 italic">
      <span className="underline dark:text-zinc-100 dark:hover:text-white">
        richardhnguyen.com
      </span>{" "}
      is powered by{" "}
      <a
        className="hover:underline text-gatsby"
        target="_blank"
        rel="noreferrer"
        href="https://www.gatsbyjs.com/"
      >
        GatsbyJS
      </a>{" "}
      and is hosted on{" "}
      <a
        className="hover:underline text-gatsby"
        target="_blank"
        rel="noreferrer"
        href="https://www.gatsbyjs.com/dashboard"
      >
        Gatsby Cloud
      </a>
      . More info{" "}
      <Link className="font-bold hover:underline" to="/about-this-page">
        here
      </Link>
      .
    </p>
  );
};

export default BuiltByGatsby;
