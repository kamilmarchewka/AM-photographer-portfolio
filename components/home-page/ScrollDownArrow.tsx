"use client";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";

export default function ScrollDownArrow({
  addToTimeline,
}: {
  addToTimeline: any;
}) {
  return (
    <svg
      width="435"
      height="501"
      viewBox="0 0 435 501"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=" fixed z-30 right-2 bottom-5 min-w-[18rem] w-[30vw] max-w-[25rem] h-fit mt-14"
    >
      <path
        d="M404.5 1C327 62.6667 177.5 213.2 199.5 322C227 458 360.5 428.5 410.5 366C460.5 303.5 391 147.5 221.5 240C85.9 314 22.3333 439.167 7.5 492.5L1 460.5L11 498.5C21.3333 487.167 45.6 465.2 60 468"
        className="arrow"
        stroke="black"
        strokeWidth="2"
      />
      <path
        d="M238.343 204.578L238.737 204.365C241.414 202.919 243.654 202.961 245.456 204.491L245.956 205.24L246.089 205.486C247.118 207.391 246.914 209.782 245.476 212.659C245.006 213.125 244.825 213.456 244.931 213.653C246.945 215.811 248.383 217.687 249.243 219.28L249.416 219.6C249.771 220.257 249.677 220.732 249.135 221.025C248.698 221.198 248.382 221.103 248.187 220.742L247.854 220.126C246.834 218.237 245.38 216.37 243.493 214.526C242.1 215.129 241.166 215.167 240.69 214.639L240.61 214.491C240.451 214.196 240.556 213.842 240.928 213.429L242.211 213.213L242.184 213.164C240.313 211.035 239.147 209.543 238.686 208.689C238.428 208.213 238.579 207.824 239.137 207.522C239.647 207.247 240.371 207.98 241.312 209.721L243.609 212.267C244.579 211.234 245.082 209.965 245.118 208.461C245.108 207.618 244.966 206.941 244.691 206.432L244.518 206.112C243.79 204.765 242.228 204.622 239.831 205.684L238.821 206.229C236.704 207.691 235.867 208.832 236.311 209.653L236.391 209.801C236.524 210.048 236.863 210.363 237.41 210.746C237.605 211.108 237.442 211.493 236.92 211.902C236.095 211.944 235.42 211.481 234.897 210.512C233.921 208.706 235.07 206.728 238.343 204.578Z"
        fill="black"
        className="arrow-text"
      />
      <path
        d="M257.821 203.443C258.912 203.006 259.867 203.508 260.686 204.95L260.78 205.184C261.453 206.865 261.204 208.754 260.033 210.851C261.434 211.437 263.391 211.226 265.903 210.22C266.333 210.188 266.631 210.381 266.798 210.797C266.985 211.265 266.776 211.62 266.169 211.863C264.471 212.543 262.513 212.824 260.294 212.708L260.596 213.461C261.311 215.246 261.287 216.291 260.524 216.597C259.987 216.812 259.306 215.888 258.48 213.826L257.668 211.799L257.299 211.102L257.147 210.197L255.966 207.775L255.924 207.671C255.737 207.203 255.851 206.785 256.267 206.418C256.402 204.796 256.919 203.804 257.821 203.443ZM258.801 209.656C259.303 209.455 259.505 208.328 259.408 206.276L258.96 205.158L258.513 204.945L258.279 205.039C257.724 205.864 257.898 207.403 258.801 209.656Z"
        fill="black"
        className="arrow-text"
      />
      <path
        d="M275.194 200.152C275.535 200.053 275.858 200.232 276.164 200.688C275.734 205.202 275.536 207.687 275.57 208.143L275.701 208.193L276.535 207.953C277.396 207.705 278.458 206.973 279.719 205.755C280.222 205.61 280.563 205.852 280.744 206.48C280.095 208.007 278.704 209.077 276.569 209.691L275.285 209.886C274.949 210.274 274.701 210.491 274.54 210.537C273.983 210.697 273.558 210.266 273.264 209.243C273.202 209.028 273.412 208.608 273.893 207.984L274.325 202.499L274.294 202.392L274.214 202.415L271.98 203.261C271.334 203.311 270.942 203.094 270.802 202.609C270.673 202.161 270.86 201.864 271.362 201.72C272.331 201.441 273.608 200.918 275.194 200.152Z"
        fill="black"
        className="arrow-text"
      />
      <path
        d="M287.508 195.536C288.245 195.416 289.725 196.467 291.948 198.689L292.091 199.147C292.187 199.66 291.005 200.291 288.543 201.039L288.476 201.137L288.497 201.247C289.193 202.826 289.752 203.576 290.174 203.496L290.504 203.434C291.091 203.324 291.862 202.523 292.816 201.033L292.981 201.002C293.348 200.933 293.682 201.146 293.984 201.64C294.067 202.08 293.44 202.986 292.102 204.358C291.744 204.673 291.29 204.939 290.742 205.156C289.256 205.435 287.958 204.236 286.846 201.558C285.978 201.588 285.49 201.319 285.383 200.75C285.308 200.347 285.569 200.022 286.169 199.776L286.19 199.887L286.444 199.725L286.315 199.037C285.918 196.927 286.315 195.76 287.508 195.536ZM288.046 197.486L287.798 197.533L287.88 198.571L288.04 199.424L288.15 199.404C289.171 199.174 289.663 198.967 289.629 198.784C289.017 198.158 288.49 197.725 288.046 197.486Z"
        fill="black"
        className="arrow-text"
      />
      <path
        d="M307.812 194.124C309.166 194.875 309.916 196.143 310.062 197.929C310.261 200.348 309.586 202.061 308.039 203.068L306.993 203.322C306.36 203.374 305.665 203.122 304.908 202.566L304.712 202.582C304.197 203.373 303.688 203.789 303.185 203.83C301.864 203.939 301 202.755 300.591 200.279L300.467 198.772C300.404 196.398 300.8 195.176 301.656 195.106C302.121 195.068 302.414 195.334 302.536 195.905C302.169 196.684 302.04 197.744 302.15 199.083L302.194 199.613C302.405 201.282 302.651 202.104 302.93 202.082C303.209 202.059 303.457 201.551 303.676 200.56L303.462 198.639C303.357 197.355 303.611 196.688 304.225 196.638C304.932 196.58 305.343 197.248 305.457 198.644L305.569 198.634L305.434 200.415C305.826 201.32 306.302 201.749 306.86 201.703L307.027 201.69C307.846 201.622 308.305 200.705 308.403 198.936L308.275 197.373C308.226 196.778 307.813 196.072 307.034 195.256L306.902 195.014C306.87 194.623 307.173 194.326 307.812 194.124Z"
        fill="black"
        className="arrow-text"
      />
      <path
        d="M318.013 187.996C318.721 188.152 319.073 188.473 319.069 188.958C318.878 189.479 318.577 189.738 318.166 189.734C317.476 189.597 317.134 189.249 317.139 188.689C317.33 188.224 317.622 187.993 318.013 187.996ZM319.042 191.926C319.341 191.929 319.59 192.201 319.791 192.745L319.521 194.73L319.509 196.046C319.495 197.577 319.739 199.586 320.239 202.073C320.049 202.426 319.73 202.6 319.282 202.596C318.517 202.59 318.033 200.345 317.831 195.863L317.84 194.883C317.857 192.905 318.258 191.919 319.042 191.926Z"
        fill="black"
        className="arrow-text"
      />
      <path
        d="M331.936 193.758C333.505 194.025 334.229 194.865 334.106 196.278L334.131 196.646L333.699 200.993C333.655 201.495 333.885 202.199 334.387 203.104L334.382 203.16C334.187 203.686 333.894 203.933 333.503 203.899C332.392 203.315 331.904 202.243 332.039 200.681L332.071 200.318L331.992 200.255L332.085 200.151L332.09 200.095L332.507 196.252C332.553 195.713 332.344 195.423 331.879 195.383L331.545 195.354C330.583 195.646 329.941 197.642 329.621 201.343C329.51 202.626 329.129 203.239 328.478 203.183C327.976 203.14 327.743 202.801 327.779 202.167L328.021 199.377C328.333 195.769 328.805 193.993 329.437 194.048L329.724 193.988L330.302 194.122C330.833 193.831 331.378 193.71 331.936 193.758ZM328.523 187.729C328.606 187.193 328.916 186.864 329.451 186.742C332.608 185.553 334.54 184.99 335.246 185.051C335.284 185.054 335.312 185.057 335.33 185.058C335.793 185.117 336.024 185.484 336.022 186.158L335.759 186.922C333.153 187.596 331.593 187.976 331.079 188.063C330.847 188.361 330.235 188.618 329.242 188.831C328.799 188.756 328.559 188.388 328.523 187.729Z"
        fill="black"
        className="arrow-text"
      />
      <path
        d="M366.117 201.28C367.1 202.476 367.331 203.931 366.811 205.646C366.106 207.968 364.849 209.313 363.04 209.681L361.973 209.532C361.366 209.348 360.812 208.858 360.313 208.063L360.125 208.006C359.354 208.552 358.728 208.752 358.246 208.606C356.977 208.221 356.608 206.802 357.138 204.349L357.578 202.902C358.391 200.671 359.209 199.681 360.031 199.93C360.477 200.066 360.652 200.421 360.555 200.997C359.928 201.586 359.419 202.524 359.028 203.81L358.874 204.319C358.457 205.949 358.383 206.804 358.651 206.885C358.919 206.967 359.337 206.586 359.904 205.744L360.412 203.879C360.786 202.647 361.268 202.12 361.857 202.299C362.536 202.505 362.672 203.278 362.265 204.617L362.373 204.65L361.592 206.257C361.625 207.242 361.909 207.816 362.445 207.979L362.606 208.027C363.392 208.266 364.156 207.581 364.897 205.972L365.353 204.472C365.526 203.9 365.401 203.092 364.977 202.046L364.943 201.773C365.057 201.398 365.448 201.233 366.117 201.28Z"
        fill="black"
        className="arrow-text"
      />
      <path
        d="M399.79 209.016C400.068 209.17 400.176 209.572 400.115 210.221L395.261 216.43L394.202 218.34C393.097 220.331 392.855 221.499 393.475 221.843C393.774 222.265 393.834 222.64 393.653 222.966C393.444 223.342 392.996 223.381 392.306 223.084C391.588 222.686 391.392 221.712 391.717 220.163L391.472 220.028C390.135 221.015 389.034 221.268 388.168 220.788C387.156 220.227 386.97 219.12 387.609 217.468C388.596 215.689 390.833 214.465 394.321 213.795C394.795 214.058 395.398 213.528 396.132 212.206C397.967 209.744 399.186 208.681 399.79 209.016ZM389.162 218.074L388.795 218.735L388.97 219.344L389.117 219.425C389.639 219.715 391.125 218.48 393.575 215.719L393.428 215.637C391.118 216.298 389.696 217.111 389.162 218.074Z"
        fill="black"
        className="arrow-text"
      />
      <path
        d="M408.294 220.099C409.434 220.88 409.716 222.318 409.141 224.413L408.901 224.961C407.772 226.609 405.847 227.768 403.125 228.438C402.119 228.585 401.3 228.443 400.669 228.011C399.745 227.378 399.454 226.398 399.797 225.072C399.996 224.484 400.222 224.005 400.475 223.636L400.665 223.358C402.332 220.925 404.483 219.684 407.119 219.634C407.533 219.691 407.924 219.846 408.294 220.099ZM401.87 224.523C401.152 225.57 401.063 226.278 401.602 226.648C402.726 227.418 404.645 226.616 407.356 224.243L407.657 223.804C408.049 222.67 407.891 221.86 407.183 221.375C406.906 221.185 406.635 221.282 406.371 221.667C406.192 221.929 405.742 221.926 405.02 221.658C403.859 222.197 402.809 223.152 401.87 224.523ZM406.345 214.522C406.682 214.096 407.113 213.962 407.639 214.119C410.972 214.637 412.931 215.097 413.517 215.498C413.547 215.519 413.57 215.534 413.586 215.545C413.96 215.824 413.981 216.257 413.647 216.843L413.042 217.379C410.442 216.683 408.896 216.247 408.407 216.07C408.069 216.2 407.409 216.122 406.429 215.835C406.081 215.551 406.053 215.114 406.345 214.522Z"
        fill="black"
        className="arrow-text"
      />
      <path
        d="M416.889 229.917L418.865 231.303C419.228 231.597 419.256 231.992 418.949 232.488C418.585 232.938 417.721 232.61 416.358 231.505C416.161 231.393 415.992 231.304 415.853 231.239L414.472 233.076L412.303 235.751C411.903 236.244 411.493 236.32 411.073 235.979L410.79 235.75C410.67 235.364 410.704 235.055 410.892 234.823L412.938 232.3L414.459 230.29C414.23 230.128 413.92 229.889 413.528 229.571C412.68 228.691 412.426 228.041 412.767 227.62C413.002 227.33 413.386 227.257 413.919 227.4L414.586 228.266L414.717 228.372L415.513 228.946L419.725 223.529C420.019 223.166 420.414 223.138 420.91 223.445C421.199 223.919 421.22 224.308 420.973 224.613L416.889 229.917Z"
        fill="black"
        className="arrow-text"
      />
    </svg>
  );
}