import { sva } from "jade-garden/sva";

export const linkStyles = sva(
  // @ts-expect-error: for testing
  {
    name: "link"
  },
  {
    description: "Used for navigation between pages.",
    name: "Link",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/elements/link"
  }
);

export type * as LinkStyles from "./types";
