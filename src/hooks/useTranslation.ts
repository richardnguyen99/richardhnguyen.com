/**
 * This React hook is to query page content for different locales
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Locale } from "@contexts";

const useTranslation = (page: string) => {
  const { lang } = React.useContext(Locale.Context);

  const { rawData } = useStaticQuery<Queries.UseTranslationQuery>(query);

  const simplifiedData = rawData.edges.map((edge) => ({
    name: edge.node.name,
    i18n: edge.node.childI18NJson,
  }));

  const { i18n: translations } = simplifiedData.filter(
    (i18n) => i18n.name === lang
  )[0];

  return translations.pages.filter(
    ({ page: pageName }) => pageName === page
  )[0];
};

export default useTranslation;

export const query = graphql`
  query UseTranslation {
    rawData: allFile(filter: { sourceInstanceName: { eq: "i18n" } }) {
      edges {
        node {
          name
          childI18NJson {
            pages {
              page
              title
              titleTemplate
              components {
                headline {
                  gradient
                  normal
                }
                sections {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`;
