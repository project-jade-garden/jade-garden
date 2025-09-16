/* -----------------------------------------------------------------------------
 * Utils
 * -----------------------------------------------------------------------------*/

/**
 * Converts a boolean to its string representation ("true" or "false"), or returns the value as is.
 * This is useful for handling variant keys, where `false` or `0` should not be omitted.
 *
 * @template T - The type of the value.
 * @param {T} value - The value to convert.
 * @returns {string | T} The string representation of the boolean, or the original value.
 */
export const falsyToString = <T>(value: T): string | T =>
  typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;

/**
 * Checks if a given configuration object matches the provided props.
 * This is used to determine if a compound variant or compound slot should be applied.
 *
 * @param {Record<string, unknown>} config - The configuration object, where keys are variant names and values are the required variant values.
 * @param {Record<string, unknown>} props - The props object from the component.
 * @returns {boolean} `true` if the configuration matches the props, `false` otherwise.
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
