/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greenish: "#3B873E", // Adding the custom color directly
      },
    },
  },
  plugins: [],
};
