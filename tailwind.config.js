/* global module */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontSize: {
        "5.3xl": "3.2rem",
      },
      width: {
        37: "9.25rem",
        38: "9.5rem",
        39: "9.75rem",
      },
      height: {
        37: "9.25rem",
        38: "9.5rem",
        39: "9.75rem",
      },
    },
    fontFamily: {
      root: ["Inter", "Avenir", "Helvetica", "Arial", "sans-serif"],
    },
    animation: {
      "logo-spin": "spin infinite 20s linear",
    },
    keyframes: {
      spin: {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
