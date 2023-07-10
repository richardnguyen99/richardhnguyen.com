import * as React from "react";
import clsx from "classnames";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { SEO } from "@components/SEO";
import ThemeContext from "@components/Theme/Context";
import HoverProjectCard from "@components/HoverProjectCard";
import { ProjectStatus } from "@components/HoverProjectCard/type";

const AboutPage: React.FC = () => {
  const { theme } = React.useContext(ThemeContext);
  const data = useStaticQuery<Queries.AboutPageQuery>(query);

  const snippetLight = data.allFile.edges.find(
    (edge) => edge.node.relativePath === "about/snippet-light.png"
  );

  const snippetDark = data.allFile.edges.find(
    (edge) => edge.node.relativePath === "about/snippet-dark.png"
  );

  const avatar = data.allFile.edges.find(
    (edge) => edge.node.relativePath === "about/avatar.jpg"
  );

  const metaLight = data.allFile.edges.find(
    (edge) => edge.node.relativePath === "about/meta-light.png"
  );

  const metaDark = data.allFile.edges.find(
    (edge) => edge.node.relativePath === "about/meta-dark.png"
  );

  const gearsim = data.allFile.edges.find(
    (edge) => edge.node.relativePath === "about/sdi-gearsim.png"
  );

  return (
    <div className="scroll-smooth relative overflow-hidden">
      <div className="absolute opacity-50 top-0 -left-[20%] md:-left-[7.5%] lg:-left-[5%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="270.11"
          height="649.9"
          overflow="visible"
        >
          <style>
            {`

        .geo-arrow {
          fill: none;
          stroke: #fff;
          stroke-width: 2;
          stroke-miterlimit: 10
        }
        `}
          </style>
          <g className="lg:animate-bounce-1 origin-bottom">
            <path
              className="geo-arrow"
              d="M135.06 142.564L267.995 275.5 135.06 408.434 2.125 275.499z"
            ></path>
          </g>
          <circle
            className="geo-arrow lg:animate-bounce-2"
            cx="194.65"
            cy="69.54"
            r="7.96"
          ></circle>
          <circle
            className="geo-arrow draw-in"
            cx="194.65"
            cy="39.5"
            r="7.96"
          ></circle>
          <circle
            className="geo-arrow item-to lg:animate-bounce-3"
            cx="194.65"
            cy="9.46"
            r="7.96"
          ></circle>
          <g className="geo-arrow  lg:animate-bounce-2">
            <path d="M181.21 619.5l13.27 27 13.27-27zM194.48 644.5v-552"></path>
          </g>
        </svg>
      </div>
      <section
        id="hero"
        className="px-6 md:mx-auto md:max-w-3xl md:px-10 lg:max-w-4xl xl:max-w-6xl min-h-[95vh] flex flex-col justify-between"
      >
        <div className="mt-[10rem]">
          <div className="text-[5vw] leading-none font-black">
            <p>i build apps,</p>
            <p>
              from <span className="font-mono">low-level</span>
            </p>
            <p>to over-engineered.</p>
          </div>
          <div className="mt-[5rem]">
            <div className="flex items-center gap-4 uppercase font-thin tracking-widest">
              <BorderLink href="#">View Projects</BorderLink>
              <BorderLink href="#">My LinkedIn</BorderLink>
            </div>
          </div>
        </div>
        <div className="relative translate-y-1/4">
          <img
            src={
              /* eslint-disable indent */
              theme === "light"
                ? snippetLight?.node.childImageSharp.gatsbyImageData.images
                    .fallback.src
                : snippetDark?.node.childImageSharp.gatsbyImageData.images
                    .fallback.src
              /* eslint-enable indent */
            }
            alt="snippet"
            className="w-full opacity-20 "
          />
          <div className="absolute bottom-0 left-0 bg-gradient-to-t w-full h-40 dark:from-[#0b1416]/100 dark:to-[#0b1416]/0 from-slate-50/100 to-slate-50/0 z-0" />
        </div>
      </section>

      <section
        id="greeting"
        className="relative px-6 md:mx-auto md:max-w-3xl md:px-10 lg:max-w-4xl xl:max-w-6xl min-h-[95vh] z-10"
      >
        <h1 className="peer relative text-[5.75vw] font-black text-black dark:text-white">
          Myself
        </h1>
        <div className="w-3/12 h-2 dark:bg-slate-50 bg-[#0b1416]" />
        <div className="flex flex-col md:flex-row gap-8 mt-10 text-lg">
          <div className="w-full md:w-8/12">
            <p>
              Hi there! I&apos;m Richard, a software engineer that loves to
              build applications end-to-end. I love to challenge myself with new
              technologies and concepts, whether it is about algorithms,
              interfaces, or system designs.
            </p>
            <p>&nbsp;</p>
            <p>
              Back in 2019, I came to the United States to pursue my bachelor of
              science degree in computer science at Seattle University.
              Fast-foward to today, I&apos;ve developed a strong passion for
              building applications.
            </p>
            <p>&nbsp;</p>
            <p>
              My main focus is to build scalable and high-perfomance
              applications with sophisticated architectures to solve pratical
              problems. I also love to build small projects and share my
              knowledge with others, like this blog!
            </p>
          </div>
          <div className="relative w-full md:w-4/12 flex items-center -mr-12">
            <div className="absolute top-0 left-0 leading-none lg:top-[-25%]">
              <h1 className="text-[10vw] font-black max-w-[10rem] max-h-[10rem] w-full">
                <p className="hyphens-auto">WO&shy;RK</p>
              </h1>
            </div>
            <div
              className={clsx("group", {
                "block relative mx-auto mt-12 md:m-0 w-[260px] md:w-full rounded-2xl bg-cyan-400 z-10":
                  true,
                "hover:outline-0 hover:-translate-x-1 hover:-translate-y-1":
                  true,
                "transition-all duration-300 ease-in-out": true,

                "before:content-[''] before:block before:absolute": true,
                "before:w-[260px] md:before:w-full before:h-full before:rounded-2xl":
                  true,
                "before:top-0 before:left-0 before:bg-cyan-400 before:mix-blend-screen":
                  true,
                "before:transition-all before:duration-300 before:ease-in-out":
                  true,

                "after:content-[''] after:block after:absolute": true,
                "after:w-[260px] md:after:w-full after:h-full after:rounded-2xl after:z-[-1]":
                  true,
                "after:transition-all after:duration-300 after:ease-in-out":
                  true,
                "after:border-2 after:border-cyan-500 after:top-4 after:left-4":
                  true,
                "hover:after:translate-x-2 hover:after:translate-y-2": true,
              })}
            >
              <GatsbyImage
                alt="avatar"
                image={avatar.node.childImageSharp.gatsbyImageData}
                className={clsx("", {
                  "overflow-hidden inline-block w-[260px] md:w-full h-full align-middle rounded-2xl":
                    true,
                  "relative duration-300 ease-in-out mix-blend-multiply": true,
                  "filter grayscale contrast-100 z-10": true,
                  "group-hover:filter-none group-hover:mix-blend-normal": true,
                })}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="Skills" className="relative w-full min-h-[90vh]">
        <div className="relative px-6 md:mx-auto md:max-w-3xl md:px-10 lg:max-w-4xl xl:max-w-6xl">
          <div className="relative w-5/12 translate-x-2/4 translate-y-2/4">
            <img
              src={
                /* eslint-disable indent */
                theme === "light"
                  ? metaLight?.node.childImageSharp.gatsbyImageData.images
                      .fallback.src
                  : metaDark?.node.childImageSharp.gatsbyImageData.images
                      .fallback.src
                /* eslint-enable indent */
              }
              alt="snippet"
              className="w-full opacity-20"
            />
            <div className="absolute bottom-0 left-0 bg-gradient-to-t w-full h-20 dark:from-[#0b1416]/100 dark:to-[#0b1416]/0 from-slate-50/100 to-slate-50/0 z-0" />
          </div>
          <h1 className="peer relative text-[5.75vw] font-black text-black dark:text-white">
            My experience
          </h1>
          <div className="relative w-5/12 h-2 dark:bg-slate-50 bg-[#0b1416]" />
          <div className="w-7/12">
            <p className="mt-10 text-lg">
              I have interest in a wide range of applications and technologies.
            </p>
            <p>&nbsp;</p>
            <p>
              Not a full-stack developer, but there is no limits for me to
              develop apps to solve problems, whether it is{" "}
              <span className="font-bold">systems</span>,{" "}
              <span className="font-bold">front-end</span>,{" "}
              <span className="font-bold">back-end</span>or
              <span className="font-bold">infrastructure</span>.
            </p>
            <p>&nbsp;</p>
            <p>Here are some of my work </p>
          </div>
          <div>
            <HoverProjectCard
              defaultImageSrc="https://images.unsplash.com/photo-1518276455915-d0dbe7b2e493?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              hoverImageSrc={
                gearsim.node.childImageSharp.gatsbyImageData.images.fallback.src
              }
              orderImageSrc="#"
              stacks={[]}
              status={ProjectStatus.DONE}
              title="PERSONAL PAGE"
            >
              Something
            </HoverProjectCard>
          </div>
        </div>
      </section>
      <section
        id="section-3"
        className="px-6 md:mx-auto md:max-w-3xl md:px-10 lg:max-w-4xl xl:max-w-6xl min-h-[90vh]"
      ></section>
      <section
        id="section-4"
        className="px-6 md:mx-auto md:max-w-3xl md:px-10 lg:max-w-4xl xl:max-w-6xl min-h-[90vh]"
      ></section>
    </div>
  );
};

export default AboutPage;

export const Head = () => <SEO title="About" />;

export const query = graphql`
  query AboutPage {
    allFile(filter: { relativeDirectory: { eq: "about" } }) {
      edges {
        node {
          id
          relativePath
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
          }
        }
      }
    }
  }
`;

const BorderLink: React.FC<
  React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>>
> = ({ href, children, ...rest }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      {...rest}
      className={clsx("", {})}
    >
      {children}
    </a>
  );
};
