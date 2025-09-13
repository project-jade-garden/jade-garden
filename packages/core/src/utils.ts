/* -----------------------------------------------------------------------------
 * Utils
 * -----------------------------------------------------------------------------*/

/**
 * Converts a boolean to its string representation ("true" or "false"), or returns the value as is.
 * Treats 0 as "0".
 *
 * @template T - The type of the value.
 * @param {T} value - The value to convert.
 * @returns {string | T} - The string representation of the boolean, or the original value.
 */
export const falsyToString = <T>(value: T): string | T =>
  typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;

/**
 * Checks if a given configuration object matches the provided props.
 *
 * @param {Record<string, unknown>} config - The configuration object.
 * @param {Record<string, unknown>} props - The props object.
 * @returns {boolean} True if the configuration matches the props, false otherwise.
 */
export const hasProps = (config: Record<string, unknown>, props: Record<string, unknown>): boolean => {
  let isValid = true;

  for (const key of Object.keys(config)) {
    const value = config[key];
    const isArray = Array.isArray(value);
    const propValue = props[key];

    if ((isArray && !value.includes(propValue)) || (!isArray && value !== propValue)) {
      isValid = false;
      break;
    }
  }

  return isValid;
};

/**
 * **The `kebabCase` function taken from [es-toolkit](https://github.com/toss/es-toolkit/blob/main/src/string/kebabCase.ts)**.
 *
 * Converts a string to kebab case.
 *
 * Kebab case is the naming convention in which each word is written in lowercase and separated by a dash (-) character.
 *
 * @param {string} str - The string that is to be changed to kebab case.
 * @returns {string} - The converted string to kebab case.
 *
 * @example
 * const convertedStr1 = kebabCase('camelCase') // returns 'camel-case'
 * const convertedStr2 = kebabCase('some whitespace') // returns 'some-whitespace'
 * const convertedStr3 = kebabCase('hyphen-text') // returns 'hyphen-text'
 * const convertedStr4 = kebabCase('HTTPRequest') // returns 'http-request'
 */
export const kebabCase = (str: string): string => {
  const words = Array.from(
    str.match(/\p{Lu}?\p{Ll}+|[0-9]+|\p{Lu}+(?!\p{Ll})|\p{Emoji_Presentation}|\p{Extended_Pictographic}|\p{L}+/gu) ?? []
  );
  return words.map((word) => word.toLowerCase()).join("-");
};
