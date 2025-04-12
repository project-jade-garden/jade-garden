import { clsx } from "clsx";
import type { ClassValue } from "./types";

/* ================== Class Utils ================= */

/**
 * Conditionally combines class names, allowing for exclusion and inclusion of specific classes.
 *
 * @template T - The type of the input class value, which can be a string, number, array, or object.
 * @param {T} input - The input class value to be processed by `cx`.
 * @param {string | string[]} [exclude] - Class names to exclude from the result.
 * @param {string | string[]} [include] - Class names to include in the result.
 * @returns {string} A string of class names, conditionally combined and modified based on the options.
 */
export const cm = <T extends ClassValue>(
  input: T,
  exclude?: string | string[],
  include?: string | string[]
): string => {
  if (typeof exclude === "undefined" && typeof include === "undefined") return clsx(input);

  let result = clsx(input).split(" ");

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
