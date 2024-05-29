/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
        kulim: ["var(--font-kulim)", "sans-serif"],
      },
      colors: {
        active: "#095790",
        activeDark: "#0F75BC",
        dark: "#1D1D1D",
      },
      keyframes: {
        "slide-in-fade-in": {
          "0%": {
            transform: "translateY(5%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        "slide-in-fade-in": "slide-in-fade-in 0.5s forwards",
      },
    },
  },
  plugins: [],
};
