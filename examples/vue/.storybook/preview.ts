import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview, VueRenderer } from "@storybook/vue3";
import "./index.css";

export default {
  args: {
    theme: "minimal"
  },
  argTypes: {
    theme: {
      options: ["minimal", "park", "shadcn"],
      control: { type: "radio" }
    }
  },
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
