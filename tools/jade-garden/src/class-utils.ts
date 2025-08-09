import { clsx } from "clsx";
import type { ClassNameValue, ClassProp, ClassValue, NestedTraits } from "./types";

/* ================== Class Utils ================= */

/**
 * Conditionally combines class names, allowing for exclusion and inclusion of specific classes.
 *
 * @template T - The type of the input class value, which can be a string, number, array, or object.
 * @param {T} input - The input class value to be processed by `cx`.
 * @param {ClassNameValue} [exclude] - Class names to exclude from the result.
 * @param {ClassNameValue} [include] - Class names to include in the result.
 * @returns {string} A string of class names, conditionally combined and modified based on the options.
 */
export const cm = <T extends ClassValue>(input: T, exclude?: ClassNameValue, include?: ClassNameValue): string => {
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
 * Generates CSS class names and data attributes for a part of an anatomy.
 *
 * @template T - An interface defining the shape of the data attributes.
 * @returns {string} A string of merged class names and data attributes.
 */
export const traits = <T extends Record<string, NestedTraits | ClassNameValue>>(
  props?: ClassProp & { data?: T }
): string => {
  const appendDataAttribute = (
    dataAttributes: string,
    attributeKey: string,
    attributeValue: ClassNameValue
  ): string => {
    const prefix = dataAttributes.length ? " " : "";
    const dataAttributeStr = `data-[${attributeKey}]`;

    if (Array.isArray(attributeValue)) {
      return dataAttributes + prefix + attributeValue.map((v) => `${dataAttributeStr}:${v}`).join(" ");
    }

    if (typeof attributeValue === "string" && attributeValue.length) {
      return `${dataAttributes}${prefix}${dataAttributeStr}:${attributeValue}`;
    }

    return dataAttributes;
  };

  const appendConditionalDataAttribute = (
    dataAttributes: string,
    attributeKey: string,
    attributeValue: NestedTraits
  ): string => {
    let result = dataAttributes;

    for (const condition in attributeValue) {
      const prefix = result.length ? " " : "";

      if (Object.hasOwn(attributeValue, condition)) {
        const value = attributeValue[condition];
        const dataAttributeStr = `data-[${attributeKey}=${condition}]`;
        if (Array.isArray(value)) {
          result += prefix + value.map((v) => `${dataAttributeStr}:${v}`).join(" ");
        }

        if (typeof value === "string" && value.length) {
          result += `${prefix}${dataAttributeStr}:${value}`;
        }
      }
    }

    return result;
  };

  let dataAttributes = "";

  if (typeof props?.data === "object" && !Array.isArray(props?.data) && Object.keys(props?.data).length > 0) {
    for (const key of Object.keys(props?.data)) {
      const value = props?.data[key];

      if (typeof value === "object" && !Array.isArray(value)) {
        dataAttributes = appendConditionalDataAttribute(dataAttributes, key, value);
      } else if (typeof value !== "undefined") {
        dataAttributes = appendDataAttribute(dataAttributes, key, value);
      }
    }
  }

  return clsx(props?.class, props?.className, dataAttributes);
};
