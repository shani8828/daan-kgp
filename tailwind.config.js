// /** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FF3737",
        secondary: "#00c3c7",
        dark: "#ffcf22",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md:"3rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
