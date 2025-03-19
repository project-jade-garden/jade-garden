import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview, SvelteRenderer } from "@storybook/svelte";
import "./index.css";

export default {
  decorators: [
    withThemeByClassName<SvelteRenderer>({
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
