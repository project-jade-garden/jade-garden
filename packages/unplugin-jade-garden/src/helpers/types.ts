/* ===================== Types ===================== */

/**
 * Represents the minimum structure to work with class names.
 */
export type ClassNameValue = string | string[];

/**
 * The shape of data attributes in a component's Headless Design System.
 */
export type NestedTraits = Partial<Record<string, Partial<Record<PropertyKey, ClassNameValue>> | ClassNameValue>>;

/* ====================== CVA ====================== */

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

/* ====================== SVA ====================== */

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
