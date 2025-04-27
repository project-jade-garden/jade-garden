import { cx } from "./class-utils";
import type { ClassProp, ClassValue, MergeClassFn, RecordClassValue, StringToBoolean } from "./types";
import { getRawClasses, getVariantClasses, hasProps } from "./utils";

/* ====================== SVA ====================== */

/**
 * Represents the class values for slots, where keys are slot names and values are class names.
 *
 * @template RCV - The type of record class values.
 * @example
 * ```ts
 * type ButtonSlots = SlotsClassValue<{ root: string; item: string }>;
 * // ButtonSlots = { root?: ClassValue; item?: ClassValue };
 * ```
 */
type SlotsClassValue<RCV extends RecordClassValue> = {
  [K in keyof RCV]?: ClassValue;
};

/**
 * Represents the default variants for a component.
 *
 * @template RCV - The type of record class values.
 * @example
 * ```ts
 * {
 *   size: {
 *     small: {
 *       root: "text-sm"
 *     },
 *     medium: {
 *       root: "text-base"
 *     }
 *   }
 * }
 * ```
 */
type DefaultVariants<RCV extends RecordClassValue> = {
  [key: string]: {
    [key: string]: SlotsClassValue<RCV>;
  };
};

/**
 * Represents the variants for a component.
 *
 * @template RCV - The type of record class values.
 * @template V - The type of variants.
 * @example
 * ```ts
 * type ButtonVariants = Variants<
 *   {
 *     root: string;
 *     item: string;
 *   },
 *   {
 *     size: {
 *       small: {
 *         root: string;
 *       };
 *       medium: {
 *         root: string;
 *       };
 *     };
 *   }
 * >;
 * // type ButtonVariants =
 * // | { size?: { small?: { root?: ClassValue }; medium?: { root?: ClassValue } } }
 * // | { size: { small: { root: ClassValue }; medium: { root: ClassValue } } };
 * ```
 */
type Variants<RCV extends RecordClassValue, V extends DefaultVariants<RCV> = DefaultVariants<RCV>> =
  | {
      [K in keyof V]?: {
        [K2 in keyof V[K]]?: SlotsClassValue<RCV>;
      };
    }
  | DefaultVariants<RCV>;

/**
 * Reusable type for compound styles that apply based on multiple variant combinations.
 *
 * @template RCV - The type of record class values.
 * @template V - The type of variants.
 * @example
 * ```ts
 * type ButtonCompound = CompoundBase<
 *   { root: string; item: string },
 *   { size: { small: { root: string }; medium: { root: string } } }
 * >;
 * // ButtonCompound = { size?: "small" | "medium" | ("small" | "medium")[] };
 * ```
 */
type CompoundBase<RCV extends RecordClassValue, V extends Variants<RCV>> = {
  [K in keyof V]?: StringToBoolean<keyof V[K]> | StringToBoolean<keyof V[K]>[];
};

/**
 * Represents the props for a component with variants and slots.
 *
 * @template RCV - The type of record class values.
 * @template V - The type of variants.
 * @example
 * ```ts
 * type ButtonProps = SVAVariants<
 *   { root: string; item: string },
 *   { size: { small: { root: string }; medium: { root: string } } }
 * >;
 * // ButtonProps = { size?: "small" | "medium" };
 * ```
 */
type SVAVariants<RCV extends RecordClassValue, V extends Variants<RCV>> = {
  [K in keyof V]?: StringToBoolean<keyof V[K]>;
};

/**
 * Represents the configuration object for the `sva` function.
 *
 * @template RCV - The type of record class values.
 * @template V - The type of variants.
 * @property {string=} name - Optional component name.
 * @property {S=} slots - Slots allow you to separate a component into multiple parts.
 * @property {V=} variants - Variants allow you to create multiple versions of the same component.
 * @property {Array<CompoundBase<RCV, V> & ( { class?: SlotsClassValue<RCV>; className?: never; } | { class?: never; className?: SlotsClassValue<RCV>; } )>=} compoundVariants - Compound variants allow you to apply classes to multiple variants at once.
 * @property {Array<{ slots: Array<keyof S> } & CompoundBase<RCV, V> & ClassProp>=} compoundSlots - Compound slots allow you to apply classes to multiple slots at once.
 * @property {SVAVariants<RCV, V>=} defaultVariants - Default variants allow you to set default variants for a component.
 *
 * @example
 * ```ts
 * const buttonConfig: SVAConfig<
 *   { root: string; item: string },
 *   { size: { small: { root: string }; medium: { root: string } } }
 * > = {
 *   slots: {
 *     root: "flex",
 *     item: "px-2 py-1"
 *   },
 *   variants: {
 *     size: {
 *       small: {
 *         root: "text-sm"
 *       },
 *       medium: {
 *         root: "text-base"
 *       }
 *     }
 *   },
 *   compoundVariants: [{ size: "small", class: { root: "font-bold" } }],
 *   compoundSlots: [{ slots: ["root", "item"], class: "rounded" }],
 *   defaultVariants: {
 *     size: "medium"
 *   }
 * };
 * ```
 */
type SVAConfig<RCV extends RecordClassValue, V extends Variants<RCV>> = {
  /**
   * The name of the sva component.
   */
  name?: string;
  /**
   * Slots allow you to separate a component into multiple parts.
   */
  slots?: RCV;
  /**
   * Variants allow you to create multiple versions of the same component.
   */
  variants?: V;
  /**
   * Compound variants allow you to apply classes to multiple variants at once.
   */
  compoundVariants?: Array<
    CompoundBase<RCV, V> &
      (
        | {
            class?: SlotsClassValue<RCV>;
            className?: never;
          }
        | {
            class?: never;
            className?: SlotsClassValue<RCV>;
          }
      )
  >;
  /**
   * Compound slots allow you to apply classes to multiple slots at once.
   */
  compoundSlots?: Array<{ slots: Array<keyof RCV> } & CompoundBase<RCV, V> & ClassProp>;
  /**
   * Default variants allow you to set default variants for a component.
   */
  defaultVariants?: SVAVariants<RCV, V>;
};

/**
 * Represents the return type of the SVA function.
 *
 * @template RCV - The type of record class values.
 * @template V - The type of variants.
 * @returns {(props?: SVAVariants<RCV, V>) => { [K in keyof S]: (slotProps?: SVAVariants<RCV, V> & ClassProp) => string }} A function that generates slot-specific class names based on props.
 *
 * @example
 * ```ts
 * const buttonSVA: SVAReturnType<
 *   { root: string; item: string },
 *   { size: { small: { root: string }; medium: { root: string } } }
 * > = sva({
 *   slots: {
 *     root: "flex",
 *     item: "px-2 py-1"
 *   },
 *   variants: {
 *     size: {
 *       small: {
 *         root: "text-sm"
 *       },
 *       medium: {
 *         root: "text-base"
 *       }
 *     }
 *   }
 * });
 * ```
 */
type SVAReturnType<RCV extends RecordClassValue, V extends Variants<RCV>> = (props?: SVAVariants<RCV, V>) => {
  [K in keyof RCV]: (slotProps?: SVAVariants<RCV, V> & ClassProp) => string;
};

/**
 * Creates a slots variants authority (SVA) function for a component.
 *
 * @template RCV - The type of record class values.
 * @template V - The type of variants.
 * @param {SVAConfig<RCV, V>} config - Configuration options for the SVA function.
 * @returns {SVAReturnType<RCV, V>} The return type of the SVA function.
 *
 * @example
 * ```ts
 * const button = sva({
 *   slots: {
 *     root: "flex",
 *     item: "px-2 py-1"
 *   },
 *   variants: {
 *     size: {
 *       small: {
 *         root: "text-sm"
 *       },
 *       medium: {
 *         root: "text-base"
 *       }
 *     }
 *   },
 *   compoundVariants: [{ size: "small", class: { root: "font-bold" } }],
 *   compoundSlots: [{ slots: ["root", "item"], class: "rounded" }],
 *   defaultVariants: {
 *     size: "medium"
 *   }
 * });
 *
 * const buttonClasses = button({ size: "small" });
 * ```
 */
type SVA = <RCV extends RecordClassValue, V extends Variants<RCV>>(config: SVAConfig<RCV, V>) => SVAReturnType<RCV, V>;

/**
 * Creates a slots variants authority (SVA) function with a custom merge function.
 *
 * @param {MergeClassFn} mergeClass - The function to merge class names.
 * @returns {SVA} The sva function.
 *
 * @example
 * ```ts
 * const customSVA = createSVA(myCustomMergeFunction);
 * ```
 */
export const create = (mergeClass: MergeClassFn = cx): SVA => {
  return <RCV extends RecordClassValue, V extends Variants<RCV>>(config: SVAConfig<RCV, V>): SVAReturnType<RCV, V> => {
    const components = (props?: SVAVariants<RCV, V>) => {
      type SlotProps = SVAVariants<typeof slots, typeof variants> & ClassProp;

      const slotsFns: { [key: string]: (slotProps?: SlotProps) => string } = {};

      // * Exit early if slots is not defined or does not have keys
      if (
        typeof config?.slots !== "object" ||
        Object.keys(config.slots).length === 0 ||
        (typeof config.slots === "object" && Array.isArray(config.slots))
      ) {
        return slotsFns;
      }

      const slots = config.slots;
      const compoundSlots = config?.compoundSlots ?? [];

      const getCompoundSlotClasses = (configProps: SlotProps) => {
        if (!Array.isArray(compoundSlots)) return {};

        const result: Record<string, string> = {};

        for (const {
          slots: slotNames = [],
          class: slotClass,
          className: slotClassName,
          ...slotConfig
        } of compoundSlots) {
          if (hasProps(slotConfig, configProps)) {
            for (const slot of slotNames) {
              if (typeof slot === "string") {
                const classes: string[] = [];
                if (typeof slotClass === "string") classes.push(slotClass);
                if (Array.isArray(slotClass)) classes.push(...slotClass);
                if (typeof slotClassName === "string") classes.push(slotClassName);
                if (Array.isArray(slotClassName)) classes.push(...slotClassName);

                if (!Object.hasOwn(result, slot)) result[slot] = "";
                const value = mergeClass(...classes);
                result[slot] += result[slot].length === 0 ? value : ` ${value}`;
              }
            }
          }
        }

        return result;
      };

      // * Exit early if variants do not exist or is not an object
      if (
        typeof config?.variants !== "object" ||
        (typeof config.variants === "object" && Array.isArray(config.variants))
      ) {
        for (const slotKey of Object.keys(slots)) {
          slotsFns[slotKey] = (slotProps: SVAVariants<RCV, V> & ClassProp = {}) => {
            return mergeClass(
              slots[slotKey],
              getCompoundSlotClasses({ ...props, ...slotProps })[slotKey],
              slotProps?.class,
              slotProps?.className
            );
          };
        }

        return slotsFns;
      }

      const variants = config.variants;
      const compoundVariants = Array.isArray(config.compoundVariants) ? config.compoundVariants : [];
      const defaultVariants =
        typeof config?.defaultVariants === "object" && !Array.isArray(config.defaultVariants)
          ? config.defaultVariants
          : {};

      const defaultsAndProps = { ...defaultVariants, ...(props ?? {}) };

      const getCompoundVariantClasses = (configProps: SlotProps) => {
        if (!Array.isArray(compoundVariants)) return {};

        const result: Record<string, string> = {};

        for (const { class: variantClass, className: variantClassName, ...variantConfig } of compoundVariants) {
          if (hasProps(variantConfig, configProps)) {
            const classObj: Record<string, string> = {};
            Object.assign(classObj, typeof variantClass === "object" ? variantClass : {});
            Object.assign(classObj, typeof variantClassName === "object" ? variantClassName : {});

            for (const slot of Object.keys(classObj)) {
              const className = classObj[slot];
              if (!Object.hasOwn(result, slot)) result[slot] = "";
              if (typeof className === "string") {
                const value = mergeClass(className);
                result[slot] += result[slot].length === 0 ? value : ` ${value}`;
              }
            }
          }
        }

        return result;
      };

      // * Set `slotsFns`
      for (const slotKey of Object.keys(slots)) {
        slotsFns[slotKey] = (slotProps: SVAVariants<RCV, V> & ClassProp = {}) => {
          const configProps = { ...defaultsAndProps, ...slotProps };
          return mergeClass(
            slots[slotKey],
            getVariantClasses({ defaultVariants, mergeClass, props, variants, slotKey, slotProps }),
            getCompoundVariantClasses(configProps)[slotKey],
            getCompoundSlotClasses(configProps)[slotKey],
            slotProps?.class,
            slotProps?.className
          );
        };
      }

      return slotsFns;
    };

    return components as SVAReturnType<RCV, V>;
  };
};

/**
 * Implementation of the slots variants authority (SVA) function using the default class merging function.
 *
 * @type {SVA}
 */
export const sva: SVA = create();

/**
 * Generates `raw` class names based on the sva's configuration.
 *
 * @type {SVA}
 */
export const raw: SVA = <RCV extends RecordClassValue, V extends Variants<RCV>>(
  config: SVAConfig<RCV, V>
): SVAReturnType<RCV, V> => {
  const components = (props?: SVAVariants<RCV, V>) => {
    type SlotProps = SVAVariants<typeof slots, typeof variants> & ClassProp;

    const slotsFns: { [key: string]: (slotProps?: SlotProps) => string } = {};

    // * Exit early if slots is not defined or does not have keys
    if (
      typeof config?.slots !== "object" ||
      Object.keys(config.slots).length === 0 ||
      (typeof config.slots === "object" && Array.isArray(config.slots))
    ) {
      return slotsFns;
    }

    // * For `SlotProps` type
    const slots = config.slots;
    const variants = config.variants ?? {};

    // * Set `slotsFns`
    for (const slotKey of Object.keys(slots)) {
      slotsFns[slotKey] = (slotProps: SVAVariants<RCV, V> & ClassProp = {}) => {
        return getRawClasses({
          compoundVariants: config.compoundVariants,
          name: config.name,
          props,
          variants: config.variants,
          slotKey,
          slotProps
        });
      };
    }

    return slotsFns;
  };

  return components as SVAReturnType<RCV, V>;
};

/**
 * Defines a type-safe structure for an SVA configuration object.
 * This utility allows you to define your SVA config with type checking
 * based on the specified slots.
 *
 * @template S - A string or union of strings representing the slot keys for the component.
 * @returns A function that takes an `SVAConfig` object with the specified slot keys and returns that same configuration object, ensuring type safety.
 *
 * @example
 * ```ts
 * const defineConfig: TypedSVA<"root" | "label"> = (config) => config;
 *
 * const buttonConfig = defineConfig({
 *   name: "button",
 *   slots: {
 *     root: "base-button",
 *     label: "button-label",
 *   },
 *   variants: {
 *     size: {
 *       small: {
 *         root: "button-small",
 *         label: "text-sm"
 *       },
 *       medium: {
 *         root: "button-medium",
 *         label: "text-base"
 *       }
 *     },
 *     color: {
 *       primary: {
 *         root: "bg-blue-500 text-white"
 *       },
 *       secondary: {
 *         root: "bg-gray-300 text-gray-800"
 *       }
 *     }
 *   },
 *   defaultVariants: {
 *     size: "medium",
 *     color: "primary"
 *   }
 * });
 * ```
 */
export type TypedSVA<S extends string> = <RCV extends Record<S, ClassValue>, V extends Variants<RCV>>(
  config: SVAConfig<RCV, V>
) => SVAConfig<RCV, V>;
