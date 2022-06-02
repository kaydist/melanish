module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Assistant: ["Assistant", "sans-serif"],
    },

    extend: {
      fontFamily: {
        CormorantGaramond: ["CormorantGaramond"],
      },

      spacing: {
        "half-body": "3.47vw",
        body: "6.94vw",
        "2xbody": "13.89vw",
      },

      colors: {
        muted: "#D6D0CE",
      },
    },
  },
  plugins: [],
};
