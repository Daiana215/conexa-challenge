const lintStagedConfig = {
  "**/*.ts?(x)": (filenames) => {
    const files = filenames.join(" ");
    return [
      `npm run lint:ts ${files}`,
      "npm run ts-check",
      `npm run test -- --findRelatedTests ${files}`,
    ];
  },
  "**/*.css": (filenames) => {
    const files = filenames.join(" ");
    return [`npm run lint:css ${files}`];
  },
};

module.exports = lintStagedConfig;
