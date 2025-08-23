import { cx } from "./class-utils";
import type { JadeGarden } from "./types";
import { getVariantClasses, hasProps } from "./utils";

/* ====================== CVA ====================== */

/**
 * Creates a class variant authority (cva) function with a custom merge function.
 *
 * @param {JadeGarden.MergeClassFn} mergeClass - The function to merge class names.
 * @returns {JadeGarden.CVA} The cva function.
 */
export const createCVA = (mergeClass: JadeGarden.MergeClassFn = cx): JadeGarden.CVA => {
  return <V extends JadeGarden.Variant>(config: JadeGarden.CVAConfig<V>): JadeGarden.CVAReturnType<V> => {
    const component = (
      props?: V extends JadeGarden.Variant ? JadeGarden.CVAVariants<V> & JadeGarden.ClassProp : JadeGarden.ClassProp
    ): string => {
      // * Exit early if `base` is not defined or has a falsey value
      if (typeof config?.base === "undefined" || !config.base) return mergeClass(props?.class, props?.className);

      const base = config.base;

      // * Exit early if variants do not exist or is not an object
      if (typeof config?.variants !== "object" || Array.isArray(config.variants)) {
        return mergeClass(base, props?.class, props?.className);
      }

      const variants = config.variants;
      const compoundVariants = Array.isArray(config?.compoundVariants) ? config.compoundVariants : [];
      const defaultVariants =
        typeof config?.defaultVariants === "object" && !Array.isArray(config.defaultVariants)
          ? config.defaultVariants
          : {};

      const defaultsAndProps = { ...defaultVariants, ...(props ?? {}) };

      const getCompoundVariantClasses = () => {
        if (!Array.isArray(compoundVariants)) return "";
        let result = "";

        for (const { class: variantClass, className: variantClassName, ...variantConfig } of compoundVariants) {
          if (hasProps(variantConfig, defaultsAndProps)) {
            const classValue = mergeClass(variantClass);
            const classNameValue = mergeClass(variantClassName);

            if (classValue) result += result.length === 0 ? classValue : ` ${classValue}`;
            if (classNameValue) result += result.length === 0 ? classNameValue : ` ${classNameValue}`;
          }
        }

        return result;
      };

      return mergeClass(
        base,
        getVariantClasses({ defaultVariants, mergeClass, props, variants }),
        getCompoundVariantClasses(),
        props?.class,
        props?.className
      );
    };

    return component;
  };
};

/**
 * Defines a type-safe structure for an CVA configuration object.
 * This utility allows you to define a CVA config with type checking.
 *
 * @returns {JadeGarden.CVAConfig<JadeGarden.Variant>} The CVA configuration object.
 *
 * @example
 * ```ts
 * const buttonConfig = defineCVA({
 *   base: "rounded-md",
 *   variants: {
 *     size: {
 *       small: "text-sm",
 *       medium: "text-base"
 *     }
 *   }
 * });
 * ```
 */
export const defineCVA = <V extends JadeGarden.Variant>(config: JadeGarden.CVAConfig<V>): JadeGarden.CVAConfig<V> =>
  config;

/**
 * Implementation of the class variant authority (cva) function using the default class merging function.
 *
 * @type {JadeGarden.CVA}
 *
 * @example
 * ```ts
 * const button = cva({
 *   base: "rounded-md",
 *   variants: {
 *     size: {
 *       small: "text-sm",
 *       medium: "text-base"
 *     },
 *     intent: {
 *       primary: "bg-blue-500",
 *       secondary: "bg-gray-200"
 *     }
 *   },
 *   compoundVariants: [
 *     {
 *       size: "small",
 *       intent: "primary",
 *       class: "font-bold"
 *     }
 *   ]
 *   defaultVariants: {
 *     size: "medium",
 *     intent: "primary"
 *   }
 * });
 *
 * const buttonClasses = button({ size: "small", intent: "primary" });
 * ```
 */
export const cva: JadeGarden.CVA = createCVA();
