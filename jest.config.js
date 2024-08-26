const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  ...createJestConfig(),
  moduleDirectories: ["node_modules", "<rootDir>/src"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "identity-obj-proxy",
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "^partials/(.*)$": "<rootDir>/src/partials/$1",
    "^tests/(.*)$": "<rootDir>/tests/$1",
    "^utils/(.*)$": "<rootDir>/utils/$1",
    "^src/(.*)$": "<rootDir>/src/$1",
  },
  testEnvironment: "jsdom",
  collectCoverage: true,
  preset: "ts-jest/presets/js-with-ts",
  setupFilesAfterEnv: ["<rootDir>/tests/setupTest.ts"],
  transform: {
    "^.+\\.ts?$": ["ts-jest", { tsconfig: "./tsconfig-jest.json" }],
  },
  transformIgnorePatterns: ["node_modules"],
  passWithNoTests: true,
};
