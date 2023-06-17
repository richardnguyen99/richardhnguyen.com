import * as React from "react";

type Props = React.HTMLAttributes<HTMLOrSVGElement>;

const DefaultFile: React.FC<Props> = ({ ...rest }) => {
  return (
    <svg {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <title>default_file</title>
      <path
        d="M20.414,2H5V30H27V8.586ZM7,28V4H19v6h6V28Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DefaultFile;
