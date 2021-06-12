const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        "blue-gray": colors.blueGray,
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      animation: {
        "bounce-right": "bounce-right 1s infinite",
      },
      keyframes: {
        "bounce-right": {
          "0%, 100%": {
            transform: "translateX(25%)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
