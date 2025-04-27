import type { ClassValue as CV } from "clsx";

/* ===================== Types ===================== */

/**
 * Represents the minimum structure to work with class names.
 */
export type ClassNameValue = string | string[];

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
 * **This is the `ClassValue` type from [clsx](https://github.com/lukeed/clsx/tree/master)**.
 * - Represents a value that can be used as a class name.
 * - It can be a `string`, `number`, `bigint`, `null`, `boolean`, `undefined`, an array of ClassValue, or a Record with values of `any`.
 */
export type ClassValue = CV;

/**
 * Represents the structure of data attributes for use in a `traits` configuration object.
 */
export type DataAttributes<T extends Record<string, any>> = {
  [K in keyof T]?: T[K] extends ""
    ? ClassNameValue
    : T[K] extends number
      ? Partial<Record<T[K], ClassNameValue>>
      : T[K] extends string
        ? string extends T[K]
          ? never
          : Partial<Record<T[K], ClassNameValue>>
        : never;
};

/**
 * Represents a function that merges class names.
 *
 * @param {...ClassValue[]} classes - An array of class names to merge.
 * @returns {string} The merged class name string.
 */
export type MergeClassFn = (...classes: ClassValue[]) => string;

/**
 * Removes undefined from a type.
 *
 * @template T - The type to omit undefined from.
 * @returns {T extends undefined ? never : T} The type with undefined removed.
 */
type OmitUndefined<T> = T extends undefined ? never : T;

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

/**
 * Represents the configuration object of `traits`.
 */
export type TraitsConfig<T extends Record<string, any>> = {
  class?: ClassValue;
  className?: ClassValue;
  data?: DataAttributes<T>;
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
