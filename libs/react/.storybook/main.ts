import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default {
  stories: ["../examples/**/*.stories.tsx"],
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: { backgrounds: false, actions: false }
    },
    "@storybook/addon-a11y",
    "@storybook/addon-themes"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  core: {
    disableTelemetry: true
  },
  typescript: {
    reactDocgen: false
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths({ root: "./" })]
    });
  }
} satisfies StorybookConfig;
