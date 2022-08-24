module.exports = function (app, options) {
  let config = {
    content: [
      !options?.ignorePackages &&
        "../../packages/*/src/**/*.{js,jsx,ts,tsx,html}",
      app
        ? `../../apps/${app}/src/**/*{js,jsx,ts,tsx,html}`
        : "./src/**/*.{js,jsx,ts,tsx,html}",
    ],
    darkMode: "class",
    theme: {},
    plugins: [],
  };
  return config;
};
