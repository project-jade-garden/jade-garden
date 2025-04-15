import { cx } from "./class-utils";
import type { ClassProp, ClassValue, MergeClassFn, RawConfig, RecordClassValue, StringToBoolean } from "./types";
import { convertCase, getRawClasses, getVariantClasses, hasProps } from "./utils";

/* ===================== SVA ===================== */

/**
 * Represents a dictionary of slot class names.
 *
 * @example
 * ```ts
 * {
 *   root: "flex",
 *   item: "px-2 py-1",
 * }
 * ```
 */
type Slots = RecordClassValue;

/**
 * Represents the class values for slots, where keys are slot names and values are class names.
 *
 * @template S - The type of slots.
 * @example
 * ```ts
 * type ButtonSlots = SlotsClassValue<{ root: string; item: string }>;
 * // ButtonSlots = { root?: ClassValue; item?: ClassValue };
 * ```
 */
type SlotsClassValue<S extends Slots> = {
  [K in keyof S]?: ClassValue;
};

/**
 * Represents the default variants for a component.
 *
 * @template S - The type of slots.
 * @example
 * ```ts
 * {
 *   size: {
 *     small: { root: "text-sm" },
 *     medium: { root: "text-base" },
 *   }
 * }
 * ```
 */
type DefaultVariants<S extends Slots> = {
  [key: string]: {
    [key: string]: SlotsClassValue<S>;
  };
};

/**
 * Represents the variants for a component.
 *
 * @template S - The type of slots.
 * @template V - The type of variants.
 * @example
 * ```ts
 * type ButtonVariants = SVAVariants<
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
type SVAVariants<S extends Slots, V extends DefaultVariants<S> = DefaultVariants<S>> =
  | {
      [K in keyof V]?: {
        [K2 in keyof V[K]]?: SlotsClassValue<S>;
      };
    }
  | DefaultVariants<S>;

/**
 * Reusable type for compound styles that apply based on multiple variant combinations.
 *
 * @template S - The type of slots.
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
type CompoundBase<S extends Slots, V extends SVAVariants<S, DefaultVariants<S>>> = {
  [K in keyof V]?: StringToBoolean<keyof V[K]> | StringToBoolean<keyof V[K]>[];
};

/**
 * Represents the props for a component with variants and slots.
 *
 * @template S - The type of slots.
 * @template V - The type of variants.
 * @example
 * ```ts
 * type ButtonProps = SVAProps<
 *   { root: string; item: string },
 *   { size: { small: { root: string }; medium: { root: string } } }
 * >;
 * // ButtonProps = { size?: "small" | "medium" };
 * ```
 */
type SVAProps<S extends Slots, V extends SVAVariants<S, DefaultVariants<S>>> = {
  [K in keyof V]?: StringToBoolean<keyof V[K]>;
};

/**
 * Represents the configuration object for the `sva` function.
 *
 * @template S - The type of slots.
 * @template V - The type of variants.
 * @property {string=} name - Optional component name.
 * @property {S=} slots - Slots allow you to separate a component into multiple parts.
 * @property {V=} variants - Variants allow you to create multiple versions of the same component.
 * @property {Array<CompoundBase<S, V> & ( { class?: SlotsClassValue<S>; className?: never; } | { class?: never; className?: SlotsClassValue<S>; } )>=} compoundVariants - Compound variants allow you to apply classes to multiple variants at once.
 * @property {Array<{ slots: Array<keyof S> } & CompoundBase<S, V> & ClassProp>=} compoundSlots - Compound slots allow you to apply classes to multiple slots at once.
 * @property {SVAProps<S, V>=} defaultVariants - Default variants allow you to set default variants for a component.
 *
 * @example
 * ```ts
 * const buttonConfig: SVAConfig<
 *   { root: string; item: string },
 *   { size: { small: { root: string }; medium: { root: string } } }
 * > = {
 *   slots: { root: "flex", item: "px-2 py-1" },
 *   variants: { size: { small: { root: "text-sm" }, medium: { root: "text-base" } } },
 *   compoundVariants: [{ size: "small", class: { root: "font-bold" } }],
 *   compoundSlots: [{ slots: ["root", "item"], class: "rounded" }],
 *   defaultVariants: { size: "medium" }
 * };
 * ```
 */
type SVAConfig<S extends Slots, V extends SVAVariants<S, DefaultVariants<S>>> = {
  /**
   * The name of the sva component.
   */
  name?: string;
  /**
   * Slots allow you to separate a component into multiple parts.
   */
  slots?: S;
  /**
   * Variants allow you to create multiple versions of the same component.
   */
  variants?: V;
  /**
   * Compound variants allow you to apply classes to multiple variants at once.
   */
  compoundVariants?: Array<
    CompoundBase<S, V> &
      (
        | {
            class?: SlotsClassValue<S>;
            className?: never;
          }
        | {
            class?: never;
            className?: SlotsClassValue<S>;
          }
      )
  >;
  /**
   * Compound slots allow you to apply classes to multiple slots at once.
   */
  compoundSlots?: Array<{ slots: Array<keyof S> } & CompoundBase<S, V> & ClassProp>;
  /**
   * Default variants allow you to set default variants for a component.
   */
  defaultVariants?: SVAProps<S, V>;
};

/**
 * Represents the return type of the SVA function.
 *
 * @template S - The type of slots.
 * @template V - The type of variants.
 * @returns {(props?: SVAProps<S, V>) => { [K in keyof S]: (slotProps?: SVAProps<S, V> & ClassProp) => string }} A function that generates slot-specific class names based on props.
 *
 * @example
 * ```ts
 * const buttonSVA: SVAReturnType<
 *   { root: string; item: string },
 *   { size: { small: { root: string }; medium: { root: string } } }
 * > = sva({
 *   slots: { root: "flex", item: "px-2 py-1" },
 *   variants: { size: { small: { root: "text-sm" }, medium: { root: "text-base" } } }
 * });
 * ```
 */
type SVAReturnType<S extends Slots, V extends SVAVariants<S, DefaultVariants<S>>> = (props?: SVAProps<S, V>) => {
  [K in keyof S]: (slotProps?: SVAProps<S, V> & ClassProp) => string;
};

/**
 * Creates a Styled Variants API (SVA) function for a component.
 *
 * @template S - The type of slots.
 * @template V - The type of variants.
 * @param {SVAConfig<S, V>} config - Configuration options for the SVA function.
 * @returns {SVAReturnType<S, V>} The return type of the SVA function.
 *
 * @example
 * ```ts
 * const button = sva({
 *   slots: { root: "flex", item: "px-2 py-1" },
 *   variants: { size: { small: { root: "text-sm" }, medium: { root: "text-base" } } },
 *   compoundVariants: [{ size: "small", class: { root: "font-bold" } }],
 *   compoundSlots: [{ slots: ["root", "item"], class: "rounded" }],
 *   defaultVariants: { size: "medium" }
 * });
 *
 * const buttonClasses = button({ size: "small" });
 * ```
 */
type SVA = <S extends Slots, V extends SVAVariants<S, DefaultVariants<S>>>(
  config: SVAConfig<S, V>
) => SVAReturnType<S, V>;

/**
 * Creates a Styled Variants API (SVA) function with a custom merge function.
 *
 * @param {MergeClassFn} mergeClass - The function to merge class names.
 * @returns {SVA} The sva function.
 *
 * @example
 * ```ts
 * const customSVA = createSVA(myCustomMergeFunction);
 * ```
 */
export const createSVA = (mergeClass: MergeClassFn = cx): SVA => {
  return <S extends Slots, V extends SVAVariants<S, DefaultVariants<S>>>(
    config: SVAConfig<S, V>
  ): SVAReturnType<S, V> => {
    const components = (props?: SVAProps<S, V>) => {
      type SlotProps = SVAProps<typeof slots, typeof variants> & ClassProp;

      const slotsFns: { [key: string]: (slotProps?: SlotProps) => string } = {};

      // * Exit early if slots is not defined or does not have keys
      if (typeof config?.slots !== "object" || Object.keys(config.slots).length === 0) return slotsFns;

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
          slotsFns[slotKey] = (slotProps: SVAProps<S, V> & ClassProp = {}) => {
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
        slotsFns[slotKey] = (slotProps: SVAProps<S, V> & ClassProp = {}) => {
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

    return components as SVAReturnType<S, V>;
  };
};

/**
 * Implementation of the Styled Variants API (SVA) function using the default class merging function.
 *
 * @type {SVA}
 */
export const sva: SVA = createSVA();

/**
 * Defines an SVA configuration object with type safety.
 *
 * @template S - The type of slots.
 * @template V - The type of variants.
 * @template C - The type of the SVA configuration.
 * @param {SVAConfig<S, V>} config - The SVA configuration object.
 * @returns {SVAConfig<S, V>} The SVA configuration object.
 *
 * @example
 * ```ts
 * const buttonConfig = defineSVA({
 *   slots: { root: "flex", item: "px-2 py-1" },
 *   variants: { size: { small: { root: "text-sm" }, medium: { root: "text-base" } } },
 * });
 * ```
 */
export const defineSVA = <S extends Slots, V extends SVAVariants<S, DefaultVariants<S>>>(
  config: SVAConfig<S, V>
): SVAConfig<S, V> => config;

/**
 * Represents the return type of the `rawSVA` function.
 * It includes the `SVAReturnType` along with the configuration, merge function, and raw configuration.
 *
 * @template S - The type of slots.
 * @template V - The type of variants.
 */
type SVARawReturnType<S extends Slots, V extends SVAVariants<S, DefaultVariants<S>>> = SVAReturnType<S, V> & {
  config: SVAConfig<S, V>;
  mergeClass: MergeClassFn;
  rawConfig: RawConfig;
};

/**
 * Type definition for the `rawSVA` function.
 *
 * @template S - The type of slots.
 * @template V - The type of variants.
 */
type RawSVA<S extends Slots, V extends SVAVariants<S, DefaultVariants<S>>> = (
  config: SVAConfig<S, V>
) => SVARawReturnType<S, V>;

/**
 * Creates a raw SVA function that returns class names based on the component's raw configuration.
 *
 * @param {MergeClassFn} mergeClass - The function to merge class names.
 * @param {RawConfig} rawConfig - Configuration for raw class name generation.
 * @returns {RawSVA} The raw SVA function.
 *
 * @example
 * ```ts
 * const rawButton = createRawSVA(myCustomMergeFunction, { prefix: "btn" });
 * ```
 */
export const createRawSVA = (mergeClass: MergeClassFn = cx, rawConfig: RawConfig = {}) => {
  return <S extends Slots, V extends SVAVariants<S, DefaultVariants<S>>>(
    config: SVAConfig<S, V>
  ): SVARawReturnType<S, V> => {
    const rawClasses = (props?: SVAProps<S, V>) => {
      type SlotProps = SVAProps<typeof slots, typeof variants> & ClassProp;

      const slotsFns: { [key: string]: (slotProps?: SlotProps) => string } = {};

      // * Exit early if slots is not defined or does not have keys
      if (typeof config?.slots !== "object" || Object.keys(config.slots).length === 0) return slotsFns;

      const slots = config.slots;

      // * Exit early if variants do not exist or is not an object
      if (
        typeof config?.variants !== "object" ||
        (typeof config.variants === "object" && Array.isArray(config.variants))
      ) {
        for (const slotKey of Object.keys(slots)) {
          slotsFns[slotKey] = (slotProps?: SVAProps<S, V> & ClassProp) => {
            if (!config.name) return "";

            const className = `${rawConfig.prefix ? `${rawConfig.prefix}-` : ""}${convertCase(config.name, rawConfig.caseConvention)}`;

            return mergeClass(className, slotProps?.class, slotProps?.className);
          };
        }

        return slotsFns;
      }

      const variants = config.variants;

      // * Set `slotsFns`
      for (const slotKey of Object.keys(slots)) {
        slotsFns[slotKey] = (slotProps: SVAProps<S, V> & ClassProp = {}) => {
          return getRawClasses({
            defaultVariants: config.compoundVariants,
            mergeClass,
            name: config.name,
            props,
            rawConfig,
            variants: config.variants,
            slotKey,
            slotProps
          });
        };
      }

      return slotsFns;
    };

    return Object.assign(rawClasses, { config, mergeClass, rawConfig }) as SVARawReturnType<S, V>;
  };
};

/**
 * Implementation of the raw SVA function using the default class merging function and raw configuration.
 *
 * @type {RawSVA}
 */
export const rawSVA: <S extends Slots, V extends SVAVariants<S, DefaultVariants<S>>>(
  config: SVAConfig<S, V>
) => SVARawReturnType<S, V> = createRawSVA();
