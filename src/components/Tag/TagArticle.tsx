import * as React from "react";
import clsx from "classnames";
import { RocketIcon } from "@primer/octicons-react";
import { Link } from "gatsby";
import { useRemark } from "react-remark";

import type { TagArticleProps } from "./types";
import { GatsbyImage } from "gatsby-plugin-image";

type Props = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement> & TagArticleProps
>;

const TagArticle: React.FC<Props> = ({
  slug,
  title,
  excerpt,
  created,
  image,
  className: _className,
  ...rest
}) => {
  const [content, setContent] = useRemark();

  React.useEffect(() => {
    setContent(excerpt);
  }, [excerpt, setContent]);

  return (
    <>
      <article {...rest} className="group relative">
        <div
          className={clsx({
            "relative flex items-center z-10": true,
            "gap-4 -my-1 py-8": true,
            "bg-gray-100 dark:bg-[rgb(16,25,27)]": true,
            "rounded-xl shadow-lg drop-shadow-md": true,
            "dark:shadow-none dark:border": true,
            "shadow-gray-300 dark:border-[rgb(41,50,52)]": true,
          })}
        >
          <div className="my-4 ml-12 w-8/12 flex flex-col gap-6 h-full">
            <Link
              to={slug}
              className={clsx("relative block w-fit", {
                "bg-transparent hover:bg-gradient-70": true,
                "from-blue-500 to-cyan-400": true,
                "dark:from-sky-400 dark:to-cyan-100": true,
                "bg-clip-text": true,
                "hover:text-transparent": true,
                "after:absolute after:content-['']": true,
                "after:h-[2px] after:w-0": true,
                "hover:after:w-full": true,
                "after:bg-gradient-70": true,
                "after:from-blue-500 after:to-cyan-400": true,
                "dark:after:from-sky-400 dark:after:to-cyan-100": true,
                "after:bg-clip-content": true,
                "after:transition-[width]": true,
                "after:duration-300 after:ease-in-out": true,
              })}
            >
              <h3 className="text-3xl font-bold">{title}</h3>
            </Link>
            <div>
              <p
                className={clsx({
                  "text-lg font-semibold leading-6": true,
                  "text-slate-500 dark:text-slate-400": true,

                  // Cannot access the content rendered by react-remark
                  "[&_a]:underline": true,
                  "[&_code]:text-slate-900": true,
                  "[&_strong]:text-slate-900": true,
                  "[&_code]:dark:text-slate-200": true,
                  "[&_strong]:dark:text-slate-200": true,
                  "[&>p]:max-h-12": true,
                  "[&>p]:text-ellipsis": true,
                  "[&>p]:overflow-hidden": true,
                  "[&>p]:line-clamp-2": true,
                  "[&>p]:[box-orient:vertical]": true,
                })}
              >
                {content}
              </p>
            </div>
          </div>
          {typeof image !== "undefined" && (
            <div className="w-4/12 h-full mr-12">
              <div className="flex w-full">
                <GatsbyImage
                  alt={`${title}-thumbnail`}
                  image={image}
                  className={clsx({
                    "ml-auto object-cover": true,
                    "max-h-[120px] max-w-[calc(16/9*120px)]": true,
                  })}
                  imgClassName={clsx({
                    "hover:scale-105 duration-300": true,
                    "ease-in-out !transition-[transform,opacity]": true,
                  })}
                />
              </div>
            </div>
          )}
        </div>
      </article>
      <div className="relative flex z-10 items-center">
        <div className="w-1/12 h-full flex flex-col items-center ">
          <div
            className={clsx({
              "w-10 h-10 rounded-full": true,
              "flex items-center justify-center": true,
              "bg-slate-100 dark:bg-[rgb(26,35,37)]": true,
              "shadow-lg shadow-slate-300 dark:shadow-none": true,
              "dark:border border-[rgb(71,80,82)]": true,
            })}
          >
            <RocketIcon size={16} className="inline-block w-4 h-4" />
          </div>
        </div>
        <div className="w-5/12 text-slate-600 dark:text-slate-400">
          Published at:
          <span className="font-mono text-slate-900 dark:text-slate-200 ml-2">
            {created}
          </span>
        </div>
      </div>
    </>
  );
};

export default TagArticle;