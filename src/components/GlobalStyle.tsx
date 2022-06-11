/**
 * Global styling for the project
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import { createGlobalStyle } from "styled-components";

import Mixins from "@mixins";

const GlobalStyle = createGlobalStyle`

  :root {
    --systemColor-red: rgb(255, 59, 48);
    --systemColor-orange: rgb(255, 149, 0);
    --systemColor-yellow: rgb(255, 204, 0);
    --systemColor-green: rgb(52, 199, 89);
    --systemColor-mint: rgb(0, 199, 190);
    --systemColor-teal: rgb(48, 176, 199);
    --systemColor-cyan: rgb(50, 173, 230);
    --systemColor-blue: rgb(0, 122, 255);
    --systemColor-indigo: rgb(88, 86, 214);
    --systemColor-purple: rgb(175, 82, 222);
    --systemColor-pink: rgb(255, 45, 85);
    --systemColor-brown: rgb(162, 132, 94);
    --systemColor-gray-1: rgb(142,142, 147);
    --systemColor-gray-2: rgb(174, 174, 178);
    --systemColor-gray-3: rgb(199, 199, 204);
    --systemColor-gray-4: rgb(209, 209, 214);
    --systemColor-gray-5: rgb(229, 229,234);
    --systemColor-gray-6: rgb(242, 242, 247);
    --systemColor-gray-7: rgb(250, 250, 252);
  }

  ${Mixins.Normalize};
  ${Mixins.SystemColor};

  a:hover, a:active, a:visited {
    color: inherit;
  }

  body {
    padding: 0;
    margin: 0;
  }

  html {
    line-height: 1.5;
    font-family: "Helvetica Neue","Helvetica","Arial",sans-serif;
  }
`;

export default GlobalStyle;