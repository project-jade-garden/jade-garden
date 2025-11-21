import { sva } from "jade-garden/sva";

export const labelStyles = sva(
  // @ts-expect-error: for testing
  {
    name: "label"
  },
  {
    description: "A text component that represents a caption for an item in a user interface.",
    name: "Label",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/elements/label"
  }
);

export type * as LabelStyles from "./types";
