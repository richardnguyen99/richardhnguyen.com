import * as React from "react";

const TagTemplateLine: React.FC = () => {
  return (
    <svg
      width="87"
      height="485"
      viewBox="0 0 87 485"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.00026 0L2.00014 33.5188C2.00005 61.0048 12.3542 87.4821 31.0001 107.676V107.676C49.6458 127.871 60 154.348 60 181.834V301.665C60 329.451 49.6629 356.243 31.0001 376.829V376.829C12.3373 397.414 2.00022 424.207 2.00016 451.993L2.00009 485"
        stroke="url(#paint0_linear_120_10499)"
        strokeWidth="3"
      />
      <g filter="url(#filter0_dddd_120_10499)">
        <circle
          r="6.43806"
          transform="matrix(1 0 0 -1 60.4381 242.562)"
          fill="black"
        />
        <circle
          r="4.93806"
          transform="matrix(1 0 0 -1 60.4381 242.562)"
          stroke="white"
          strokeWidth="3"
        />
      </g>
      <defs>
        <filter
          id="filter0_dddd_120_10499"
          x="34"
          y="216.124"
          width="52.876"
          height="52.8762"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="7.5" />

          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.337255 0 0 0 0 0.827451 0 0 0 0 0.392157 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_120_10499"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="10" />

          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.337255 0 0 0 0 0.827451 0 0 0 0 100.592157 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_120_10499"
            result="effect2_dropShadow_120_10499"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2.5" />

          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.337255 0 0 0 0 0.827451 0 0 0 0 100.592157 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_120_10499"
            result="effect3_dropShadow_120_10499"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.337255 0 0 0 0 0.827451 0 0 0 0 100.595098 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect3_dropShadow_120_10499"
            result="effect4_dropShadow_120_10499"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect4_dropShadow_120_10499"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_120_10499"
          x1="24"
          y1="3.75962e-10"
          x2="22.5"
          y2="485"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0515742" stopColor="#0284c7" stopOpacity="0" />
          <stop offset="0.225992" stopColor="#06b6d4" />
          <stop offset="0.47249" stopColor="#06b6d4" />
          <stop offset="0.522324" stopColor="#38bdf8" />
          <stop offset="0.561417" stopColor="#06b6d4" />
          <stop offset="0.791714" stopColor="#06b6d4" />
          <stop offset="0.956186" stopColor="#0284c7" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default TagTemplateLine;
