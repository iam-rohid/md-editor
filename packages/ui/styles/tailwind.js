const colors = require("tailwindcss/colors");

module.exports = function (app, options) {
  let config = {
    content: [
      !options?.ignorePackages &&
        "../../packages/*/src/**/*.{js,ts,jsx,tsx,html}",
      app
        ? `../../apps/${app}/src/**/*.{js,ts,jsx,tsx,html}`
        : "./src/**/*.{js,ts,jsx,tsx,html}",
    ],
    darkMode: "class",
    theme: {
      colors: {
        white: colors.white,
        black: colors.black,
        transparent: colors.transparent,
        current: colors.current,
        neutral: colors.slate,
      },
    },
    plugins: [],
  };
  return config;
};
