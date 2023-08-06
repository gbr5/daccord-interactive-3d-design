/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "",
        secondary: "",
        background: "#0e1129",
        text: {
          white: "",
          gray: "",
        },
        cta: {
          DEFAULT: "rgba(31,66,250,0.2)",
          dark: "rgba(0,0,0,0.2)",
          hover: "",
          active: "",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.4)",
          light: "rgba(255,255,255,0.1)",
          hover: "rgba(255,255,255,0.6)",
        },
        boxShadow: "rgba(0,0,0,0.8)",
      },
      fontFamily: {
        sans: ["var(--font-spline-sans)"],
        mono: ["var(--font-spline-mono)"],
      },
    },
  },
  plugins: [],
};
