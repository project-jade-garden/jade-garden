import { kebabCase } from "es-toolkit";
import type { JadeGarden } from "jade-garden";
import { cx } from "jade-garden/class-utils";
import type { ClassNameValue, CVA, NestedTraits, SVA } from "../types";

/* ================== Class Utils ================= */

// * Function overloads: https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads
/**
 * Returns a function that generates class names based on a CVA or SVA configuration.
 *
 * This function acts as a factory, detecting the configuration type (CVA or SVA) and returning a
 * tailored function (or object of functions) for generating class names. It ensures full
 * type-safety for both CVA and SVA consumers.
 *
 * @overload
 * @template {JadeGarden.Variant} V
 * @param {JadeGarden.CVAConfig<V>} config A CVA configuration object.
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
export function getClasses<V extends JadeGarden.Variant>(config: JadeGarden.CVAConfig<V>): JadeGarden.CVAReturnType<V>;

/**
 * Returns a function that generates class names based on a CVA or SVA configuration.
 *
 * This function acts as a factory, detecting the configuration type (CVA or SVA) and returning a
 * tailored function (or object of functions) for generating class names. It ensures full
 * type-safety for both CVA and SVA consumers.
 *
 * @overload
 * @template {JadeGarden.RecordClassValue} RCV
 * @template {JadeGarden.Variants<RCV>} VS
 * @param {JadeGarden.SVAConfig<RCV, VS>} config An SVA configuration object.
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
 *      medium: { content: "size-4" }
 *     }
 *   }
 * });
 * const { content, footer } = card({ size: "small" });
 * content(); // "card--content card--content__size--small"
 * ```
 */
export function getClasses<RCV extends JadeGarden.RecordClassValue, VS extends JadeGarden.Variants<RCV>>(
  config: JadeGarden.SVAConfig<RCV, VS>
): JadeGarden.SVAReturnType<RCV, VS>;

export function getClasses(config: CVA | SVA): any {
  const createClasses = (options: {
    compoundVariants: Record<string, any> | undefined;
    name: string | undefined;
    props: Record<string, any> | undefined;
    variants: Record<string, any> | undefined;
    slotKey?: string;
    slotProps?: Record<string, any>;
  }): string => {
    const { compoundVariants, name, props, slotKey, slotProps, variants } = options;
    if (!name) return cx(props?.class, props?.className);

    // * "prefix-name--slot"
    const prefix = `${kebabCase(name)}${slotKey ? `--${kebabCase(slotKey)}` : ""}`;

    // * Exit early if variants do not exist or is not an object
    if (typeof variants !== "object" || Array.isArray(variants)) {
      return cx(prefix, props?.class, props?.className);
    }

    let result = prefix;
    for (const variant of Object.keys(variants)) {
      const variantObj = variants[variant];
      if (!variantObj || typeof variantObj !== "object" || Object.keys(variantObj).length === 0) continue;

      const variantKey = slotProps?.[variant] ?? props?.[variant] ?? compoundVariants?.[variant];

      // * "__variant--variantKey"
      const suffix = variant ? `__${kebabCase(variant)}${variantKey ? `--${kebabCase(variantKey)}` : ""}` : "";

      // * "prefix-name--slot__variant--variantKey"
      result += ` ${prefix}${suffix}`;
    }

    return cx(result, props?.class, props?.className);
  };

  if ("base" in config) {
    return (props: any) => {
      const { name, variants, compoundVariants } = config;
      return createClasses({ compoundVariants, name, props, variants });
    };
  } else if ("slots" in config) {
    return (props: any) => {
      const { slots, name, variants, compoundVariants } = config;
      const slotsFns: Record<string, any> = {};

      // * Exit early if slots is not defined or does not have keys
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
 * Generates CSS class names and data attributes for a part of an anatomy.
 *
 * @template T - An interface defining the shape of the data attributes.
 * @returns {string} A string of merged class names and data attributes.
 */
export const traits = <T extends Record<string, NestedTraits | ClassNameValue>>(
  props?: JadeGarden.ClassProp & { data?: T }
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

  return cx(props?.class, props?.className, dataAttributes);
};
