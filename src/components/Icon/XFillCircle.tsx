/**
 * A React component that display a X Filled-Circle svg.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import * as React from "react";

export const XFillCircle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M2.343 13.657A8 8 0 1113.657 2.343 8 8 0 012.343 13.657zM6.03 4.97a.75.75 0 00-1.06 1.06L6.94 8 4.97 9.97a.75.75 0 101.06 1.06L8 9.06l1.97 1.97a.75.75 0 101.06-1.06L9.06 8l1.97-1.97a.75.75 0 10-1.06-1.06L8 6.94 6.03 4.97z"
    ></path>
  </svg>
);

export default XFillCircle;