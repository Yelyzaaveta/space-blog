/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#000002",
        light: "#6699a4",
      },
      container: {
        padding: {
          DEFAULT: "16px",
          sm: "24px",
          md: "40px",
          lg: "60px",
          xl: "70px",
        },
      },
      rotate: {
        360: "360deg",
      },
    },
  },
  plugins: [],
};
