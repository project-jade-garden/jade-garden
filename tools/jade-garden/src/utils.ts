import { camelCase, flatten, kebabCase, mergeWith, pascalCase, snakeCase } from "es-toolkit";
import type { MergeClassFn, RawConfig } from "./types";

/* ===================== Utils ===================== */

/**
 * String manipulation function that returns a string
 * in a `camelCase`, `kebabCase`, `pascalCase`, or `snakeCase` convention.
 * Defaults to `kebabCase` if no case convention is provided.
 *
 * @param {string} str - The string to convert.
 * @param {RawConfig["caseConvention"]} [caseConvention] - The desired case convention.
 * @returns {string} The converted string.
 *
 * @see [camelCase](https://es-toolkit.slash.page/reference/string/camelCase.html)
 * @see [kebabCase](https://es-toolkit.slash.page/reference/string/kebabCase.html)
 * @see [pascalCase](https://es-toolkit.slash.page/reference/string/pascalCase.html)
 * @see [snakeCase](https://es-toolkit.slash.page/reference/string/snakeCase.html)
 */
export const convertCase = (str: string, caseConvention?: RawConfig["caseConvention"]): string => {
  switch (caseConvention) {
    case "camel":
      return camelCase(str);
    case "kebab":
      return kebabCase(str);
    case "pascal":
      return pascalCase(str);
    case "snake":
      return snakeCase(str);
    default:
      return kebabCase(str);
  }
};

/**
 * Converts a boolean to its string representation ("true" or "false"), or returns the value as is.
 * Treats 0 as "0".
 *
 * @template T - The type of the value.
 * @param {T} value - The value to convert.
 * @returns {string | T} - The string representation of the boolean, or the original value.
 */
const falsyToString = <T>(value: T): string | T =>
  typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;

/**
 * Returns the class names for the `raw` method in `cva` and `sva` functions.
 * Constructs a raw class name based on the component's name, slot, and variants.
 *
 * @param {object} options - The options object.
 * @param {Record<string, any> | undefined} options.defaultVariants - The default variants object.
 * @param {MergeClassFn} options.mergeClass - The function to merge class names.
 * @param {string | undefined} options.name - The component name.
 * @param {Record<string, any> | undefined} options.props - The props object.
 * @param {RawConfig} options.rawConfig - The raw configuration object.
 * @param {Record<string, any> | undefined} options.variants - The variants object.
 * @param {string | undefined} [options.slotKey] - The slot key (for `sva`).
 * @param {Record<string, any> | undefined} [options.slotProps] - The slot props (for `sva`).
 * @returns {string} A string of raw class names.
 */
export const getRawClasses = (options: {
  defaultVariants: Record<string, any> | undefined;
  mergeClass: MergeClassFn;
  name: string | undefined;
  props: Record<string, any> | undefined;
  rawConfig: RawConfig;
  variants: Record<string, any> | undefined;
  slotKey?: string;
  slotProps?: Record<string, any>;
}): string => {
  const { defaultVariants, mergeClass, name, props, rawConfig, slotKey, slotProps, variants } = options;
  if (!name) return "";

  const cc = rawConfig.caseConvention;
  const pf = rawConfig.prefix;

  const componentName = convertCase(`${pf ? `${pf}-` : ""}${name}`, cc);
  const slotName = slotKey ? `--${convertCase(slotKey, cc)}` : "";

  // * "prefix-name--slot"
  const prefix = `${componentName}${slotName}`;

  // * Exit early if variants do not exist or is not an object
  if (typeof variants !== "object" || (typeof variants === "object" && Array.isArray(variants))) {
    return mergeClass(prefix, props?.["class"], props?.["className"]);
  }

  let result = prefix;

  for (const variant of Object.keys(variants)) {
    const variantObj = (variants as Record<string, any>)[variant];
    if (!variantObj || typeof variantObj !== "object" || Object.keys(variantObj).length === 0) continue;

    const variantKey = slotProps?.[variant] ?? props?.[variant] ?? defaultVariants?.[variant];

    // * "__variant--variantKey"
    const suffix = variant
      ? `__${convertCase(variant, cc)}${variantKey ? `--${convertCase(variantKey, cc)}` : ""}`
      : "";

    // * "prefix-name--slot__variant--variantKey"
    result += ` ${prefix}${suffix}`;
  }

  return mergeClass(result, props?.["class"], props?.["className"]);
};

/**
 * Retrieves variant classes based on provided configuration and props.
 *
 * @param {object} options - The options object.
 * @param {Record<string, any> | undefined} options.defaultVariants - The default variants object.
 * @param {MergeClassFn} options.mergeClass - The function to merge class names.
 * @param {Record<string, any> | undefined} options.props - The props object.
 * @param {Record<string, any> | undefined} options.variants - The variants object.
 * @param {string | undefined} [options.slotKey] - The slot key (for `sva`).
 * @param {Record<string, any> | undefined} [options.slotProps] - The slot props (for `sva`).
 * @returns {string} A string of variant class names.
 */
export const getVariantClasses = (options: {
  defaultVariants: Record<string, any> | undefined;
  mergeClass: MergeClassFn;
  props: Record<string, any> | undefined;
  variants: Record<string, any> | undefined;
  slotKey?: string;
  slotProps?: Record<string, any>;
}): string => {
  const { defaultVariants, mergeClass, props, slotKey, slotProps, variants } = options;
  if (!variants || typeof variants !== "object" || Array.isArray(variants)) return "";

  let result = "";

  for (const variant of Object.keys(variants)) {
    const variantObj = (variants as Record<string, any>)[variant];
    if (!variantObj || typeof variantObj !== "object" || Object.keys(variantObj).length === 0) continue;

    const variantKey = slotProps?.[variant] ?? props?.[variant] ?? defaultVariants?.[variant];
    const validKey = variantKey !== undefined ? falsyToString(variantKey) : variantKey;
    const value = slotKey ? mergeClass(variantObj[validKey ?? "false"]?.[slotKey]) : mergeClass(variantObj[validKey]);

    if (value) result += result.length === 0 ? value : ` ${value}`;
  }

  return result;
};

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
 * Merges two configuration objects, handling specific cases for compound slots, compound variants,
 * base classes, default variants, and slots.
 *
 * @param {Record<PropertyKey, any>} target - The target configuration object.
 * @param {Record<PropertyKey, any>} source - The source configuration object.
 * @returns {Record<PropertyKey, any>} The merged configuration object.
 *
 * @description
 * - Merges arrays of compound slots or compound variants by replacing the target with the source array.
 * - Merges strings by combining them with unique class names.
 * - Merges plain objects recursively.
 * - Merges other arrays by combining them with unique values.
 * - Excludes merging for base, defaultVariants, and slots keys.
 */
export const mergeConfig = (
  target: Record<PropertyKey, any>,
  source: Record<PropertyKey, any>
): Record<PropertyKey, any> =>
  mergeWith(target, source, (targetValue, sourceValue, key) => {
    if (
      ["compoundSlots", "compoundVariants"].includes(key) &&
      Array.isArray(sourceValue) &&
      Array.isArray(targetValue)
    ) {
      return sourceValue;
    }

    // * Intended to work for variants only
    if (!["base", "defaultVariants", "slots"].includes(key)) {
      if (typeof targetValue === "string" && typeof sourceValue === "string") {
        return sourceValue;
      }

      if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
        return Array.from(new Set(flatten(sourceValue, Number.POSITIVE_INFINITY)));
      }

      if (typeof targetValue === "object" && typeof sourceValue === "object") {
        return mergeConfig(targetValue, sourceValue);
      }
    }
  });
