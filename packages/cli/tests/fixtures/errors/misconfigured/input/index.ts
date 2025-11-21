import { cva } from "jade-garden/cva";

export const inputStyles = cva(
  {
    name: "input"
  },
  {
    description: "A field for user input, often used for forms or search functionality.",
    name: "Input",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/elements/input"
  }
);

export type * as InputStyles from "./types";
