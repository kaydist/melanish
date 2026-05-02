module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
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

      keyframes: {
        driftRight: {
          "0%, 100%": { transform: "translateX(-4px)", opacity: "0.55" },
          "50%": { transform: "translateX(4px)", opacity: "1" },
        },
      },
      animation: {
        "drift-right": "driftRight 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
