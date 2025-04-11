import { cn } from "./class-utils";
import type { ClassProp, ClassValue, MergeClassFn, RawConfig, RecordClassValue, StringToBoolean } from "./types";
import { getRawClasses, getVariantClasses, hasProps } from "./utils";

/* ===================== CVA ===================== */

/**
 * Represents the variant configurations for `cva`.
 * Each variant is a record of class names, keyed by variant values.
 */
export type Variant = Record<string, RecordClassValue>;

/**
 * Represents the schema for variant props in `cva`.
 * Each variant prop is typed as a StringToBoolean of the corresponding variant value keys.
 *
 * @template V - The type of variants.
 */
type CVAVariants<V extends Variant> = {
  [K in keyof V]?: StringToBoolean<keyof V[K]>;
};

/**
 * Represents the configuration object for the `cva` function.
 *
 * @template V - The type of variants.
 */
type CVAConfig<V extends Variant> = {
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

export type CVAMethods<V extends Variant> = {
  config: CVAConfig<V>;
  mergeClass: MergeClassFn;
  rawConfig: RawConfig;
  raw: (props?: V extends Variant ? CVAVariants<V> & ClassProp : ClassProp) => string;
};

/**
 * Represents the return type of the CVA function.
 *
 * @template V - The type of variants.
 */
type CVAReturnType<V extends Variant> = ((
  props?: V extends Variant ? CVAVariants<V> & ClassProp : ClassProp
) => string) &
  CVAMethods<V>;

/**
 * Creates a class variant authority (cva) function.
 * Generates class names based on provided variants and props.
 *
 * @template V - The type of variants.
 * @param {CVAConfig<V>} config - The cva configuration object.
 * @returns {CVAReturnType<V>} A function that generates class names based on props, and the original config object.
 */
type CVA = <V extends Variant = {}>(config: CVAConfig<V>) => CVAReturnType<V>;

/**
 * Creates a class variant authority (cva) function with a custom merge function.
 *
 * @param {MergeClassFn} mergeClass - The function to merge class names.
 * @param {RawConfig} rawConfig - The raw configuration object.
 * @returns {CVA} The cva function.
 */
export const createCVA = (mergeClass: MergeClassFn = cn, rawConfig: RawConfig = {}): CVA => {
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

    return Object.assign(component, {
      config,
      mergeClass,
      raw: (props?: V extends Variant ? CVAVariants<V> & ClassProp : ClassProp) => {
        return getRawClasses({
          defaultVariants: config.compoundVariants,
          mergeClass,
          name: config.name,
          props,
          rawConfig,
          variants: config.variants
        });
      },
      rawConfig
    });
  };
};

/**
 * Implementation of the class variant authority (cva) function using the default class merging function.
 *
 * @type {CVA}
 */
export const cva: CVA = createCVA();
