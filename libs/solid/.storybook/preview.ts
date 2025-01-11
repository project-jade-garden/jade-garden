import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview, ReactRenderer } from "@storybook/react";

export default {
  parameters: {
    options: {
      storySort: {
        method: "alphabetical"
      }
    },
    layout: "padded"
  },
  decorators: [
    withThemeByClassName<ReactRenderer>({
      defaultTheme: "light",
      themes: {
        light: "",
        dark: "dark"
      }
    }),
    (Story) => Story()
  ]
} satisfies Preview;
