import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" }, // => @media (max-width: 1535px) { ... }
      xl: { max: "1279px" }, // => @media (max-width: 1279px) { ... }
      lg: { max: "1023px" }, // => @media (max-width: 1023px) { ... }
      md: { max: "767px" }, // => @media (max-width: 767px) { ... }
      sm: { max: "639px" }, // => @media (max-width: 639px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: "#373a36",
        primary: "#d48166",
        "primary-rgba": "rgba(212, 129, 102, 0)",
        light: "#e6e2dd",
        "light-rgba": "rgb(230, 226, 221)",
        "chip-color-1": "#f5ab99",
        "chip-color-2": "#feb47b",
        "chip-color-3": "#6cbf84",
        "chip-color-4": "#f26968",
        "chip-color-6": "#d79abc",
        "chip-color-5": "#91b3bc",
      },
    },
  },
  plugins: [],
};
export default config;
