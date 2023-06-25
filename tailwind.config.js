/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3F4E4F",
        secondary: "#A27B5C",
        accent: "#DCD7C9",
        base: "#2C3639",
      },
      transitionDuration: {
        2500: "2500ms",
      },
      animation: {
        "bounce-custom": "bounce 3s infinite",
      },
    },
  },
  plugins: [],
};
