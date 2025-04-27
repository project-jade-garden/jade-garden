import type { ClassValue, TypedCVA } from "jade-garden";
// * Workaround to prevent types from being exposed to developers in "jade-garden"
import type { ClassProp, MergeClassFn, RecordClassValue, StringToBoolean } from "../../../jade-garden/src/types";

/* ===================== Types ===================== */

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

export type CVA = TypedCVA;

export type Options = {
  /**
   * The entry for the main CSS/Tailwind file
   *
   * *NOTE*: This should be in a directory like `css` or `styles`
   */
  entry?: string;
  // compile?: boolean;
  /**
   * The "cva" and "sva" instances from Jade Garden
   */
  components?: {
    cva?: CVA[];
    sva?: SVA[];
  };
  mergeFn?: MergeClassFn;
};

export type PluginInstance<T> = (options?: Options | undefined) => T;

export type SVA = SVAConfig<RecordClassValue, Variants<RecordClassValue>>;
