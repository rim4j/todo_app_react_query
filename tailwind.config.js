import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {},
          colors: {
            background: "#fafafa",
            primary: {
              DEFAULT: "#52525B",
              foreground: "#fff",
            },
            focus: "#fff",
          },
        },
        dark: {
          layout: {},
          colors: {
            background: "#18181B",

            primary: {
              DEFAULT: "#52525B",
              foreground: "#fff",
            },
            focus: "#fff",
          },
        },
      },
    }),
  ],
};
