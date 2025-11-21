import { cva } from "jade-garden/cva";

export const iconStyles = cva(
  {
    name: "icon"
  },
  {
    description: "A graphical representation of an action, file, or concept.",
    name: "Icon",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/elements/icon"
  }
);

export type * as IconStyles from "./types";
