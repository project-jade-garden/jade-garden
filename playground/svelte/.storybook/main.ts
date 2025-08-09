import type { StorybookConfig } from "@storybook/sveltekit";
import { mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default {
  stories: ["../src/**/*.stories.ts"],
  addons: ["@storybook/addon-a11y", "@storybook/addon-themes"],
  framework: {
    name: "@storybook/sveltekit",
    options: {}
  },
  core: {
    disableTelemetry: true
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths({ root: "./" })]
    });
  }
} satisfies StorybookConfig;
