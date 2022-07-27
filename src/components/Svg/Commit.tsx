/**
 * React component for Github Octicon Commit svg
 *
 * @see https://primer.style/octicons/commit-24
 */
import * as React from "react";

const CommitIcon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path
        fillRule="evenodd"
        d="M17.5 11.75a.75.75 0 01.75-.75h5a.75.75 0 010 1.5h-5a.75.75 0 01-.75-.75zm-17.5 0A.75.75 0 01.75 11h5a.75.75 0 010 1.5h-5a.75.75 0 01-.75-.75z"
      ></path>
      <path
        fillRule="evenodd"
        d="M12 16.25a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0 1.5a6 6 0 100-12 6 6 0 000 12z"
      ></path>
    </svg>
  );
};

export default CommitIcon;
