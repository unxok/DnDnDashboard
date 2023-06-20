/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2C3639",
        secondary: "#3F4E4F",
        accent: "#A27B5C",
        base: "#DCD7C9",
      },
    },
  },
  plugins: [],
};
