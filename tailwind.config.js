/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  /**
   * @description This is the safelist option, which is used to safelist classes that are not used in the HTML files, but are used dynamically in the JavaScript files.
   * We need to include this, otherwise the classes will be purged and the styles will not be applied dynamically.
   */
  safelist: ["bg-perezCard", "bg-hannahCard", "bg-statsCard"],
  theme: {
    extend: {
      colors: {
        rbrBlue: "#001a30",
        "rbrRed-500": "#ea1d2d",
        "rbrRed-600": "#db0940",
        rbrGrey: "#a8a9ac",
        rbrYellow: "#fcd700",
      },
      backgroundImage: {
        background: "url('/src/assets/images/card-rail/background.png')",
        perezCard: "url('/src/assets/images/card-rail/perez-card.png')",
        hannahCard: "url('/src/assets/images/card-rail/hannah-card.png')",
        statsCard: "url('/src/assets/images/card-rail/stats-card.png')",
        backgroundHero: "url('/src/assets/images/hero-element/background.png')",
        foregroundHero: "url('/src/assets/images/hero-element/foreground.png')",
      },
      fontFamily: {
        bullsLight: ['FuturaPtLight'],
        bullsMedium: ['FuturaPtMedium'],
        bullsBold: ['FuturaPtBold'],
      },
    },
  },
  plugins: [],
};
