import * as React from "react";
import clsx from "classnames";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { SEO } from "@components/SEO";

const CategoryPage: React.FC = () => {
  const data = useStaticQuery<Queries.PostsQuery>(query);
  const posts = data.allMdx.edges;

  const filterPosts = (
    _posts: Queries.PostsQuery["allMdx"]["edges"],
    tag: string
  ) => {
    return _posts.filter((post) => {
      return post.node.frontmatter.tags.includes(tag);
    });
  };

  const tagFilteredPosts = React.useMemo(
    () => [
      { tag: "c++", posts: filterPosts(posts, "c++") },
      { tag: "c", posts: filterPosts(posts, "c") },
    ],
    [posts]
  );

  return (
    <div className="relative scroll-smooth overflow-x-hidden">
      <div className="flex flex-col justify-between">
        <div className="flex w-full">
          <div
            className={clsx(
              "relative flex justify-center",
              "min-h-[276px] h-full w-full"
            )}
          >
            <div className="absolute top-0 left-0 h-full w-full">
              <div
                className={clsx(
                  "absolute top-1/2 left-1/2 h-[300px] w-[1020px]",
                  "-translate-x-1/2 -translate-y-3/4 rounded-[100%]",
                  "opacity-70 blur-[60px]",
                  "bg-zinc-300 dark:bg-[rgb(29,49,54)]"
                )}
              />
              <div
                style={{ backgroundSize: "20px 20px" }}
                className={clsx(
                  "absolute top-0 left-0 h-full w-full opacity-10",
                  "bg-[linear-gradient(to_top,#000_0%,transparent_5%),linear-gradient(to_left,#000_0%,transparent_5%)]",
                  "dark:bg-[linear-gradient(to_top,#FFF_0%,transparent_5%),linear-gradient(to_left,#FFF_0%,transparent_5%)]"
                )}
              />
              <div
                className={clsx(
                  "absolute bottom-0 left-0 h-[80px] w-full",
                  "bg-[linear-gradient(rgba(255,255,255,0),rgba(248, 250, 252, 1)] dark:bg-[linear-gradient(rgba(0,0,0,0),#0B1416)]"
                )}
              />
            </div>
            <div
              className={clsx(
                "w-full flex items-center justify-center",
                "z-10 px-6 md:px-10",
                "md:max-w-3xl lg:max-w-4xl xl:max-w-6xl"
              )}
            >
              <h1
                className={clsx(
                  "font-black uppercase tracking-tight",
                  "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                )}
              >
                Your favorite tech stack
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col gap-12 -mt-4 z-10">
        {tagFilteredPosts.map((tagFilteredPost, _i) => (
          <div
            key={tagFilteredPost.tag}
            id={tagFilteredPost.tag}
            className="px-6 md:mx-auto md:max-w-3xl md:px-10 lg:max-w-4xl xl:max-w-6xl w-full"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <h3
                  className={clsx(
                    "text-xl md:text-2xl lg:text-4xl",
                    "font-black"
                  )}
                >
                  {tagFilteredPost.tag.toUpperCase()}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {tagFilteredPost.posts.length} posts
                </span>
              </div>
              <Link
                to="/tags/c++"
                className={clsx(
                  "text-xl md:text-2xl lg:text-4xl",
                  "font-black"
                )}
              >
                More
              </Link>
            </div>
            <div
              className={clsx(
                "w-full grid gap-4",
                "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              )}
            >
              {tagFilteredPost.posts.slice(0, 6).map((post, i) => (
                <Link
                  key={i}
                  to={post.node.fields.slug}
                  className={clsx(
                    "group relative overflow-hidden rounded-lg",
                    "w-full",
                    "bg-slate-100 dark:bg-[rgb(19,28,30)]",
                    "shadow-lg  shadow-slate-300 hover:shadow-slate-400",
                    "dark:shadow-none dark:border transition-shadow",
                    "dark:border-[rgb(46,55,57)] dark:hover:border-[rgb(76,85,87)]"
                  )}
                >
                  <div className="relative">
                    <GatsbyImage
                      className="w-full h-full max-h-[250px] md:max-h-[205px] object-cover"
                      imgClassName="hover:scale-105 !transition-all duration-300 ease-in-out"
                      image={
                        post.node.frontmatter.thumbnail.childImageSharp
                          .gatsbyImageData
                      }
                      alt={post.node.frontmatter.title}
                    />
                  </div>
                  <div className="flex justify-start flex-col p-4 ">
                    <h3
                      className={clsx(
                        "text-xl md:text-2xl lg:text-3xl",
                        "font-bold hover:underline underline-offset-4"
                      )}
                    >
                      {post.node.frontmatter.title}
                    </h3>
                    <h5 className="text-slate-400 dark:text-slate-600 mt-4">
                      Published on: {post.node.frontmatter.created}
                    </h5>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Head = () => (
  <SEO
    title="Tags"
    pathname="/tags"
    description="Explore all the tags on the blog"
    openGraph={{
      title: "Tags",
      description: "Explore all the tags on the blog",
      url: "https://www.richardhnguyen.com/tags/",
    }}
  />
);

export default CategoryPage;

export const query = graphql`
  query Posts {
    allMdx(
      filter: { frontmatter: { published: { eq: true } } }
      sort: { frontmatter: { created: DESC } }
    ) {
      edges {
        node {
          id

          fields {
            slug
          }

          frontmatter {
            title
            created(formatString: "MMMM DD, YYYY")
            tags
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;
