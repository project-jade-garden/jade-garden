import type { StoryObj } from "storybook-solidjs";

export type Theme = "minimal" | "park" | "shadcn";

export type Story = StoryObj<{ theme: Theme }>;

// * `themes` values will be read as `unknown`
export const getTheme = <T>(themes: Record<Theme, Record<keyof T, string | string[]>>, theme: Theme) => {
  let styledSlots: Record<keyof T, string | string[]>;

  switch (theme) {
    case "park":
      styledSlots = themes.park;
      break;
    case "shadcn":
      styledSlots = themes.shadcn;
      break;
    default:
      styledSlots = themes.minimal;
      break;
  }

  return styledSlots;
};
