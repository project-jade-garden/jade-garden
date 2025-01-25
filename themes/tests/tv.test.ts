import { describe, expect, test } from "bun:test";
import { createSlots } from "@spark-css/core/avatar";
import { tv } from "tailwind-variants";

describe("Tailwind Variants", () => {
  const avatarSlots = createSlots({ prefix: "spark" });
  const avatarVariants = tv({ slots: avatarSlots });
  const { base, fallback, image, root } = avatarVariants();

  test("Extending 'avatarVariants' with no modifications matches 'avatarVariants'", () => {
    const styles = tv({
      extend: avatarVariants
    });

    const { base: _base, fallback: _fallback, image: _image, root: _root } = styles();
    expect(_base()).toEqual(base());
    expect(_fallback()).toEqual(fallback());
    expect(_image()).toEqual(image());
    expect(_root()).toEqual(root());
  });
  test("Extending 'avatarVariants' and setting 'undefined' to 'base' and 'slots' keys matches 'avatarVariants'", () => {
    const styles = tv({
      extend: avatarVariants,
      base: undefined,
      slots: undefined
    });

    const { base: _base, fallback: _fallback, image: _image, root: _root } = styles();
    expect(_base()).toEqual(base());
    expect(_fallback()).toEqual(fallback());
    expect(_image()).toEqual(image());
    expect(_root()).toEqual(root());
  });
  test("Extending 'avatarVariants' with 'variants' works", () => {
    const styles = tv({
      extend: avatarVariants,
      variants: {
        size: {
          sm: {
            base: "mx-2",
            root: "size-2"
          },
          md: {
            base: "mx-4",
            root: "size-4"
          },
          lg: {
            base: "mx-6",
            root: "size-6"
          }
        }
      },
      defaultVariants: {
        size: "sm"
      }
    });

    const { base: _base, root: _root } = styles();
    expect(_base()).toEqual("spark-avatar mx-2");
    expect(_root()).toEqual("spark-avatar__root size-2");

    const { base: __base, root: __root } = styles({ size: "md" });
    expect(__base()).toEqual("spark-avatar mx-4");
    expect(__root()).toEqual("spark-avatar__root size-4");

    const { base: ___base, root: ___root } = styles();
    expect(___base({ size: "lg" })).toEqual("spark-avatar mx-6");
    expect(___root({ size: "lg" })).toEqual("spark-avatar__root size-6");
  });

  test("Extending 'avatar' with 'compoundSlots' works", () => {
    const slots = ["root", "image", "fallback"];
    const styles = tv({
      extend: avatarVariants,
      variants: {
        size: {
          sm: {},
          md: {},
          lg: {}
        }
      },
      defaultVariants: {
        size: "sm"
      },
      compoundSlots: [
        {
          // @ts-expect-error: using 'extend' loses the types for 'slots' which defaults to type 'never[]'
          slots,
          size: "sm",
          class: "mx-2 size-2"
        },
        {
          // @ts-expect-error: using 'extend' loses the types for 'slots' which defaults to type 'never[]'
          slots,
          size: "md",
          class: "mx-4 size-4"
        },
        {
          // @ts-expect-error: using 'extend' loses the types for 'slots' which defaults to type 'never[]'
          slots,
          size: "lg",
          class: "mx-6 size-6"
        }
      ]
    });

    const { fallback: _fallback, image: _image, root: _root } = styles();
    expect(_fallback()).toEqual("spark-avatar__fallback mx-2 size-2");
    expect(_image()).toEqual("spark-avatar__image mx-2 size-2");
    expect(_root()).toEqual("spark-avatar__root mx-2 size-2");

    const { fallback: __fallback, image: __image, root: __root } = styles({ size: "md" });
    expect(__fallback()).toEqual("spark-avatar__fallback mx-4 size-4");
    expect(__image()).toEqual("spark-avatar__image mx-4 size-4");
    expect(__root()).toEqual("spark-avatar__root mx-4 size-4");

    const { fallback: ___fallback, image: ___image, root: ___root } = styles();
    expect(___fallback({ size: "lg" })).toEqual("spark-avatar__fallback mx-6 size-6");
    expect(___image({ size: "lg" })).toEqual("spark-avatar__image mx-6 size-6");
    expect(___root({ size: "lg" })).toEqual("spark-avatar__root mx-6 size-6");
  });

  test("Extending 'avatarVariants' with 'compoundVariants' works", () => {
    const styles = tv({
      extend: avatarVariants,
      variants: {
        variant: {
          outlined: {
            root: "border"
          },
          filled: {
            root: ""
          }
        },
        severity: {
          error: "",
          success: ""
        }
      },
      compoundVariants: [
        {
          variant: "outlined",
          severity: "error",
          class: {
            root: "border-red-700 dark:border-red-500",
            image: "text-red-700 dark:text-red-500",
            fallback: "text-red-600 dark:text-red-500"
          }
        },
        {
          variant: "outlined",
          severity: "success",
          class: {
            root: "border-green-700 dark:border-green-500",
            image: "text-green-700 dark:text-green-500",
            fallback: "text-green-600 dark:text-green-500"
          }
        },
        {
          variant: "filled",
          severity: "error",
          class: {
            root: "bg-red-100 dark:bg-red-800",
            image: "text-red-900 dark:text-red-50",
            fallback: "text-red-700 dark:text-red-200"
          }
        },
        {
          variant: "filled",
          severity: "success",
          class: {
            root: "bg-green-100 dark:bg-green-800",
            image: "text-green-900 dark:text-green-50",
            fallback: "text-green-700 dark:text-green-200"
          }
        }
      ],
      defaultVariants: {
        variant: "filled",
        severity: "success"
      }
    });

    const { fallback: _fallback, image: _image, root: _root } = styles();
    expect(_fallback()).toEqual("spark-avatar__fallback text-green-700 dark:text-green-200");
    expect(_image()).toEqual("spark-avatar__image text-green-900 dark:text-green-50");
    expect(_root()).toEqual("spark-avatar__root bg-green-100 dark:bg-green-800");

    const { fallback: __fallback, image: __image, root: __root } = styles({ severity: "error", variant: "outlined" });
    expect(__fallback()).toEqual("spark-avatar__fallback text-red-600 dark:text-red-500");
    expect(__image()).toEqual("spark-avatar__image text-red-700 dark:text-red-500");
    expect(__root()).toEqual("spark-avatar__root border border-red-700 dark:border-red-500");

    const { fallback: ___fallback, image: ___image, root: ___root } = styles();
    expect(___fallback({ severity: "error" })).toEqual("spark-avatar__fallback text-red-700 dark:text-red-200");
    expect(___image({ variant: "outlined" })).toEqual("spark-avatar__image text-green-700 dark:text-green-500");
    expect(___root({ severity: "error", variant: "outlined" })).toEqual(
      "spark-avatar__root border border-red-700 dark:border-red-500"
    );
  });
});
