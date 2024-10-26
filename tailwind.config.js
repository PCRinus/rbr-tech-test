/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rbrBlue: "#001a30",
        "rbrRed-500": "#ea1d2d",
        "rbrRed-600": "#db0940",
        rbrGrey: "#a8a9ac",
        rbrYellow: "#fcd700",
      },
    },
  },
  plugins: [],
};
