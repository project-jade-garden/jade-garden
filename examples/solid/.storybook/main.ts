import type { StorybookConfig } from "storybook-solidjs-vite";
import { mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: { backgrounds: false, actions: false }
    },
    "@storybook/addon-a11y",
    "@storybook/addon-themes"
  ],
  framework: {
    name: "storybook-solidjs-vite",
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
