import type { ClassStrings, ClassValue, Traits } from "./types";

/* -----------------------------------------------------------------------------
 * Class Utils
 * -----------------------------------------------------------------------------*/

/**
 * Conditionally combines class names, allowing for the inclusion or exclusion of specific classes.
 * It first processes the input using `cx` to handle various data types, then filters the resulting
 * class names based on the provided `include` and `exclude` options.
 *
 * @template T - The type of the input, extending {@link ClassValue}.
 * @param {T} input - The input to be processed and filtered. This can be a string, number, array, or object.
 * @param {{ include?: ClassStrings; exclude?: ClassStrings; }} options - An object containing options to include or exclude class names from the input.
 * @returns {string} A string of class names, conditionally combined and modified based on the options.
 */
export const cm = <T extends ClassValue>(
  input: T,
  options: { include?: ClassStrings; exclude?: ClassStrings }
): string => {
  let result = cx(input).split(" ");

  if (typeof options?.include === "undefined" && typeof options?.exclude === "undefined") {
    return Array.from(new Set(result)).join(" ");
  }

  const { include, exclude } = options;

  if (exclude) {
    if (typeof exclude === "string") {
      result = result.filter((item) => !item.includes(exclude));
    } else if (Array.isArray(exclude)) {
      result = result.filter((item) => !exclude.includes(item));
    }
  }

  if (include) {
    if (typeof include === "string") {
      result.push(include);
    } else if (Array.isArray(include)) {
      result.push(...include);
    }
  }

  return cx(Array.from(new Set(result)));
};

/**
 * A reimplementation of [clsx/lite](https://github.com/lukeed/clsx/tree/master?tab=readme-ov-file#clsxlite).
 * This function conditionally generates a string of class names from a list of string arguments.
 * It concatenates the provided string arguments, separated by spaces, while excluding any falsy values (e.g., `null`, `undefined`, `''`, `0`, `false`).
 *
 * @param {...ClassValue[]} inputs - String arguments to conditionally include in the class name string.
 * @returns {string} A single string of class names.
 */
export const cn = (...inputs: ClassValue[]): string => {
  let str = "",
    i = 0,
    arg: ClassValue;

  while (i < inputs.length) {
    arg = inputs[i++];
    if (arg && typeof arg === "string") {
      str += `${str ? " " : ""}${arg}`;
    }
  }

  return str;
};

/**
 * A reimplementation of [clsx](https://github.com/lukeed/clsx).
 * Conditionally generates a string of class names. It accepts multiple arguments of various types to build the final class name string.
 *
 * - **Strings and numbers** are directly appended.
 * - **Arrays** are recursively processed.
 * - **Objects** are processed where keys are class names and values are conditions; only keys with truthy values are included.
 *
 * @param {...ClassValue[]} inputs - Arguments to conditionally include in the class name string.
 * @returns {string} A single string of class names.
 */
export const cx = (...inputs: ClassValue[]): string => {
  let i = 0,
    arg: ClassValue,
    val: string;
  let str = "";

  while (i < inputs.length) {
    arg = inputs[i++];
    if (arg) {
      if (typeof arg === "string" || typeof arg === "number" || typeof arg === "bigint") {
        str += `${str && " "}${arg}`;
      } else if (Array.isArray(arg)) {
        val = cx(...arg);
        if (val) str += `${str && " "}${val}`;
      } else if (typeof arg === "object") {
        for (val in arg) {
          if (Object.hasOwn(arg, val) && arg[val]) {
            str += `${str && " "}${val}`;
          }
        }
      }
    }
  }

  return str;
};

/**
 * A utility to simplify the maintenance of prefixed CSS classes.
 *
 * It iterates through an array of inputs, applying a base prefix to each class string.
 * It also supports conditional prefixes, allowing for different styles based on a
 * condition (e.g., `dark:has-checked:bg-indigo-950`).
 *
 * @param {string} prefix - The base prefix to apply to each class name (e.g., 'has-checked').
 * @param {(string | { classes: ClassStrings; condition: string; })[]} inputs - An array of class names, which can be simple strings or objects for conditions.
 * @returns {string} A single string of space-separated, prefixed class names.
 *
 * @example
 * ```ts
 * prefixes("has-checked", [
 *   "bg-indigo-50",
 *   "text-indigo-900",
 *   "ring-indigo-200",
 *   { condition: "dark", classes: ["bg-indigo-950", "text-indigo-200", "ring-indigo-900"] }
 * ]);
 * // "has-checked:bg-indigo-50 has-checked:text-indigo-900 has-checked:ring-indigo-200 dark:has-checked:bg-indigo-950 dark:has-checked:text-indigo-200 dark:has-checked:ring-indigo-900"
 * ```
 */
export const prefixes = (
  prefix: string,
  inputs: (
    | string
    | {
        classes: ClassStrings;
        condition: string;
      }
  )[]
) => {
  if (!inputs.length) return "";

  let output = "";

  for (const input of inputs) {
    if (typeof input === "string" && !!input) {
      output += `${!output.length ? "" : " "}${prefix ? `${prefix}:${input}` : input}`;
    } else if (typeof input === "object" && !Array.isArray(input)) {
      const classPrefix = input.condition ? `${input.condition}:${prefix}:` : prefix ? `${prefix}:` : "";

      if (typeof input.classes === "string" && input.classes) {
        output += `${!output.length ? "" : " "}${classPrefix + input.classes}`;
      } else if (Array.isArray(input.classes)) {
        for (const className of input.classes) {
          if (typeof className === "string" && className) {
            output += `${!output.length ? "" : " "}${classPrefix + className}`;
          }
        }
      }
    }
  }

  return output;
};

/**
 * A helper function to generate HTML attribute selectors.
 *
 * @template T - An object type where keys represent HTML attribute names and values are the allowed types for those attributes.
 * @param {{ data: Traits<T> }} attributes - An object that maps HTML attribute names to their possible values.
 * @returns {string} A string of HTML attribute selectors.
 *
 * @example
 * ```ts
 * const elementTraits = traits({
 *   data: {
 *     value: "my-value-123",
 *     custom: "my-class",
 *     index: {
 *       0: "not-active",
 *       1: "is-active"
 *     }
 *   }
 * });
 * // data-[value]:my-value-123 data-[custom]:my-class data-[index="0"]:not-active data-[index="1"]:active
 * ```
 */
export const traits = <T extends Traits<Record<string, Record<string, any>>>>(attributes: T): string => {
  let result = "";

  if (typeof attributes === "object" && !Array.isArray(attributes)) {
    for (const attributeKey of Object.keys(attributes)) {
      const attributeValues = attributes[attributeKey];

      if (attributeValues) {
        for (const valueKey of Object.keys(attributeValues)) {
          const value = attributeValues[valueKey];

          if (typeof value === "object" && !Array.isArray(value)) {
            const attributeValue = value;

            for (const condition in value) {
              const prefix = !result.length ? "" : " ";

              if (Object.hasOwn(attributeValue, condition)) {
                const value = attributeValue[condition as keyof typeof attributeValue];
                const dataAttributeStr = `${attributeKey}-[${valueKey}=${condition}]`;

                if (Array.isArray(value)) {
                  let values = "";
                  for (const v of value) {
                    values += `${!values.length ? "" : " "}${dataAttributeStr}:${v}`;
                  }

                  result += prefix + values;
                } else if (typeof value === "string" && value.length > 0) {
                  result += `${prefix}${dataAttributeStr}:${value}`;
                }
              }
            }
          } else if (typeof value !== "undefined") {
            const prefix = !result.length ? "" : " ";
            const dataAttributeStr = `${attributeKey}-[${valueKey}]`;

            if (Array.isArray(value)) {
              let attributeValues = "";
              for (const v of value) {
                attributeValues += `${!attributeValues.length ? "" : " "}${dataAttributeStr}:${v}`;
              }

              result += prefix + attributeValues;
            } else if (typeof value === "string" && value.length > 0) {
              result += `${prefix}${dataAttributeStr}:${value}`;
            }
          }
        }
      }
    }
  }

  return result;
};
