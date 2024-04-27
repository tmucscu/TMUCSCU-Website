/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        kulim: ["Kulim Park", "sans-serif"],
      },
      colors: {
        active: "#095790",
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
