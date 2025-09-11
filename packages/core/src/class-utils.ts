import { clsx } from "clsx";
import type { ClassProp, ClassStrings, ClassValue, Traits } from "./types";

/* -----------------------------------------------------------------------------
 * Class Utils
 * -----------------------------------------------------------------------------*/

/**
 * Conditionally combines class names, allowing for exclusion and inclusion of specific classes.
 *
 * @template T - The type of the input class value, which can be a string, number, array, or object.
 * @param {T} input - The input class value to be processed by `cx`.
 * @param {{[P in "include" | "exclude"]?: ClassStrings}} options - The options object to include or exclude class names from `input`.
 * @returns {string} A string of class names, conditionally combined and modified based on the options.
 */
export const cm = <T extends ClassValue>(
  input: T,
  options: { [P in "include" | "exclude"]?: ClassStrings }
): string => {
  let result = clsx(input).split(" ");

  if (typeof options?.include === "undefined" && typeof options?.exclude === "undefined") {
    return clsx(Array.from(new Set(result)));
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

  return clsx(Array.from(new Set(result)));
};

export {
  /**
   * **This is an alias for [clsx](https://github.com/lukeed/clsx)**.
   * - Conditionally generates a string of class names.
   * - Accepts multiple arguments of various types to build a class name string.
   *
   * @param {...*} args - Arguments to conditionally include in the class name string.
   * Arguments can be strings, numbers, arrays, or objects.
   * - Strings and numbers are directly appended.
   * - Arrays are recursively processed.
   * - Objects are processed where keys are class names and values are conditions.
   * @returns {string} A string of class names.
   */
  clsx as cx
} from "clsx";

export {
  /**
   * **This is an alias for [clsx/lite](https://github.com/lukeed/clsx/tree/master?tab=readme-ov-file#clsxlite)**.
   * - Conditionally generates a string of class names from string arguments.
   * - It concatenates the provided string arguments, separated by spaces,
   * excluding any falsy values (null, undefined, '', 0, false).
   *
   * @param {...string} args - String arguments to conditionally include in the class name string.
   * @returns {string} A string of class names.
   */
  clsx as cn
} from "clsx/lite";

/**
 * A utility to simplify the maintenance of prefixed CSS classes.
 *
 * It iterates through an array of inputs, applying a base prefix to each class string.
 * It also supports variant-specific prefixes, allowing for different styles based on a
 * condition (e.g., `dark:has-checked:bg-indigo-950`).
 *
 * @param {string} prefix - The base prefix to apply to each class name (e.g., 'has-checked').
 * @param {(string | { classes: ClassStrings; variant: string; })[]} inputs - An array of class names, which can be simple strings or objects for variants.
 * @returns {string} A single string of space-separated, prefixed class names.
 *
 * @example
 * ```ts
 * prefixClasses("has-checked", [
 *   "bg-indigo-50",
 *   "text-indigo-900",
 *   "ring-indigo-200",
 *   { variant: "dark", classes: ["bg-indigo-950", "text-indigo-200", "ring-indigo-900"] }
 * ]);
 * // "has-checked:bg-indigo-50 has-checked:text-indigo-900 has-checked:ring-indigo-200 dark:has-checked:bg-indigo-950 dark:has-checked:text-indigo-200 dark:has-checked:ring-indigo-900"
 * ```
 */
export const prefixClasses = (
  prefix: string,
  inputs: (
    | string
    | {
        classes: ClassStrings;
        variant: string;
      }
  )[]
) => {
  if (!inputs.length) return "";

  let output = "";

  for (const input of inputs) {
    if (typeof input === "string" && !!input) {
      output += `${output.length ? " " : ""}${prefix ? `${prefix}:${input}` : input}`;
    } else if (typeof input === "object" && !Array.isArray(input)) {
      const classPrefix = input.variant ? `${input.variant}:${prefix}:` : prefix ? `${prefix}:` : "";

      if (typeof input.classes === "string" && input.classes) {
        output += `${output.length ? " " : ""}${classPrefix + input.classes}`;
      } else if (Array.isArray(input.classes)) {
        for (const className of input.classes) {
          if (typeof className === "string" && className) {
            output += `${output.length ? " " : ""}${classPrefix + className}`;
          }
        }
      }
    }
  }

  return output;
};

/**
 * Generates CSS class names with HTML attributes.
 *
 * @template {Traits<Record<string, any>>} T - An interface defining the shape of the attributes.
 * @param {Record<string, T>} attributes - The values to convert.
 * @returns {string} A string of attributes.
 */
export const traits = <T extends Traits<Record<string, any>>>(attributes: Record<string, T>): string => {
  let result = "";

  if (typeof attributes === "object" && !Array.isArray(attributes) && Object.keys(attributes).length > 0) {
    for (const attributeKey of Object.keys(attributes)) {
      const attributeValues = attributes[attributeKey];

      for (const valueKey of Object.keys(attributeValues)) {
        const value = attributeValues[valueKey];

        if (typeof value === "object" && !Array.isArray(value)) {
          const attributeValue = value;

          for (const condition in value) {
            const prefix = result.length ? " " : "";

            if (Object.hasOwn(attributeValue, condition)) {
              const value = attributeValue[condition as keyof typeof attributeValue];
              const dataAttributeStr = `${attributeKey}-[${valueKey}=${condition}]`;

              if (Array.isArray(value)) {
                let values = "";
                for (const v of value) {
                  values += `${values.length ? " " : ""}${dataAttributeStr}:${v}`;
                }

                result += prefix + values;
              } else if (typeof value === "string" && value.length) {
                result += `${prefix}${dataAttributeStr}:${value}`;
              }
            }
          }
        } else if (typeof value !== "undefined") {
          const prefix = result.length ? " " : "";
          const dataAttributeStr = `${attributeKey}-[${valueKey}]`;

          if (Array.isArray(value)) {
            let attributeValues = "";
            for (const v of value) {
              attributeValues += `${attributeValues.length ? " " : ""}${dataAttributeStr}:${v}`;
            }

            result += prefix + attributeValues;
          } else if (typeof value === "string" && value.length) {
            result += `${prefix}${dataAttributeStr}:${value}`;
          }
        }
      }
    }
  }

  return result;
};
