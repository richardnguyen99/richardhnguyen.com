/**
 * Gatsby Configuration API for managing plugins, site metadata and other
 * environment configurations.
 *
 * @see https://www.gatsbyjs.com/docs/
 */

import dotenv from "dotenv";
import remarkGfm from "remark-gfm";
import remarkSlug from "remark-slug";
import { dirname } from "path";
import { fileURLToPath } from "url";

import rehypeMetadataCodeblock from "./plugins/rehype-metadata-codeblock.mjs";

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * @type {import("gatsby").GatsbyConfig}
 */
const config = {
  graphqlTypegen: true,
  siteMetadata: {
    title: "Richard H. Nguyen",
    titleTemplate: "Richard H. Nguyen",
    description: "Main page for Richard H. Nguyen",
    twitterUsername: "@richardmhnguyen",
    author: "@richardnguyen99",
    image: "static/brand-64.png",
    siteUrl: "https://www.richardhnguyen.com",
  },
  plugins: [
    // For working with images
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "image",
        path: `${__dirname}/static/`,
      },
    },

    // For MDX
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 768,
              quality: 100,
              linkImagesToOriginal: true,
              showCaptions: true,
              markdownCaptions: true,
            },
          },
          {
            resolve: "gatsby-remark-katex",
            options: {
              strict: "ignore",
            },
          },
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              offsetY: "100",
              icon: "<span>#</span>",
              className: "anchor",
              removeAccents: true,
              // isIconAfterHeader: true,
              elements: ["h1", "h2", "h3"],
            },
          },
        ],
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkSlug],
          rehypePlugins: [rehypeMetadataCodeblock],
        },
      },
    },

    // For data json
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/data`,
      },
    },

    // For TailwindCSS
    "gatsby-plugin-postcss",

    // For React and SVG
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },

    // For connecting with Github Source GraphQL
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        // HTTP headers
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        // Additional options to pass to node-fetch
        fetchOptions: {},
      },
    },

    // For interact with Gatsby Cloud functions
    "gatsby-plugin-gatsby-cloud",

    // For web app manifest
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Richard H Nguyen's blog",
        short_name: "richardhnguyen.com",
        lang: "en",
        start_url: "/",
        background_color: "#0B1416",
        display: "standalone",
        crossOrigin: "use-credentials",
        icon: "static/brand-64.png",
        icons: [
          {
            src: "/static/brand-16.png",
            sizes: "16x16",
            type: "image/png",
          },
          {
            src: "/static/brand-32.png",
            sizes: "32x32",
            type: "image/png",
          },
          {
            src: "/static/brand-64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "/static/brand-96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "/static/brand-128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "/static/brand-256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "/static/brand-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },

    // For SEO and sitemap
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `#graphql
          {
            allSitePage {
              nodes {
                path
              }
            }

          }
        `,
        resolveSiteUrl: () => "https://www.richardhnguyen.com",
        resolvePages: ({
          allSitePage: { nodes: allPages },
        }) => {
          return allPages;
        },
        serialize: ({ path }) => {
          return {
            url: path,
            changefreq: "daily",
            priority: 0.7,
          };
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.richardhnguyen.com",
        sitemap: "https://www.richardhnguyen.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },

    // For Google Analytics
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "G-1WSKJFCD4F"
        ],

        gtagConfig: {
          optimize_id: "GTM-TFZDTRRT",
          anonymize_ip: true,
          cookie_expires: 0,
        },

        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          origin: "richardhnguyen.com",
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
    },

    // For creating an RSSS feed
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  description: node.fields.excerpt,
                  date: node.frontmatter.created,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.body }],
                });
              });
            },
            query: `#graphql
              query {
                allMdx(sort: { frontmatter: { created: DESC }}) {
                  nodes {
                    body
                    excerpt

                    fields {
                      excerpt
                      slug
                    }

                    frontmatter {
                      title
                      created
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Your Site's RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^/posts/",
            // optional configuration to specify external rss feed, such as feedburner
            link: "https://feeds.feedburner.com/gatsby/blog",
          },
        ],
      },
    },
  ],
};

export default config;
