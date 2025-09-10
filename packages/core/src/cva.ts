import { kebabCase } from "es-toolkit";
import { cx } from "./class-utils";
import type { ClassProp, CVA, CVAConfig, CVAReturnType, CVAVariants, PluginConfig, Variant } from "./types";
import { getVariantClasses, hasProps } from "./utils";

/* ====================== CVA ====================== */

/**
 * Creates a class variant authority (cva) function with a custom merge function.
 *
 * @param {MergeFn} mergeFn - The function to merge class names.
 * @returns {CVA} The cva function.
 */
export const createCVA = (options?: PluginConfig): CVA => {
  const { fileFormat = "ts", mergeFn = cx, prefix = "" } = options ?? {};

  return <V extends Variant>(styleConfig: CVAConfig<V>): CVAReturnType<V> => {
    const jg = (props?: V extends Variant ? CVAVariants<V> & ClassProp : ClassProp): string => {
      // * Exit early if `base` is not defined or has a falsey value
      if (typeof styleConfig?.base === "undefined" || !styleConfig.base) return mergeFn(props?.class, props?.className);

      const base = styleConfig.base;

      // * Exit early if variants do not exist or is not an object
      if (typeof styleConfig?.variants !== "object" || Array.isArray(styleConfig.variants)) {
        return mergeFn(base, props?.class, props?.className);
      }

      const variants = styleConfig.variants;
      const compoundVariants = Array.isArray(styleConfig?.compoundVariants) ? styleConfig.compoundVariants : [];
      const defaultVariants =
        typeof styleConfig?.defaultVariants === "object" && !Array.isArray(styleConfig.defaultVariants)
          ? styleConfig.defaultVariants
          : {};

      const defaultsAndProps = { ...defaultVariants, ...(props ?? {}) };

      const getCompoundVariantClasses = () => {
        if (!Array.isArray(compoundVariants)) return "";
        let result = "";

        for (const { class: variantClass, className: variantClassName, ...variantConfig } of compoundVariants) {
          if (hasProps(variantConfig, defaultsAndProps)) {
            const classValue = mergeFn(variantClass);
            const classNameValue = mergeFn(variantClassName);

            if (classValue) result += result.length === 0 ? classValue : ` ${classValue}`;
            if (classNameValue) result += result.length === 0 ? classNameValue : ` ${classNameValue}`;
          }
        }

        return result;
      };

      return mergeFn(
        base,
        getVariantClasses({ defaultVariants, mergeFn, props, variants }),
        getCompoundVariantClasses(),
        props?.class,
        props?.className
      );
    };

    const ujg = (props?: V extends Variant ? CVAVariants<V> & ClassProp : ClassProp): string => {
      const { compoundVariants, name, variants } = styleConfig;
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
        if (!variantObj || typeof variantObj !== "object" || Object.keys(variantObj).length === 0) continue;

        // @ts-expect-error: Element implicitly has an 'any' type because index expression is not of type 'number'.
        const variantType = props?.[variantName] ?? compoundVariants?.[variantName];

        // * "__variantName--variantType"
        const variant = variantName
          ? `__${kebabCase(variantName)}${variantType ? `--${kebabCase(variantType)}` : ""}`
          : "";

        // * "jgPrefix:componentName__variantName--variantType"
        result += ` ${component}${variant}`;
      }

      return mergeFn(result, props?.class, props?.className);
    };

    const component = (fileFormat !== "css" ? jg : ujg) as CVAReturnType<V>;
    component.pluginConfig = {
      fileFormat,
      mergeFn,
      prefix
    };
    component.styleConfig = styleConfig;

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
