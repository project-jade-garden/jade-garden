import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview, ReactRenderer } from "@storybook/react";
import "./index.css";

export default {
  decorators: [
    withThemeByClassName<ReactRenderer>({
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
