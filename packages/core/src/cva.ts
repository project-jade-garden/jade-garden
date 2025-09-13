import { cx } from "./class-utils";
import type { ClassProp, CreateOptions, CVA, CVAComponent, CVAConfig, CVAVariants, MetaConfig, Variant } from "./types";
import { falsyToString, hasProps, kebabCase } from "./utils";

/* -----------------------------------------------------------------------------
 * CVA
 * -----------------------------------------------------------------------------*/

/**
 * Creates a class variant authority (cva) function with a custom merge function.
 *
 * @param {CreateOptions} [options] - Options to manage class names.
 * @returns {CVA} The cva function.
 */
export const createCVA = (options?: CreateOptions): CVA => {
  const { mergeFn = cx, prefix = "", useStylesheet = false } = options ?? {};

  return <V extends Variant>(styleConfig: CVAConfig<V>, metaConfig?: MetaConfig): CVAComponent<V> => {
    const jg = (props?: V extends Variant ? CVAVariants<V> & ClassProp : ClassProp): string => {
      // * Exit early if `base` is not defined or has a falsy value
      if (!styleConfig?.base) return mergeFn(props?.class, props?.className);

      const base = styleConfig.base;

      // * Exit early if variants do not exist or is not an object
      if (typeof styleConfig?.variants !== "object" || Array.isArray(styleConfig.variants)) {
        return mergeFn(base, props?.class, props?.className);
      }

      const variants = styleConfig.variants;
      const compoundVariants = Array.isArray(styleConfig?.compoundVariants) ? styleConfig.compoundVariants : [];
      const defaultVariants: CVAVariants<V> =
        typeof styleConfig?.defaultVariants === "object" && !Array.isArray(styleConfig.defaultVariants)
          ? styleConfig.defaultVariants
          : {};

      const getVariantClasses = () => {
        if (typeof variants !== "object" || Array.isArray(variants)) return "";
        let result = "";

        for (const variant of Object.keys(variants)) {
          const variantObj = variants[variant];
          if (typeof variantObj !== "object" || Array.isArray(variantObj)) continue;

          const variantKey = props?.[variant] ?? defaultVariants?.[variant];
          const validKey = falsyToString(variantKey) ?? "false";
          const value = mergeFn(variantObj[validKey as keyof (typeof variants)[typeof variant]]);

          if (value) result += !result.length ? value : ` ${value}`;
        }

        return result;
      };

      const getCompoundVariantClasses = () => {
        if (!Array.isArray(compoundVariants)) return "";
        let result = "";

        for (const { class: variantClass, className: variantClassName, ...variantConfig } of compoundVariants) {
          if (hasProps(variantConfig, { ...defaultVariants, ...(props ?? {}) })) {
            const classValue = mergeFn(variantClass);
            const classNameValue = mergeFn(variantClassName);

            if (classValue) result += !result.length ? classValue : ` ${classValue}`;
            if (classNameValue) result += !result.length ? classNameValue : ` ${classNameValue}`;
          }
        }

        return result;
      };

      return mergeFn(base, getVariantClasses(), getCompoundVariantClasses(), props?.class, props?.className);
    };

    const ujg = (props?: V extends Variant ? CVAVariants<V> & ClassProp : ClassProp): string => {
      const { name, variants } = styleConfig;
      if (!name) return mergeFn(props?.class, props?.className);

      // * "jgPrefix:componentName"
      const component = `${prefix ? `${prefix}:` : ""}${kebabCase(name)}`;

      // * Exit early if variants do not exist or is not an object
      if (typeof variants !== "object" || Array.isArray(variants)) {
        return mergeFn(component, props?.class, props?.className);
      }

      let result = component;
      for (const variantName of Object.keys(variants)) {
        const variantObj = variants[variantName];

        if (variantObj && typeof variantObj === "object") {
          const variantType = props?.[variantName];

          if (typeof variantType === "string" && variantType in variantObj) {
            // * "jgPrefix:componentName__variantName--variantType"
            result += ` ${component}__${kebabCase(variantName)}--${kebabCase(variantType)}`;
          }
        }
      }

      return mergeFn(result, props?.class, props?.className);
    };

    const component = (useStylesheet ? ujg : jg) as CVAComponent<V>;

    component.styleConfig = styleConfig;
    component.metaConfig = metaConfig ?? {};

    return component;
  };
};

/**
 * Implementation of the class variant authority (cva) function using the default class merging function.
 *
 * @type {CVA}
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
export const cva: CVA = createCVA();
