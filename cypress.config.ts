import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'pmkvpb',
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
