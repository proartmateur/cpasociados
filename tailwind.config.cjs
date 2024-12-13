/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "cp-blue-0": "#EAF7FE",
        "cp-blue-10": "#B0E4FF",
        "cp-blue-20": "#73CFFF",
        "cp-blue-90": "#081B3D",
      },
      fontFamily: {
        sans: [
          "Fira Sans Variable",
          "Fira Sans",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
