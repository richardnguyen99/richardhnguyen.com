import * as React from "react";

import useSiteMetadata from "@hooks/useSiteMetadata";

import { OpenGraphType, SEOComponentType } from "./type";

export const SEO: SEOComponentType = ({
  title,
  description,
  pathname,
  children,
  openGraph,
}) => {
  const formattedTitle = () => {
    if (typeof title === "undefined" || title === "") return "";

    return `${title} -`;
  };

  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}/${image}`,
    url: `${siteUrl}${pathname || ""}`,
    twitterUsername,
  };

  const openGraphData: OpenGraphType = {
    title: openGraph?.title || defaultTitle,
    description: openGraph?.description || defaultDescription,
    image: `${siteUrl}${openGraph?.image || ""}`,
    type: openGraph?.type || "website",
    locale: openGraph?.locale || "en_US",
    site_name: openGraph?.site_name || defaultTitle,
    url: openGraph?.url || `${siteUrl}${pathname || ""}`,
  };

  return (
    <>
      <html lang="en-US" className="scroll-smooth" />
      <title>
        {formattedTitle()} {defaultTitle}
      </title>
      <link
        href="https://fonts.cdnfonts.com/css/league-mono"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Fanwood+Text:ital@0;1&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />

      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="author" content="Richard H. Nguyen" />

      <meta property="og:title" content={openGraphData.title} />
      <meta property="og:url" content={openGraphData.url} />
      <meta property="og:type" content={openGraphData.type} />
      <meta property="og:locale" content={openGraphData.locale} />
      <meta property="og:description" content={openGraphData.description} />
      <meta property="og:image" content={openGraphData.image} />
      <meta property="og:site_name" content={openGraphData.site_name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />

      {children}
    </>
  );
};
