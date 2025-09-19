import { cancel } from "@clack/prompts";
import { logs } from "./logs";

export * from "./comments";
export * from "./logs";

export const cancelBuild = (): never => {
  cancel(logs.warning("Canceling.", false));
  process.exit(0);
};

/**
 * **The `kebabCase` function taken from [es-toolkit](https://github.com/toss/es-toolkit/blob/main/src/string/kebabCase.ts)**.
 * Converts a string to kebab case.
 *
 * @param {string} str - The string to convert.
 * @returns {string} The kebab-cased string.
 */
export const kebabCase = (str: string): string => {
  const words = Array.from(
    str.match(/\p{Lu}?\p{Ll}+|[0-9]+|\p{Lu}+(?!\p{Ll})|\p{Emoji_Presentation}|\p{Extended_Pictographic}|\p{L}+/gu) ?? []
  );
  return words.map((word) => word.toLowerCase()).join("-");
};
