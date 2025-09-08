import { clsx } from "clsx";
import { kebabCase } from "es-toolkit";
import type { ClassStrings, ClassValue, JadeGarden, Traits } from "./types";

/* ================== Class Utils ================= */

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

// * Function overloads: https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads
/**
 * **CVA**
 *
 * Returns a function that generates class names based on a CVA or SVA configuration.
 *
 * This function acts as a factory, detecting the configuration type (CVA or SVA) and returning a
 * tailored function (or object of functions) for generating class names. It ensures full
 * type-safety for both CVA and SVA consumers.
 *
 * @overload
 * @template {JadeGarden.Variant} V
 * @param {JadeGarden.CVAConfig<V>} styleConfig A CVA configuration object.
 * @param {Omit<JadeGarden.ClassNameConfig, "twPrefix">} classNameConfig A shared (`unplugin-jade-garden`) options object for overriding generated classes.
 * @returns {JadeGarden.CVAReturnType<V>} A function that takes props and returns a class name string.
 *
 * @example
 * ```ts
 * // CVA
 * const button = getClasses({
 *   name: "button",
 *   base: "button",
 *   variants: {
 *     size: { small: "size-2", medium: "size-4" },
 *     variant: { primary: "bg-red-500", secondary: "bg-blue-500" }
 *   }
 * });
 * button({ size: "small", variant: "primary" }); // "button button__size--small button__variant--primary"
 * ```
 */
export function getClasses<V extends JadeGarden.Variant>(
  styleConfig: JadeGarden.CVAConfig<V>,
  classNameConfig?: Omit<JadeGarden.ClassNameConfig, "twPrefix">
): JadeGarden.CVAReturnType<V>;

/**
 * **SVA**
 *
 * Returns a function that generates class names based on a CVA or SVA configuration.
 *
 * This function acts as a factory, detecting the configuration type (CVA or SVA) and returning a
 * tailored function (or object of functions) for generating class names. It ensures full
 * type-safety for both CVA and SVA consumers.
 *
 * @overload
 * @template {JadeGarden.RecordClassValue} RCV
 * @template {JadeGarden.Variants<RCV>} VS
 * @param {JadeGarden.SVAConfig<RCV, VS>} styleConfig An SVA configuration object.
 * @param {Omit<JadeGarden.ClassNameConfig, "twPrefix">} classNameConfig A shared (`unplugin-jade-garden`) options object for overriding generated classes.
 * @returns {JadeGarden.SVAReturnType<RCV, VS>} An object of functions where each key corresponds to a slot.
 *
 * @example
 * ```ts
 * // SVA
 * const card = getClasses({
 *   name: "card",
 *   slots: { content: "content-class", footer: "footer-class" },
 *   variants: {
 *     size: {
 *       small: { content: "size-2" },
 *       medium: { content: "size-4" }
 *     }
 *   }
 * });
 * const { content, footer } = card({ size: "small" });
 * content(); // "card--content card--content__size--small"
 * ```
 */
export function getClasses<RCV extends JadeGarden.RecordClassValue, VS extends JadeGarden.Variants<RCV>>(
  styleConfig: JadeGarden.SVAConfig<RCV, VS>,
  classNameConfig?: Omit<JadeGarden.ClassNameConfig, "twPrefix">
): JadeGarden.SVAReturnType<RCV, VS>;

export function getClasses(
  styleConfig: JadeGarden.CVAConfig<any> | JadeGarden.SVAConfig<any, any>,
  classNameConfig?: Omit<JadeGarden.ClassNameConfig, "twPrefix">
): any {
  const mergeFn = classNameConfig?.mergeFn ?? clsx;
  const jgPrefix = classNameConfig?.jgPrefix;

  const createClasses = (options: {
    compoundVariants: Record<string, any> | undefined;
    name: string | undefined;
    props: Record<string, any> | undefined;
    variants: Record<string, any> | undefined;
    slotKey?: string;
    slotProps?: Record<string, any>;
  }): string => {
    const { compoundVariants, name, props, slotKey, slotProps, variants } = options;
    if (!name) return mergeFn(props?.class, props?.className);

    // * "jgPrefix:componentName--componentSlot"
    const component = `${jgPrefix ? `${jgPrefix}:` : ""}${kebabCase(name)}${slotKey ? `--${kebabCase(slotKey)}` : ""}`;

    // * Exit early if variants do not exist or is not an object
    if (typeof variants !== "object" || Array.isArray(variants))
      return mergeFn(component, props?.class, props?.className);

    let result = component;
    for (const variantName of Object.keys(variants)) {
      const variantObj = variants[variantName];
      if (!variantObj || typeof variantObj !== "object" || Object.keys(variantObj).length === 0) continue;

      const variantType = slotProps?.[variantName] ?? props?.[variantName] ?? compoundVariants?.[variantName];

      // * "__variantName--variantType"
      const variant = variantName
        ? `__${kebabCase(variantName)}${variantType ? `--${kebabCase(variantType)}` : ""}`
        : "";

      // * "jgPrefix:componentName--componentSlot__variantName--variantType"
      result += ` ${component}${variant}`;
    }

    return mergeFn(result, props?.class, props?.className);
  };

  if ("base" in styleConfig) {
    return (props: any) => {
      const { name, variants, compoundVariants } = styleConfig;
      return createClasses({ compoundVariants, name, props, variants });
    };
  } else if ("slots" in styleConfig) {
    return (props: any) => {
      const { slots, name, variants, compoundVariants } = styleConfig;
      const slotsFns: Record<string, any> = {};

      // * Exit early if slots are not defined or do not have keys
      if (!slots || Object.keys(slots).length === 0) return slotsFns;

      // * Set `slotsFns`
      for (const slotKey of Object.keys(slots)) {
        slotsFns[slotKey] = (slotProps: any = {}) => {
          return createClasses({ compoundVariants, name, props, variants, slotKey, slotProps });
        };
      }

      return slotsFns;
    };
  }
}

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
 * Generates CSS class names with data attributes for a part of an anatomy.
 *
 * @template T - An interface defining the shape of the data attributes.
 * @returns {string} A string of merged class names and data attributes.
 */
export const traits = <T extends Traits<Record<string, any>>>(
  options?: JadeGarden.ClassProp & { data?: T }
): string => {
  const appendDataAttribute = (dataAttributes: string, attributeKey: string, attributeValue: ClassStrings): string => {
    const prefix = dataAttributes.length ? " " : "";
    const dataAttributeStr = `data-[${attributeKey}]`;

    if (Array.isArray(attributeValue)) {
      let attributeValues = "";
      for (const v of attributeValue) {
        attributeValues += `${attributeValues.length ? " " : ""}${dataAttributeStr}:${v}`;
      }

      return dataAttributes + prefix + attributeValues;
    }

    if (typeof attributeValue === "string" && attributeValue.length) {
      return `${dataAttributes + prefix + dataAttributeStr}:${attributeValue}`;
    }

    return dataAttributes;
  };

  const appendConditionalDataAttribute = (
    dataAttributes: string,
    attributeKey: string,
    attributeValue: Partial<Record<string, ClassStrings>>
  ): string => {
    let result = dataAttributes;

    for (const condition in attributeValue) {
      const prefix = result.length ? " " : "";

      if (Object.hasOwn(attributeValue, condition)) {
        const value = attributeValue[condition];
        const dataAttributeStr = `data-[${attributeKey}=${condition}]`;

        if (Array.isArray(value)) {
          let values = "";
          for (const v of value) {
            values += `${values.length ? " " : ""}${dataAttributeStr}:${v}`;
          }

          result += prefix + values;
        } else if (typeof value === "string" && value.length) {
          result += `${prefix + dataAttributeStr}:${value}`;
        }
      }
    }

    return result;
  };

  let dataAttributes = "";

  if (typeof options?.data === "object" && !Array.isArray(options?.data) && Object.keys(options?.data).length > 0) {
    for (const key of Object.keys(options?.data)) {
      const value = options?.data[key];

      if (typeof value === "object" && !Array.isArray(value)) {
        dataAttributes = appendConditionalDataAttribute(
          dataAttributes,
          key,
          value as Partial<Record<string, ClassStrings>>
        );
      } else if (typeof value !== "undefined") {
        dataAttributes = appendDataAttribute(dataAttributes, key, value as ClassStrings);
      }
    }
  }

  return clsx(options?.class, options?.className, dataAttributes);
};
