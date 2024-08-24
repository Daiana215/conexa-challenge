import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
  },

  projectId: "",

  env: {
    app_url: "/",
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
