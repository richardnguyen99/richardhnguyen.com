/**
 * A React component for displaying the brand in Navbar component.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */
import * as React from "react";

import { StyledNavbarSvg } from "./style";

const Svg = () => (
  <StyledNavbarSvg
    viewBox="0 0 261 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_8_2)">
      <path
        d="M57.125 22V4.54545H64.6591C65.9545 4.54545 67.0881 4.78125 68.0597 5.25284C69.0313 5.72443 69.7869 6.40341 70.3267 7.28977C70.8665 8.17614 71.1364 9.23864 71.1364 10.4773C71.1364 11.7273 70.858 12.7812 70.3011 13.6392C69.75 14.4972 68.9744 15.1449 67.9744 15.5824C66.9801 16.0199 65.8182 16.2386 64.4886 16.2386H59.9886V12.5568H63.5341C64.0909 12.5568 64.5653 12.4886 64.9574 12.3523C65.3551 12.2102 65.6591 11.9858 65.8693 11.679C66.0852 11.3722 66.1932 10.9716 66.1932 10.4773C66.1932 9.97727 66.0852 9.57102 65.8693 9.25852C65.6591 8.94034 65.3551 8.70739 64.9574 8.55966C64.5653 8.40625 64.0909 8.32954 63.5341 8.32954H61.8636V22H57.125ZM67.3523 13.9886L71.7159 22H66.5682L62.3068 13.9886H67.3523ZM72.0244 22V8.90909H76.729V22H72.0244ZM74.3767 7.54545C73.7403 7.54545 73.1949 7.33523 72.7403 6.91477C72.2858 6.49432 72.0585 5.98864 72.0585 5.39773C72.0585 4.80682 72.2858 4.30114 72.7403 3.88068C73.1949 3.46023 73.7403 3.25 74.3767 3.25C75.0188 3.25 75.5642 3.46023 76.0131 3.88068C76.4676 4.30114 76.6949 4.80682 76.6949 5.39773C76.6949 5.98864 76.4676 6.49432 76.0131 6.91477C75.5642 7.33523 75.0188 7.54545 74.3767 7.54545ZM84.2328 22.2386C82.8124 22.2386 81.5964 21.9574 80.5851 21.3949C79.5737 20.8267 78.7982 20.0369 78.2584 19.0256C77.7186 18.0085 77.4487 16.8295 77.4487 15.4886C77.4487 14.1477 77.7186 12.9716 78.2584 11.9602C78.7982 10.9432 79.5737 10.1534 80.5851 9.59091C81.5964 9.02273 82.8124 8.73864 84.2328 8.73864C85.5169 8.73864 86.6277 8.97159 87.5652 9.4375C88.5084 9.89773 89.2385 10.5511 89.7555 11.3977C90.2726 12.2386 90.5339 13.2273 90.5396 14.3636H86.176C86.1135 13.6761 85.9146 13.1534 85.5794 12.7955C85.2499 12.4318 84.8237 12.25 84.301 12.25C83.8919 12.25 83.5339 12.3693 83.2271 12.608C82.9203 12.8409 82.6817 13.196 82.5112 13.6733C82.3408 14.1449 82.2555 14.7386 82.2555 15.4545C82.2555 16.1705 82.3408 16.767 82.5112 17.2443C82.6817 17.7159 82.9203 18.071 83.2271 18.3097C83.5339 18.5426 83.8919 18.6591 84.301 18.6591C84.6476 18.6591 84.9544 18.5795 85.2214 18.4205C85.4885 18.2557 85.7044 18.017 85.8692 17.7045C86.0396 17.3864 86.1419 17 86.176 16.5455H90.5396C90.5226 17.6989 90.2584 18.7045 89.747 19.5625C89.2357 20.4148 88.5112 21.0739 87.5737 21.5398C86.6419 22.0057 85.5283 22.2386 84.2328 22.2386ZM95.9852 14.6364V22H91.2807V4.54545H95.8148V11.3977H95.9511C96.2466 10.5625 96.7381 9.91193 97.4256 9.44602C98.1131 8.97443 98.9398 8.73864 99.9057 8.73864C100.832 8.73864 101.636 8.94886 102.318 9.36932C103.005 9.78977 103.536 10.3693 103.911 11.108C104.292 11.8466 104.48 12.6932 104.474 13.6477V22H99.7693V14.6364C99.775 13.9886 99.6131 13.4801 99.2835 13.1108C98.9597 12.7415 98.4966 12.5568 97.8943 12.5568C97.5136 12.5568 97.1784 12.642 96.8886 12.8125C96.6045 12.9773 96.383 13.2159 96.2239 13.5284C96.0705 13.8352 95.9909 14.2045 95.9852 14.6364ZM109.244 22.2045C108.409 22.2045 107.67 22.0682 107.028 21.7955C106.392 21.517 105.892 21.0966 105.528 20.5341C105.164 19.9716 104.983 19.2557 104.983 18.3864C104.983 17.6705 105.105 17.0597 105.349 16.554C105.593 16.0426 105.934 15.625 106.372 15.3011C106.809 14.9773 107.318 14.7301 107.897 14.5597C108.483 14.3892 109.113 14.2784 109.789 14.2273C110.522 14.1705 111.111 14.1023 111.554 14.0227C112.003 13.9375 112.326 13.821 112.525 13.6733C112.724 13.5199 112.824 13.3182 112.824 13.0682V13.0341C112.824 12.6932 112.693 12.4318 112.432 12.25C112.17 12.0682 111.835 11.9773 111.426 11.9773C110.977 11.9773 110.611 12.0767 110.326 12.2756C110.048 12.4687 109.88 12.767 109.824 13.1705H105.494C105.551 12.375 105.804 11.642 106.253 10.9716C106.707 10.2955 107.369 9.75568 108.238 9.35227C109.108 8.94318 110.193 8.73864 111.494 8.73864C112.432 8.73864 113.272 8.84943 114.017 9.07102C114.761 9.28693 115.395 9.59091 115.917 9.98295C116.44 10.3693 116.838 10.8239 117.111 11.3466C117.389 11.8636 117.528 12.4261 117.528 13.0341V22H113.13V20.1591H113.028C112.767 20.6477 112.449 21.0426 112.074 21.3438C111.704 21.6449 111.281 21.8636 110.804 22C110.332 22.1364 109.812 22.2045 109.244 22.2045ZM110.778 19.2386C111.136 19.2386 111.471 19.1648 111.784 19.017C112.102 18.8693 112.361 18.6562 112.559 18.3778C112.758 18.0994 112.858 17.7614 112.858 17.3636V16.2727C112.733 16.3239 112.599 16.3722 112.457 16.4176C112.321 16.4631 112.173 16.5057 112.014 16.5455C111.861 16.5852 111.696 16.6222 111.52 16.6562C111.349 16.6903 111.17 16.7216 110.983 16.75C110.619 16.8068 110.321 16.9006 110.088 17.0312C109.861 17.1562 109.69 17.3125 109.576 17.5C109.468 17.6818 109.414 17.8864 109.414 18.1136C109.414 18.4773 109.542 18.7557 109.798 18.9489C110.054 19.142 110.38 19.2386 110.778 19.2386ZM118.576 22V8.90909H123.144V11.3977H123.281C123.519 10.4773 123.897 9.80398 124.414 9.37784C124.937 8.9517 125.548 8.73864 126.246 8.73864C126.451 8.73864 126.653 8.75568 126.852 8.78977C127.056 8.81818 127.252 8.8608 127.44 8.91761V12.9318C127.207 12.8523 126.92 12.7926 126.579 12.7528C126.238 12.7131 125.945 12.6932 125.701 12.6932C125.241 12.6932 124.826 12.7983 124.457 13.0085C124.093 13.2131 123.806 13.5028 123.596 13.8778C123.386 14.2472 123.281 14.6818 123.281 15.1818V22H118.576ZM131.771 22.1705C130.839 22.1705 129.981 21.9261 129.197 21.4375C128.419 20.9489 127.794 20.2074 127.322 19.2131C126.856 18.2187 126.623 16.9659 126.623 15.4545C126.623 13.875 126.867 12.5909 127.356 11.6023C127.85 10.6136 128.487 9.8892 129.265 9.42898C130.049 8.96875 130.873 8.73864 131.737 8.73864C132.385 8.73864 132.953 8.85227 133.441 9.07954C133.93 9.30114 134.339 9.59943 134.669 9.97443C134.998 10.3437 135.248 10.75 135.419 11.1932H135.487V4.54545H140.191V22H135.521V19.8523H135.419C135.237 20.2955 134.975 20.6932 134.635 21.0455C134.299 21.392 133.89 21.6676 133.407 21.8722C132.93 22.071 132.385 22.1705 131.771 22.1705ZM133.51 18.5568C133.941 18.5568 134.311 18.4318 134.617 18.1818C134.93 17.9261 135.169 17.5682 135.333 17.108C135.504 16.642 135.589 16.0909 135.589 15.4545C135.589 14.8068 135.504 14.2528 135.333 13.7926C135.169 13.3267 134.93 12.9716 134.617 12.7273C134.311 12.4773 133.941 12.3523 133.51 12.3523C133.078 12.3523 132.708 12.4773 132.402 12.7273C132.1 12.9716 131.867 13.3267 131.703 13.7926C131.544 14.2528 131.464 14.8068 131.464 15.4545C131.464 16.1023 131.544 16.6591 131.703 17.125C131.867 17.5852 132.1 17.9403 132.402 18.1903C132.708 18.4347 133.078 18.5568 133.51 18.5568ZM144.814 22V4.54545H149.553V11.3636H155.825V4.54545H160.564V22H155.825V15.1818H149.553V22H144.814ZM164.239 22.2727C163.58 22.2727 163.015 22.0426 162.543 21.5824C162.077 21.1165 161.847 20.5511 161.853 19.8864C161.847 19.2386 162.077 18.6847 162.543 18.2244C163.015 17.7642 163.58 17.5341 164.239 17.5341C164.864 17.5341 165.415 17.7642 165.892 18.2244C166.375 18.6847 166.62 19.2386 166.625 19.8864C166.62 20.3295 166.503 20.733 166.276 21.0966C166.054 21.4545 165.765 21.7415 165.407 21.9574C165.049 22.1676 164.66 22.2727 164.239 22.2727ZM185.238 4.54545V22H181.284L174.977 12.8295H174.875V22H170.136V4.54545H174.159L180.363 13.6818H180.5V4.54545H185.238ZM192.655 27.1818C191.342 27.1818 190.217 26.9943 189.28 26.6193C188.348 26.25 187.623 25.7386 187.106 25.0852C186.595 24.4375 186.308 23.6932 186.246 22.8523H190.78C190.825 23.1307 190.939 23.3551 191.121 23.5256C191.302 23.696 191.535 23.8182 191.819 23.892C192.109 23.9716 192.433 24.0114 192.791 24.0114C193.399 24.0114 193.902 23.8636 194.3 23.5682C194.703 23.2727 194.905 22.7386 194.905 21.9659V19.75H194.768C194.598 20.1932 194.337 20.571 193.984 20.8835C193.632 21.1903 193.209 21.4261 192.714 21.5909C192.22 21.75 191.677 21.8295 191.087 21.8295C190.155 21.8295 189.297 21.6136 188.513 21.1818C187.734 20.75 187.109 20.0653 186.638 19.1278C186.172 18.1903 185.939 16.9659 185.939 15.4545C185.939 13.875 186.183 12.5909 186.672 11.6023C187.166 10.6136 187.802 9.8892 188.581 9.42898C189.365 8.96875 190.189 8.73864 191.052 8.73864C191.7 8.73864 192.268 8.85227 192.757 9.07954C193.246 9.30114 193.655 9.59943 193.984 9.97443C194.314 10.3437 194.564 10.75 194.734 11.1932H194.837V8.90909H199.541V21.9659C199.541 23.0739 199.254 24.0142 198.68 24.7869C198.112 25.5653 197.311 26.1591 196.277 26.5682C195.243 26.9773 194.035 27.1818 192.655 27.1818ZM192.825 18.4886C193.257 18.4886 193.626 18.3693 193.933 18.1307C194.246 17.8864 194.484 17.5398 194.649 17.0909C194.819 16.6364 194.905 16.0909 194.905 15.4545C194.905 14.8068 194.819 14.2528 194.649 13.7926C194.484 13.3267 194.246 12.9716 193.933 12.7273C193.626 12.4773 193.257 12.3523 192.825 12.3523C192.393 12.3523 192.024 12.4773 191.717 12.7273C191.416 12.9716 191.183 13.3267 191.018 13.7926C190.859 14.2528 190.78 14.8068 190.78 15.4545C190.78 16.1023 190.859 16.6534 191.018 17.108C191.183 17.5568 191.416 17.9006 191.717 18.1392C192.024 18.3722 192.393 18.4886 192.825 18.4886ZM209.222 16.2727V8.90909H213.927V22H209.461V19.5114H209.325C209.041 20.3466 208.543 21 207.833 21.4716C207.123 21.9375 206.279 22.1705 205.302 22.1705C204.387 22.1705 203.586 21.9602 202.899 21.5398C202.217 21.1193 201.686 20.5398 201.305 19.8011C200.93 19.0625 200.739 18.2159 200.734 17.2614V8.90909H205.438V16.2727C205.444 16.9205 205.609 17.429 205.933 17.7983C206.262 18.1676 206.722 18.3523 207.313 18.3523C207.705 18.3523 208.043 18.2699 208.328 18.1051C208.617 17.9347 208.839 17.696 208.992 17.3892C209.151 17.0767 209.228 16.7045 209.222 16.2727ZM217.983 26.9091C217.444 26.9091 216.929 26.8665 216.441 26.7812C215.952 26.7017 215.523 26.5909 215.154 26.4489L216.177 23.108C216.563 23.2443 216.915 23.3324 217.233 23.3722C217.557 23.4119 217.833 23.3892 218.06 23.304C218.293 23.2188 218.461 23.0568 218.563 22.8182L218.665 22.5795L214.063 8.90909H218.972L221.086 17.9773H221.222L223.37 8.90909H228.313L223.54 23.0909C223.302 23.8125 222.955 24.4602 222.5 25.0341C222.052 25.6136 221.461 26.071 220.728 26.4062C219.995 26.7415 219.08 26.9091 217.983 26.9091ZM234.325 22.2386C232.928 22.2386 231.723 21.9716 230.712 21.4375C229.706 20.8977 228.93 20.125 228.385 19.1193C227.845 18.108 227.575 16.8977 227.575 15.4886C227.575 14.1364 227.848 12.9545 228.393 11.9432C228.939 10.9318 229.709 10.1449 230.703 9.58239C231.697 9.01989 232.871 8.73864 234.223 8.73864C235.212 8.73864 236.107 8.89205 236.908 9.19886C237.709 9.50568 238.393 9.9517 238.962 10.5369C239.53 11.1165 239.967 11.821 240.274 12.6506C240.581 13.4801 240.734 14.4148 240.734 15.4545V16.5455H229.041V13.9545H236.405C236.399 13.5795 236.303 13.25 236.115 12.9659C235.933 12.6761 235.686 12.4517 235.374 12.2926C235.067 12.1278 234.717 12.0455 234.325 12.0455C233.945 12.0455 233.595 12.1278 233.277 12.2926C232.959 12.4517 232.703 12.6733 232.51 12.9574C232.322 13.2415 232.223 13.5739 232.212 13.9545V16.75C232.212 17.1705 232.3 17.5455 232.476 17.875C232.652 18.2045 232.905 18.4631 233.234 18.6506C233.564 18.8381 233.962 18.9318 234.428 18.9318C234.751 18.9318 235.047 18.8864 235.314 18.7955C235.587 18.7045 235.82 18.5739 236.013 18.4034C236.206 18.2273 236.348 18.017 236.439 17.7727H240.734C240.587 18.6818 240.237 19.4716 239.686 20.142C239.135 20.8068 238.405 21.3239 237.496 21.6932C236.592 22.0568 235.536 22.2386 234.325 22.2386ZM246.159 14.6364V22H241.454V8.90909H245.92V11.3977H246.056C246.34 10.5682 246.84 9.91761 247.556 9.44602C248.278 8.97443 249.119 8.73864 250.079 8.73864C251.005 8.73864 251.809 8.9517 252.491 9.37784C253.179 9.7983 253.71 10.3778 254.085 11.1165C254.465 11.8551 254.653 12.6989 254.647 13.6477V22H249.943V14.6364C249.948 13.9886 249.784 13.4801 249.448 13.1108C249.119 12.7415 248.659 12.5568 248.068 12.5568C247.681 12.5568 247.343 12.642 247.054 12.8125C246.769 12.9773 246.551 13.2159 246.397 13.5284C246.244 13.8352 246.164 14.2045 246.159 14.6364Z"
        fill="currentColor"
      />
      <path
        d="M32 2.80494H33.5C33.5 2.15929 33.0869 1.58608 32.4743 1.38191L32 2.80494ZM2 2.80494L1.52566 1.38191C0.913148 1.58608 0.5 2.15929 0.5 2.80494H2ZM17 28L16.0325 29.1463C16.5913 29.6179 17.4087 29.6179 17.9675 29.1463L17 28ZM32 25.2029L31.5257 26.6259C31.9831 26.7784 32.4859 26.7017 32.8771 26.4198C33.2682 26.1378 33.5 25.6851 33.5 25.2029H32ZM2 25.2029H0.5C0.5 25.6851 0.731781 26.1378 1.12293 26.4198C1.51408 26.7017 2.01691 26.7784 2.47433 26.6259L2 25.2029ZM7 3.5C10.4839 3.5 13.6465 4.73435 16.0325 6.74829L17.9675 4.45578C15.0459 1.98975 11.1996 0.5 7 0.5V3.5ZM17.9675 6.74829C20.3535 4.73435 23.5161 3.5 27 3.5V0.5C22.8004 0.5 18.9541 1.98975 16.0325 4.45578L17.9675 6.74829ZM27 3.5C28.5907 3.5 30.1136 3.75727 31.5257 4.22797L32.4743 1.38191C30.7586 0.810025 28.9156 0.5 27 0.5V3.5ZM2.47434 4.22797C3.88644 3.75727 5.40926 3.5 7 3.5V0.5C5.08439 0.5 3.24135 0.810025 1.52566 1.38191L2.47434 4.22797ZM7 25.898C10.4839 25.898 13.6465 27.1323 16.0325 29.1463L17.9675 26.8537C15.0459 24.3877 11.1996 22.898 7 22.898V25.898ZM17.9675 29.1463C20.3535 27.1323 23.5161 25.898 27 25.898V22.898C22.8004 22.898 18.9541 24.3877 16.0325 26.8537L17.9675 29.1463ZM27 25.898C28.5907 25.898 30.1136 26.1552 31.5257 26.6259L32.4743 23.7799C30.7586 23.208 28.9156 22.898 27 22.898V25.898ZM2.47433 26.6259C3.88644 26.1552 5.40926 25.898 7 25.898V22.898C5.08439 22.898 3.24135 23.208 1.52567 23.7799L2.47433 26.6259ZM0.5 2.80494V25.2029H3.5V2.80494H0.5ZM30.5 2.80494V25.2029H33.5V2.80494H30.5ZM15.5 5.60203V28H18.5V5.60203H15.5Z"
        fill="url(#paint0_linear_8_2)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_8_2"
        x1="17"
        y1="2"
        x2="17"
        y2="28"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#38BDF8" />
        <stop offset="1" stopColor="#2991BF" />
      </linearGradient>
      <clipPath id="clip0_8_2">
        <rect width="261" height="30" fill="white" />
      </clipPath>
    </defs>
  </StyledNavbarSvg>
);

export default Svg;