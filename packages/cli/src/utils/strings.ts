type Capitalize<T extends string> = T extends `${infer F}${infer R}` ? `${Uppercase<F>}${Lowercase<R>}` : T;

const capitalize = <T extends string>(str: T): Capitalize<T> => {
  return (str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()) as Capitalize<T>;
};

const getWords = (str: string): string[] => {
  return Array.from(
    str.match(/\p{Lu}?\p{Ll}+|[0-9]+|\p{Lu}+(?!\p{Ll})|\p{Emoji_Presentation}|\p{Extended_Pictographic}|\p{L}+/gu) || []
  );
};

/**
 * **The `camelCase` function taken from [es-toolkit](https://github.com/toss/es-toolkit/blob/main/src/string/camelCase.ts)**.
 * Converts a string to camel case.
 *
 * @param {string} str - The string to convert.
 * @returns {string} The camel-cased string.
 */
export const camelCase = (str: string): string => {
  const words = getWords(str);

  if (words.length === 0) return "";

  const [first, ...rest] = words;

  return `${first.toLowerCase()}${rest.map((word) => capitalize(word)).join("")}`;
};

/**
 * **The `kebabCase` function taken from [es-toolkit](https://github.com/toss/es-toolkit/blob/main/src/string/kebabCase.ts)**.
 * Converts a string to kebab case.
 *
 * @param {string} str - The string to convert.
 * @returns {string} The kebab-cased string.
 */
export const kebabCase = (str: string): string =>
  getWords(str)
    .map((word) => word.toLowerCase())
    .join("-");
