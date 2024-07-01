/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        sidebarMobile: "url(./assets/images/bg-sidebar-mobile.svg)",
        sidebarDesktop: "url(./assets/images/bg-sidebar-desktop.svg)",
      },
      fontFamily: {
        sans: ['"Ubuntu"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
