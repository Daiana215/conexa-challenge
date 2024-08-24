module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-css-modules",
    "stylelint-config-prettier",
  ],
  rules: {
    "selector-class-pattern": /^[a-z][a-zA-Z0-9]+$/,
  },
  ignoreFiles: ["**/*.{ts,tsx}"],
};
