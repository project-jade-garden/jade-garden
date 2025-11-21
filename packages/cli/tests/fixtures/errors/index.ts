import { none } from "./none";
import { reserved } from "./reserved";

export * from "./duplicate";
export * from "./misconfigured";
export * from "./none";
export * from "./reserved";

export const errors = {
  reserved,
  // ! Reserved file/directory names
  index: none,
  utils: none
};
