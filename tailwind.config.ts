import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#FEFCFB",
        black: "#1E1E24",
      },
      keyframes: {
        navLinkUpper: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "1",
          },
          "50%,70%": {
            transform: "translateX(0%)",
            opacity: "1",
          },
          "100%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
        },
        navLinkLower: {
          "0%": {
            transform: "translateX(100%)",
            opacity: "1",
          },
          "50%,70%": {
            transform: "translateX(0%)",
            opacity: "1",
          },
          "100%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
        },
      },
      fontFamily: {
        lato: ["var(--lato)"],
      },
    },
  },
  plugins: [],
};
export default config;
