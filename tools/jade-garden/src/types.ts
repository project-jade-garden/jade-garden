import type { ClassValue as CV } from "clsx";

/* ===================== Types ===================== */

/**
 * **FOR INTERNAL USE ONLY**
 *
 * Represents the minimum structure to work with class names.
 *
 * @internal
 */
export type ClassNameValue = string | string[];

/**
 * **FOR INTERNAL USE ONLY**
 *
 * Represents the `class` and `className` props for `cva` and `sva`.
 * Ensures that only one of `class` or `className` is present.
 *
 * @internal
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
 * **This is the `ClassValue` type from [clsx](https://github.com/lukeed/clsx/tree/master)**.
 * - Represents a value that can be used as a class name.
 * - It can be a `string`, `number`, `bigint`, `null`, `boolean`, `undefined`, an array of ClassValue, or a Record with values of `any`.
 */
export type ClassValue = CV;

/**
 * **FOR INTERNAL USE ONLY**
 *
 * Represents a function that merges class names.
 *
 * @internal
 * @param {...ClassValue[]} classes - An array of class names to merge.
 * @returns {string} The merged class name string.
 */
export type MergeClassFn = (...classes: ClassValue[]) => string;

/**
 * **FOR INTERNAL USE ONLY**
 *
 * The shape of data attributes in a component's Headless Design System.
 *
 * @internal
 */
export type NestedTraits = Partial<Record<string, Partial<Record<PropertyKey, ClassNameValue>> | ClassNameValue>>;

/**
 * Removes undefined from a type.
 *
 * @template T - The type to omit undefined from.
 * @returns {T extends undefined ? never : T} The type with undefined removed.
 */
type OmitUndefined<T> = T extends undefined ? never : T;

/**
 * **FOR INTERNAL USE ONLY**
 *
 * Represents a dictionary where keys are strings and values are ClassValue.
 *
 * @internal
 */
export type RecordClassValue = Record<string, ClassValue>;

/**
 * **FOR INTERNAL USE ONLY**
 *
 * Converts "true" or "false" string literals to boolean types.
 * Otherwise, returns the original type.
 *
 * @internal
 * @template T - The type to convert.
 * @returns {T extends "true" | "false" ? boolean : T} The converted type.
 */
export type StringToBoolean<T> = T extends "true" | "false" ? boolean : T;

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

/* ====================== CVA ====================== */

/**
 * **FOR INTERNAL USE ONLY**
 *
 * Represents the variant configurations for `cva`.
 * Each variant is a record of class names, keyed by variant values.
 *
 * @internal
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
 * **FOR INTERNAL USE ONLY**
 *
 * Represents the schema for variant props in `cva`.
 * Each variant prop is typed as a StringToBoolean of the corresponding variant value keys.
 *
 * @internal
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
 * **FOR INTERNAL USE ONLY**
 *
 * Represents the configuration object for the `cva` function.
 *
 * @internal
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
 * **FOR INTERNAL USE ONLY**
 *
 * Represents the return type of the CVA function.
 *
 * @internal
 * @template V - The type of variants.
 * @returns {(props?: V extends Variant ? CVAVariants<V> & ClassProp : ClassProp) => string} A function that generates class names based on props.
 */
export type CVAReturnType<V extends Variant> = (
  props?: V extends Variant ? CVAVariants<V> & ClassProp : ClassProp
) => string;

/**
 * Provides type safety for the `data` prop within the `traits` function
 * when used in a CVA (Composable Variant Authority) context. This type
 * helps define the structure of data attributes based on component properties.
 * Each property in the generic `T` represents a component property, and its value
 * defines the possible values for that property and how they can be used to
 * generate `data-*` attributes.
 *
 * @template T - An object where keys are component property names (e.g., "size", "variant")
 * and values define the possible values for generating `data-*` attributes.
 *
 * @example
 * ```ts
 * type ButtonCVATraits = CVATraits<{
 *   size: "small" | "medium" | "large";
 *   variant: "primary" | "secondary";
 * }>;
 *
 * // When using with the traits function:
 * const buttonClasses = traits<ButtonCVATraits>({
 *  data: {
 *    size: {
 *      small: "p-2",
 *      medium: "p-4",
 *      large: "p-8"
 *     },
 *     variant: {
 *       primary: "red-500",
 *       secondary: "blue-500"
 *     }
 *   }
 * });
 * // "data-[size=small]:p-2 data-[size=medium]:p-4 data-[size=large]:p-8 data-[variant=primary]:red-500 data-[variant=secondary]:blue-500"
 * ```
 */
export type CVATraits<T extends Record<string, any>> = {
  [K in keyof T]?: T[K] extends ""
    ? ClassNameValue | Partial<Record<PropertyKey, ClassNameValue>>
    : T[K] extends "number"
      ? Partial<Record<PropertyKey, ClassNameValue>>
      : T[K] extends string
        ? string extends T[K]
          ? never
          : Partial<Record<T[K], ClassNameValue>>
        : never;
};

/**
 * **FOR INTERNAL USE ONLY**
 *
 * Creates a class variant authority (cva) function.
 * Generates class names based on provided variants and props.
 *
 * @internal
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
 * **FOR INTERNAL USE ONLY**
 *
 * Represents the variants for a component.
 *
 * @internal
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
 * **FOR INTERNAL USE ONLY**
 *
 * Represents the props for a component with variants and slots.
 *
 * @internal
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
 * **FOR INTERNAL USE ONLY**
 *
 * Represents the configuration object for the `sva` function.
 *
 * @internal
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
 * **FOR INTERNAL USE ONLY**
 *
 * Represents the return type of the SVA function.
 *
 * @internal
 * @template RCV - The type of record class values.
 * @template V - The type of variants.
 * @returns {(props?: SVAVariants<RCV, V>) => { [K in keyof S]: (slotProps?: SVAVariants<RCV, V> & ClassProp) => string }} A function that generates slot-specific class names based on props.
 */
export type SVAReturnType<RCV extends RecordClassValue, V extends Variants<RCV>> = (props?: SVAVariants<RCV, V>) => {
  [K in keyof RCV]: (slotProps?: SVAVariants<RCV, V> & ClassProp) => string;
};

/**
 * Provides type safety for the `data` prop within the `traits` function
 * when used in an SVA (Slots Variant Authority) context. This type helps define
 * the structure of data attributes for different component slots based on their
 * specific properties.
 *
 * **Important:** When using `SVATraits` with the `traits` function, you will typically
 * access the type definition for a specific slot from `SVATraits` as the generic
 * parameter for `traits`. This allows you to provide type-safe data for that slot's
 * attributes.
 *
 * @template Slots - A string or union of strings representing the available slot names (e.g., "root", "item").
 * @template T - An object where keys are slot names, and values are objects defining
 * the possible properties and their value-to-class name mappings for generating `data-*` attributes for that slot.
 *
 * @example
 * ```ts
 * type AccordionSVATraits = SVATraits<
 *   "root" | "itemTrigger" | "itemContent",
 *   {
 *     root?: {
 *       orientation?: "horizontal" | "vertical";
 *     };
 *     itemTrigger?: {
 *       state?: "open" | "closed";
 *       disabled?: "";
 *     };
 *     itemContent?: {
 *       state?: "open" | "closed";
 *     };
 *   }
 * >;
 *
 * // When using with the traits function:
 * const rootClasses = traits<AccordionSVATraits["root"]>({
 *   className: "flex",
 *   data: {
 *     orientation: {
 *       horizontal: "flex-row",
 *       vertical: "flex-col"
 *     }
 *   }
 * });
 * // "flex data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col"
 *
 * const triggerClasses = traits<AccordionSVATraits["itemTrigger"]>({
 *   data: {
 *     state: {
 *       open: "block",
 *       closed: "hidden"
 *     },
 *     disabled: "cursor-none"
 *   }
 * });
 * // "data-[state=open]:block data-[state=closed]:hidden data-[disabled]:cursor-none"
 * ```
 */
export type SVATraits<Slots extends string, T extends { [S in Slots]?: Record<string, any> }> = {
  [K in keyof T]?: {
    [P in keyof T[K]]?: T[K][P] extends ""
      ? ClassNameValue | Partial<Record<PropertyKey, ClassNameValue>>
      : T[K][P] extends "number"
        ? Partial<Record<PropertyKey, ClassNameValue>>
        : T[K][P] extends string
          ? string extends T[K][P]
            ? never
            : Partial<Record<T[K][P], ClassNameValue>>
          : never;
  };
};

/**
 * **FOR INTERNAL USE ONLY**
 *
 * Creates a slots variants authority (SVA) function for a component.
 *
 * @internal
 * @template RCV - The type of record class values.
 * @template V - The type of variants.
 * @param {SVAConfig<RCV, V>} config - Configuration options for the SVA function.
 * @returns {SVAReturnType<RCV, V>} The return type of the SVA function.
 */
export type SVA = <RCV extends RecordClassValue, V extends Variants<RCV>>(
  config: SVAConfig<RCV, V>
) => SVAReturnType<RCV, V>;
