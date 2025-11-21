import { cva } from "jade-garden/cva";

export const kbdStyles = cva(
  {
    name: "kbd"
  },
  {
    description: "Represents a keyboard input or hotkey.",
    name: "Kbd",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/elements/kbd"
  }
);

export type * as KbdStyles from "./types";
