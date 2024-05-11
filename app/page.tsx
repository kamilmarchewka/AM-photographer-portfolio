import NavLink from "@/components/navigation/NavLink";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <section className="relative min-h-screen max-w-7xl mx-auto bg-red-100 w-full">
        <svg
          width="432"
          height="500"
          viewBox="0 0 432 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 bottom-5 min-w-[18rem] w-[30vw] max-w-[25rem] h-fit mt-14 bg-green-300"
        >
          <path
            d="M197 279L196.004 278.908L197 279ZM379 393L379.494 393.869L379 393ZM266 221.5L266.259 222.466L266 221.5ZM3.5 499.5L11.7426 491.413L0.618112 488.318L3.5 499.5ZM401.304 0.282154C368.176 32.4112 319.243 76.2397 277.434 124.879C235.646 173.494 200.792 227.116 196.004 278.908L197.996 279.092C202.722 227.966 237.2 174.755 278.951 126.183C320.681 77.635 369.491 33.9221 402.696 1.71785L401.304 0.282154ZM196.004 278.908C190.485 338.619 208.254 383.342 241.666 405.134C275.085 426.932 323.763 425.535 379.494 393.869L378.506 392.131C323.137 423.59 275.315 424.693 242.759 403.459C210.196 382.221 192.515 338.381 197.996 279.092L196.004 278.908ZM379.494 393.869C424.007 368.578 435.968 314.362 416.597 271.959C406.901 250.737 389.356 232.455 364.119 222.199C338.884 211.944 306.03 209.74 265.741 220.534L266.259 222.466C306.22 211.76 338.616 213.994 363.366 224.051C388.112 234.108 405.286 252.013 414.778 272.791C433.782 314.388 421.993 367.422 378.506 392.131L379.494 393.869ZM265.741 220.534C217.148 233.553 161.317 269.33 112.98 317.66C64.6343 365.999 23.6914 426.987 4.95822 490.528L6.87659 491.094C25.4925 427.95 66.2206 367.241 114.394 319.075C162.575 270.9 218.112 235.365 266.259 222.466L265.741 220.534Z"
            fill="red"
          />
          <path
            d="M235.343 205.578L235.737 205.365C238.414 203.919 240.654 203.961 242.456 205.491L242.956 206.24L243.089 206.486C244.118 208.391 243.914 210.782 242.476 213.659C242.006 214.125 241.825 214.456 241.931 214.653C243.945 216.811 245.383 218.687 246.243 220.28L246.416 220.6C246.771 221.257 246.677 221.732 246.135 222.025C245.698 222.198 245.382 222.103 245.187 221.742L244.854 221.126C243.834 219.237 242.38 217.37 240.493 215.526C239.1 216.129 238.166 216.167 237.69 215.639L237.61 215.491C237.451 215.196 237.556 214.842 237.928 214.429L239.211 214.213L239.184 214.164C237.313 212.035 236.147 210.543 235.686 209.689C235.428 209.213 235.579 208.824 236.137 208.522C236.647 208.247 237.371 208.98 238.312 210.721L240.609 213.267C241.579 212.234 242.082 210.965 242.118 209.461C242.108 208.618 241.966 207.941 241.691 207.432L241.518 207.112C240.79 205.765 239.228 205.622 236.831 206.684L235.821 207.229C233.704 208.691 232.867 209.832 233.311 210.653L233.391 210.801C233.524 211.048 233.863 211.363 234.41 211.746C234.605 212.108 234.442 212.493 233.92 212.902C233.095 212.944 232.42 212.481 231.897 211.512C230.921 209.706 232.07 207.728 235.343 205.578Z"
            fill="black"
          />
          <path
            d="M254.821 204.443C255.912 204.006 256.867 204.508 257.686 205.95L257.78 206.184C258.453 207.865 258.204 209.754 257.033 211.851C258.434 212.437 260.391 212.226 262.903 211.22C263.333 211.188 263.631 211.381 263.798 211.797C263.985 212.265 263.776 212.62 263.169 212.863C261.471 213.543 259.513 213.824 257.294 213.708L257.596 214.461C258.311 216.246 258.287 217.291 257.524 217.597C256.987 217.812 256.306 216.888 255.48 214.826L254.668 212.799L254.299 212.102L254.147 211.197L252.966 208.775L252.924 208.671C252.737 208.203 252.851 207.785 253.267 207.418C253.402 205.796 253.919 204.804 254.821 204.443ZM255.801 210.656C256.303 210.455 256.505 209.328 256.408 207.276L255.96 206.158L255.513 205.945L255.279 206.039C254.724 206.864 254.898 208.403 255.801 210.656Z"
            fill="black"
          />
          <path
            d="M272.194 201.152C272.535 201.053 272.858 201.232 273.164 201.688C272.734 206.202 272.536 208.687 272.57 209.143L272.701 209.193L273.535 208.953C274.396 208.705 275.458 207.973 276.719 206.755C277.222 206.61 277.563 206.852 277.744 207.48C277.095 209.007 275.704 210.077 273.569 210.691L272.285 210.886C271.949 211.274 271.701 211.491 271.54 211.537C270.983 211.697 270.558 211.266 270.264 210.243C270.202 210.028 270.412 209.608 270.893 208.984L271.325 203.499L271.294 203.392L271.214 203.415L268.98 204.261C268.334 204.311 267.942 204.094 267.802 203.609C267.673 203.161 267.86 202.864 268.362 202.72C269.331 202.441 270.608 201.918 272.194 201.152Z"
            fill="black"
          />
          <path
            d="M284.508 196.536C285.245 196.416 286.725 197.467 288.948 199.689L289.091 200.147C289.187 200.66 288.005 201.291 285.543 202.039L285.476 202.137L285.497 202.247C286.193 203.826 286.752 204.576 287.174 204.496L287.504 204.434C288.091 204.324 288.862 203.523 289.816 202.033L289.981 202.002C290.348 201.933 290.682 202.146 290.984 202.64C291.067 203.08 290.44 203.986 289.102 205.358C288.744 205.673 288.29 205.939 287.742 206.156C286.256 206.435 284.958 205.236 283.846 202.558C282.978 202.588 282.49 202.319 282.383 201.75C282.308 201.347 282.569 201.022 283.169 200.776L283.19 200.887L283.444 200.725L283.315 200.037C282.918 197.927 283.315 196.76 284.508 196.536ZM285.046 198.486L284.798 198.533L284.88 199.571L285.04 200.424L285.15 200.404C286.171 200.174 286.663 199.967 286.629 199.784C286.017 199.158 285.49 198.725 285.046 198.486Z"
            fill="black"
          />
          <path
            d="M304.812 195.124C306.166 195.875 306.916 197.143 307.062 198.929C307.261 201.348 306.586 203.061 305.039 204.068L303.993 204.322C303.36 204.374 302.665 204.122 301.908 203.566L301.712 203.582C301.197 204.373 300.688 204.789 300.185 204.83C298.864 204.939 298 203.755 297.591 201.279L297.467 199.772C297.404 197.398 297.8 196.176 298.656 196.106C299.121 196.068 299.414 196.334 299.536 196.905C299.169 197.684 299.04 198.744 299.15 200.083L299.194 200.613C299.405 202.282 299.651 203.104 299.93 203.082C300.209 203.059 300.457 202.551 300.676 201.56L300.462 199.639C300.357 198.355 300.611 197.688 301.225 197.638C301.932 197.58 302.343 198.248 302.457 199.644L302.569 199.634L302.434 201.415C302.826 202.32 303.302 202.749 303.86 202.703L304.027 202.69C304.846 202.622 305.305 201.705 305.403 199.936L305.275 198.373C305.226 197.778 304.813 197.072 304.034 196.256L303.902 196.014C303.87 195.623 304.173 195.326 304.812 195.124Z"
            fill="black"
          />
          <path
            d="M315.013 188.996C315.721 189.152 316.073 189.473 316.069 189.958C315.878 190.479 315.577 190.738 315.166 190.734C314.476 190.597 314.134 190.249 314.139 189.689C314.33 189.224 314.622 188.993 315.013 188.996ZM316.042 192.926C316.341 192.929 316.59 193.201 316.791 193.745L316.521 195.73L316.509 197.046C316.495 198.577 316.739 200.586 317.239 203.073C317.049 203.426 316.73 203.6 316.282 203.596C315.517 203.59 315.033 201.345 314.831 196.863L314.84 195.883C314.857 193.905 315.258 192.919 316.042 192.926Z"
            fill="black"
          />
          <path
            d="M328.936 194.758C330.505 195.025 331.229 195.865 331.106 197.278L331.131 197.646L330.699 201.993C330.655 202.495 330.885 203.199 331.387 204.104L331.382 204.16C331.187 204.686 330.894 204.933 330.503 204.899C329.392 204.315 328.904 203.243 329.039 201.681L329.071 201.318L328.992 201.255L329.085 201.151L329.09 201.095L329.507 197.252C329.553 196.713 329.344 196.423 328.879 196.383L328.545 196.354C327.583 196.646 326.941 198.642 326.621 202.343C326.51 203.626 326.129 204.239 325.478 204.183C324.976 204.14 324.743 203.801 324.779 203.167L325.021 200.377C325.333 196.769 325.805 194.993 326.437 195.048L326.724 194.988L327.302 195.122C327.833 194.831 328.378 194.71 328.936 194.758ZM325.523 188.729C325.606 188.193 325.916 187.864 326.451 187.742C329.608 186.553 331.54 185.99 332.246 186.051C332.284 186.054 332.312 186.057 332.33 186.058C332.793 186.117 333.024 186.484 333.022 187.158L332.759 187.922C330.153 188.596 328.593 188.976 328.079 189.063C327.847 189.361 327.235 189.618 326.242 189.831C325.799 189.756 325.559 189.388 325.523 188.729Z"
            fill="black"
          />
          <path
            d="M363.117 202.28C364.1 203.476 364.331 204.931 363.811 206.646C363.106 208.968 361.849 210.313 360.04 210.681L358.973 210.532C358.366 210.348 357.812 209.858 357.313 209.063L357.125 209.006C356.354 209.552 355.728 209.752 355.246 209.606C353.977 209.221 353.608 207.802 354.138 205.349L354.578 203.902C355.391 201.671 356.209 200.681 357.031 200.93C357.477 201.066 357.652 201.421 357.555 201.997C356.928 202.586 356.419 203.524 356.028 204.81L355.874 205.319C355.457 206.949 355.383 207.804 355.651 207.885C355.919 207.967 356.337 207.586 356.904 206.744L357.412 204.879C357.786 203.647 358.268 203.12 358.857 203.299C359.536 203.505 359.672 204.278 359.265 205.617L359.373 205.65L358.592 207.257C358.625 208.242 358.909 208.816 359.445 208.979L359.606 209.027C360.392 209.266 361.156 208.581 361.897 206.972L362.353 205.472C362.526 204.9 362.401 204.092 361.977 203.046L361.943 202.773C362.057 202.398 362.448 202.233 363.117 202.28Z"
            fill="black"
          />
          <path
            d="M396.79 210.016C397.068 210.17 397.176 210.572 397.115 211.221L392.261 217.43L391.202 219.34C390.097 221.331 389.855 222.499 390.475 222.843C390.774 223.265 390.834 223.64 390.653 223.966C390.444 224.342 389.996 224.381 389.306 224.084C388.588 223.686 388.392 222.712 388.717 221.163L388.472 221.028C387.135 222.015 386.034 222.268 385.168 221.788C384.156 221.227 383.97 220.12 384.609 218.468C385.596 216.689 387.833 215.465 391.321 214.795C391.795 215.058 392.398 214.528 393.132 213.206C394.967 210.744 396.186 209.681 396.79 210.016ZM386.162 219.074L385.795 219.735L385.97 220.344L386.117 220.425C386.639 220.715 388.125 219.48 390.575 216.719L390.428 216.637C388.118 217.298 386.696 218.111 386.162 219.074Z"
            fill="black"
          />
          <path
            d="M405.294 221.099C406.434 221.88 406.716 223.318 406.141 225.413L405.901 225.961C404.772 227.609 402.847 228.768 400.125 229.438C399.119 229.585 398.3 229.443 397.669 229.011C396.745 228.378 396.454 227.398 396.797 226.072C396.996 225.484 397.222 225.005 397.475 224.636L397.665 224.358C399.332 221.925 401.483 220.684 404.119 220.634C404.533 220.691 404.924 220.846 405.294 221.099ZM398.87 225.523C398.152 226.57 398.063 227.278 398.602 227.648C399.726 228.418 401.645 227.616 404.356 225.243L404.657 224.804C405.049 223.67 404.891 222.86 404.183 222.375C403.906 222.185 403.635 222.282 403.371 222.667C403.192 222.929 402.742 222.926 402.02 222.658C400.859 223.197 399.809 224.152 398.87 225.523ZM403.345 215.522C403.682 215.096 404.113 214.962 404.639 215.119C407.972 215.637 409.931 216.097 410.517 216.498C410.547 216.519 410.57 216.534 410.586 216.545C410.96 216.824 410.981 217.257 410.647 217.843L410.042 218.379C407.442 217.683 405.896 217.247 405.407 217.07C405.069 217.2 404.409 217.122 403.429 216.835C403.081 216.551 403.053 216.114 403.345 215.522Z"
            fill="black"
          />
          <path
            d="M413.889 230.917L415.865 232.303C416.228 232.597 416.256 232.992 415.949 233.488C415.585 233.938 414.721 233.61 413.358 232.505C413.161 232.393 412.992 232.304 412.853 232.239L411.472 234.076L409.303 236.751C408.903 237.244 408.493 237.32 408.073 236.979L407.79 236.75C407.67 236.364 407.704 236.055 407.892 235.823L409.938 233.3L411.459 231.29C411.23 231.128 410.92 230.889 410.528 230.571C409.68 229.691 409.426 229.041 409.767 228.62C410.002 228.33 410.386 228.257 410.919 228.4L411.586 229.266L411.717 229.372L412.513 229.946L416.725 224.529C417.019 224.166 417.414 224.138 417.91 224.445C418.199 224.919 418.22 225.308 417.973 225.613L413.889 230.917Z"
            fill="black"
          />
        </svg>
      </section>
    </main>
  );
}
