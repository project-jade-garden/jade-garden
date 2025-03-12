import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview, VueRenderer } from "@storybook/vue3";
import "./index.css";

export default {
  decorators: [
    withThemeByClassName<VueRenderer>({
      defaultTheme: "light",
      themes: {
        light: "",
        dark: "dark"
      }
    }),
    (Story) => Story()
  ],
  parameters: {
    options: {
      storySort: {
        method: "alphabetical"
      }
    },
    layout: "padded"
  }
} satisfies Preview;
