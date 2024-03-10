import * as React from "react";
import clsx from "classnames";
import { graphql, useStaticQuery } from "gatsby";

import ArticleTimeline from "./ArticleTimeline";
import { transformEdge } from "./util";

const Timeline: React.FC = () => {
  const {
    allMdx: { edges },
  } = useStaticQuery<Queries.ArticlesQuery>(query);

  return (
    <div
      className={clsx({
        "relative md:mx-auto md:max-w-3xl lg:max-w-4xl xl:max-w-6xl": true,
        "py-4 md:py-16 lg:py-20 xl:py-24": true,
      })}
    >
      <div
        className={clsx({
          "flex flex-col md:gap-y-10 lg:gap-y-16 md:pl-14": true,
          "md:border-l-[3px] border-slate-200 dark:border-slate-800": true,
        })}
      >
        {edges.map((edge, i) => {
          return <ArticleTimeline data={transformEdge(edge.node)} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Timeline;

export const query = graphql`
  query Articles {
    allMdx(
      sort: { frontmatter: { created: DESC } }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          id
          tableOfContents(maxDepth: 2)
          fields {
            excerpt
            slug
          }
          frontmatter {
            title
            author
            tags
            categories
            created(formatString: "MMM DD, YYYY")
            thumbnail {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  quality: 100
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  }
`;
