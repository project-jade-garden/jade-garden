import type { ClassValue as CV } from "clsx";

/* ===================== Types ===================== */

/**
 * Represents the minimum structure to work with class names.
 * Fully compatible input for `jade-garden/class-utils` functions.
 */
export type ClassStrings = string | string[];

/**
 * **This is the `ClassValue` type from [clsx](https://github.com/lukeed/clsx/tree/master)**.
 * - Represents a value that can be used as a class name.
 * - It can be a `string`, `number`, `bigint`, `null`, `boolean`, `undefined`, an array of ClassValue, or a Record with values of `any`.
 */
export type ClassValue = CV;

export type CreateOptions = {
  /**
   * Overrides `jade-garden`'s default `cx` utility for merging generated class names.
   *
   * You may provide your own custom function to handle merging class names,
   * use `tailwind-merge` for handling class conflicts,
   * or `jade-garden`'s `cn` utility for more performant runtimes.
   */
  mergeFn?: MergeFn;

  prefix?: string;

  useStylesheet?: boolean;
};

/**
 * A helper type to define the shape of a single data attribute.
 *
 * @template T - The type of the value for the data attribute key.
 * If a string literal union (e.g., "open" | "closed"), it creates a conditional record.
 * If a primitive (e.g., string, boolean), it allows for a simple ClassStrings value.
 */
type DataAttribute<T> =
  // biome-ignore format: make this type easy to read and understand
  // [data-readonly] [data-current="true"]
  T extends boolean ? Partial<Record<"true" | "false", ClassStrings>> | ClassStrings :
  // [data-index="1"]
  T extends number ? Partial<Record<PropertyKey, ClassStrings>> :
  // Working with strings
  T extends string ?
    // Similar to the boolean data-readonly]
    string extends T ? ClassStrings :
    // Discriminated union [data-state="open"] [data-state="closed"]
    Partial<Record<T, ClassStrings>>
  // Edge Case: only accept types `boolean`, `number`, or `string`.
  : never;

/**
 * Represents a function that merges class names.
 *
 * @param {...ClassValue[]} classes - An array of class names to merge.
 * @returns {string} The merged class name string.
 */
export type MergeFn = (...classes: ClassValue[]) => string;

/**
 * Removes undefined from a type.
 *
 * @template T - The type to omit undefined from.
 * @returns {T extends undefined ? never : T} The type with undefined removed.
 */
type OmitUndefined<T> = T extends undefined ? never : T;

/**
 * Provides type safety for the `data` prop within the `traits` function.
 * This type helps define the structure of data attributes based on component properties.
 *
 * @template T - A map where keys are component property names (e.g., "size", "variant")
 * and values are the allowed types for that property (e.g., "small" | "medium").
 *
 * @example
 * ```ts
 * type AccordionItemTraits = {
 *   state: "open" | "closed";
 *   disabled: boolean;
 * };
 *
 * const traits1 = traits<AccordionItemTraits>({
 *   data: {
 *     state: {
 *       open: "is-open",
 *       closed: "is-closed"
 *     },
 *     disabled: {
 *       true: "is-disabled"
 *     }
 *   }
 * });
 * // data-[state=open]:is-open data-[state=closed]:is-closed data-[disabled=true]:is-disabled
 *
 * const traits2 = traits<{
 *   value: boolean;
 *   custom: string;
 *   index: number;
 * }>({
 *   data: {
 *     value: "my-value-123",
 *     custom: "my-class",
 *     index: {
 *       0: "not-active",
 *       1: "is-active"
 *     }
 *   }
 * });
 * // data-[value]:my-value-123 data-[custom]:my-class data-[index="0"]:not-active data-[index="1"]:active
 * ```
 */
export type Traits<T extends Record<string, any>> = {
  [K in keyof T]?: DataAttribute<T[K]>;
};

/**
 * Extracts the variant props from a component's props type, excluding `class` and `className`.
 *
 * @template Component - The type of the component function.
 * @returns {Omit<OmitUndefined<Parameters<Component>[0]>, "class" | "className">} The extracted variant props type.
 */
export type VariantProps<Component extends (...args: any) => any> = Omit<
  OmitUndefined<Parameters<Component>[0]>,
  "class" | "className"
>;

/* =================== Internals =================== */

/**
 * **FOR INTERNAL USE ONLY**
 *
 * Variety of types for the `jade-garden` library.
 *
 * @internal
 */

/* ===================== Types ===================== */

/**
 * Represents the `class` and `className` props for `cva` and `sva`.
 * Ensures that only one of `class` or `className` is present.
 */
export type ClassProp =
  | {
      class?: ClassValue;
      className?: never;
    }
  | {
      class?: never;
      className?: ClassValue;
    };

/**
 * The shape of data attributes in a component's Headless Design System.
 */
export type NestedTraits = Partial<Record<string, Partial<Record<PropertyKey, ClassStrings>> | ClassStrings>>;

/**
 * Represents a dictionary where keys are strings and values are ClassValue.
 */
export type RecordClassValue = Record<string, ClassValue>;

/**
 * Converts "true" or "false" string literals to boolean types.
 * Otherwise, returns the original type.
 *
 * @template T - The type to convert.
 * @returns {T extends "true" | "false" ? boolean : T} The converted type.
 */
export type StringToBoolean<T> = T extends "true" | "false" ? boolean : T;

/* ====================== CVA ====================== */

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
export type Variant = Record<string, RecordClassValue>;

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
export type CVAVariants<V extends Variant> = {
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
export type CVAConfig<V extends Variant> = {
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
 */
export type CVAReturnType<V extends Variant> = ((
  props?: V extends Variant ? CVAVariants<V> & ClassProp : ClassProp
) => string) & {
  styleConfig: CVAConfig<V>;
};

/**
 * Creates a class variant authority (cva) function.
 * Generates class names based on provided variants and props.
 *
 * @template V - The type of variants.
 * @param {CVAConfig<V>} config - The cva configuration object.
 * @returns {CVAReturnType<V>} A function that generates class names based on props.
 */
export type CVA = <V extends Variant = {}>(config: CVAConfig<V>) => CVAReturnType<V>;

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
export type Variants<RCV extends RecordClassValue, V extends DefaultVariants<RCV> = DefaultVariants<RCV>> =
  | {
      [K in keyof V]?: {
        [K2 in keyof V[K]]?: SlotsClassValue<RCV>;
      };
    }
  | DefaultVariants<RCV>;

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
export type SVAVariants<RCV extends RecordClassValue, V extends Variants<RCV>> = {
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
export type SVAConfig<RCV extends RecordClassValue, V extends Variants<RCV>> = {
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
 */
export type SVAReturnType<RCV extends RecordClassValue, V extends Variants<RCV>> = ((props?: SVAVariants<RCV, V>) => {
  [K in keyof RCV]: (slotProps?: SVAVariants<RCV, V> & ClassProp) => string;
}) & {
  styleConfig: SVAConfig<RCV, V>;
};

/**
 * Creates a slots variants authority (SVA) function for a component.
 *
 * @template RCV - The type of record class values.
 * @template V - The type of variants.
 * @param {SVAConfig<RCV, V>} config - Configuration options for the SVA function.
 * @returns {SVAReturnType<RCV, V>} The return type of the SVA function.
 */
export type SVA = <RCV extends RecordClassValue, V extends Variants<RCV>>(
  config: SVAConfig<RCV, V>
) => SVAReturnType<RCV, V>;
