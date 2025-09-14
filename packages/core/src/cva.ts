import { cx } from "./class-utils";
import type { ClassValue, CreateOptions } from "./types";
import { type ClassProp, falsyToString, hasProps, kebabCase, type MetaConfig, type StringToBoolean } from "./utils";

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

/* -----------------------------------------------------------------------------
 * Types
 * -----------------------------------------------------------------------------*/

/**
 * Represents the variant configurations for `cva`.
 * Each variant is a record of class names, keyed by variant values.
 *
 * @example
 * ```ts
 * {
 *   size: {
 *     small: "text-sm py-1 px-2",
 *     medium: "text-base py-2 px-4",
 *   },
 *   intent: {
 *     primary: "bg-blue-500 text-white",
 *     secondary: "bg-gray-200 text-gray-800",
 *   }
 * }
 * ```
 */
type Variant = Record<string, Record<string, ClassValue>>;

/**
 * Represents the schema for variant props in `cva`.
 * Each variant prop is typed as a StringToBoolean of the corresponding variant value keys.
 *
 * @template V - The type of variants.
 * @example
 * ```ts
 * type ButtonVariants = CVAVariants<{
 *   size: { small: string; medium: string };
 *   intent: { primary: string; secondary: string };
 * }>;
 * // ButtonVariants = { size?: "small" | "medium"; intent?: "primary" | "secondary" };
 * ```
 */
type CVAVariants<V extends Variant> = {
  [K in keyof V]?: StringToBoolean<keyof V[K]>;
};

/**
 * Represents the configuration object for the `cva` function.
 *
 * @template V - The type of variants.
 * @property {string=} name - Optional component name.
 * @property {ClassValue=} base - The base class name for the component.
 * @property {V=} variants - Variants allow you to create multiple versions of the same component.
 * @property {(V extends Variant ? (CVAVariants<V> | { [K in keyof V]?: StringToBoolean<keyof V[K]> | StringToBoolean<keyof V[K]>[]; }) & ClassProp : ClassProp)[]=} compoundVariants - Compound variants allow you to apply classes to multiple variants at once.
 * @property {CVAVariants<V>=} defaultVariants - Default variants allow you to set default variants for a component.
 *
 * @example
 * ```ts
 * const buttonConfig: CVAConfig<{
 *   size: { small: string; medium: string };
 *   intent: { primary: string; secondary: string };
 * }> = {
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
 *   ],
 *   defaultVariants: {
 *     size: "medium",
 *     intent: "primary"
 *   }
 * };
 * ```
 */
type CVAConfig<V extends Variant> = {
  /**
   * The name of the cva component.
   */
  name?: string;
  /**
   * The base class name for the component.
   */
  base?: ClassValue;
  /**
   * Variants allow you to create multiple versions of the same component.
   */
  variants?: V;
  /**
   * Compound variants allow you to apply classes to multiple variants at once.
   */
  compoundVariants?: (V extends Variant
    ? (
        | CVAVariants<V>
        | {
            [K in keyof V]?: StringToBoolean<keyof V[K]> | StringToBoolean<keyof V[K]>[];
          }
      ) &
        ClassProp
    : ClassProp)[];
  /**
   * Default variants allow you to set default variants for a component.
   */
  defaultVariants?: CVAVariants<V>;
};

/**
 * Represents the return type of the CVA function.
 *
 * @template V - The type of variants.
 * @returns {((props?: V extends Variant ? CVAVariants<V> & ClassProp : ClassProp) => string)& { metaConfig: MetaConfig; styleConfig: CVAConfig<V>; }} A function that generates class names based on props.
 */
type CVAComponent<V extends Variant> = ((
  props?: V extends Variant ? CVAVariants<V> & ClassProp : ClassProp
) => string) & {
  metaConfig: MetaConfig;
  styleConfig: CVAConfig<V>;
};

/**
 * Creates a class variant authority (cva) function.
 * Generates class names based on provided variants and props.
 *
 * @template V - The type of variants.
 * @param {CVAConfig<V>} styleConfig - The cva configuration object.
 * @param {MetaConfig} [metaConfig] - Add JSDoc and CSS comments to components when generating with `unplugin-jade-garden`.
 * @returns {CVAComponent<V>} A function that generates class names based on props.
 */
type CVA = <V extends Variant = {}>(styleConfig: CVAConfig<V>, metaConfig?: MetaConfig) => CVAComponent<V>;
