import { cx } from "./class-utils";
import type { ClassProp, ClassValue, MergeClassFn, RawConfig, RecordClassValue, StringToBoolean } from "./types";
import { getRawClasses, getVariantClasses, hasProps } from "./utils";

/* ===================== CVA ===================== */

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
type Variant = Record<string, RecordClassValue>;

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
 * @returns {(props?: V extends Variant ? CVAVariants<V> & ClassProp : ClassProp) => string} A function that generates class names based on props.
 *
 * @example
 * ```ts
 * const buttonCVA: CVAReturnType<{ size: { small: string; medium: string } }> = cva({
 *   variants: {
 *     size: {
 *       small: "text-sm",
 *       medium: "text-base"
 *     }
 *   },
 * });
 * const buttonClasses = buttonCVA({ size: "small" }); // Returns a string of class names
 * ```
 */
type CVAReturnType<V extends Variant> = (props?: V extends Variant ? CVAVariants<V> & ClassProp : ClassProp) => string;

/**
 * Creates a class variant authority (cva) function.
 * Generates class names based on provided variants and props.
 *
 * @template V - The type of variants.
 * @param {CVAConfig<V>} config - The cva configuration object.
 * @returns {CVAReturnType<V>} A function that generates class names based on props.
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
type CVA = <V extends Variant = {}>(config: CVAConfig<V>) => CVAReturnType<V>;

/**
 * Creates a class variant authority (cva) function with a custom merge function.
 *
 * @param {MergeClassFn} mergeClass - The function to merge class names.
 * @returns {CVA} The cva function.
 *
 * @example
 * const customCVA = createCVA(myCustomMergeFunction);
 */
export const createCVA = (mergeClass: MergeClassFn = cx): CVA => {
  return <V extends Variant>(config: CVAConfig<V>): CVAReturnType<V> => {
    const component = (props?: V extends Variant ? CVAVariants<V> & ClassProp : ClassProp): string => {
      // * Exit early if `base` is not defined or has a falsey value
      if (typeof config?.base === "undefined" || !config.base) return mergeClass(props?.class, props?.className);

      const base = config.base;

      // * Exit early if variants do not exist or is not an object
      if (
        typeof config?.variants !== "object" ||
        (typeof config.variants === "object" && Array.isArray(config.variants))
      ) {
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
 * Implementation of the class variant authority (cva) function using the default class merging function.
 *
 * @type {CVA}
 */
export const cva: CVA = createCVA();

// TODO: Determine parameters for attributes/parts
/**
 * Defines a CVA configuration object with type safety.
 *
 * @template V - The type of variants.
 * @param {CVAConfig<V>} config - The CVA configuration object.
 * @returns {CVAConfig<V>} The CVA configuration object.
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
export const defineCVA = <V extends Variant>(config: CVAConfig<V>): CVAConfig<V> => config;

/**
 * Represents the return type of the `rawCVA` function.
 * It includes the `CVAReturnType` along with the configuration, merge function, and raw configuration.
 *
 * @template V - The type of variants.
 */
type CVARawReturnType<V extends Variant> = CVAReturnType<V> & {
  config: CVAConfig<V>;
  mergeClass: MergeClassFn;
  rawConfig: RawConfig;
};

/**
 * Type definition for the `rawCVA` function.
 *
 * @template V - The type of variants.
 */
type RawCVA = <V extends Variant = {}>(config: CVAConfig<V>) => CVARawReturnType<V>;

/**
 * Creates a raw CVA function that returns class names based on the component's raw configuration.
 *
 * @param {MergeClassFn} mergeClass - The function to merge class names.
 * @param {RawConfig} rawConfig - Configuration for raw class name generation.
 * @returns {RawCVA} The raw CVA function.
 *
 * @example
 * ```ts
 * const rawButton = createRawCVA(myCustomMergeFunction, { prefix: "btn" });
 * ```
 */
export const createRawCVA = (mergeClass: MergeClassFn = cx, rawConfig: RawConfig = {}): RawCVA => {
  return <V extends Variant>(config: CVAConfig<V>): CVARawReturnType<V> => {
    const rawClass = (props?: V extends Variant ? CVAVariants<V> & ClassProp : ClassProp): string => {
      return getRawClasses({
        compoundVariants: config.compoundVariants,
        mergeClass,
        name: config.name,
        props,
        rawConfig,
        variants: config.variants
      });
    };

    return Object.assign(rawClass, { config, mergeClass, rawConfig });
  };
};

/**
 * Implementation of the raw CVA function using the default class merging function and raw configuration.
 *
 * @type {RawCVA}
 */
export const rawCVA: RawCVA = createRawCVA();
