import { describe, expect, test } from "bun:test";
import { twMerge as tm } from "tailwind-merge";
import { type ClassValue, cn, createCVA, cx } from "../../src";

type MergeClassFn = (...inputs: ClassValue[]) => string;

describe("createCVA", () => {
  describe("cn", () => {
    const cva = createCVA(cn);

    test("should return a function", () => {
      expect(typeof cva).toBe("function");
    });

    test("should apply base classes", () => {
      const result = cva({ base: "base-class" });
      expect(result()).toBe("base-class");
    });

    test("should apply variant classes", () => {
      const component = cva({
        base: "base-class",
        variants: {
          size: {
            small: "size-small",
            medium: "size-medium"
          }
        }
      });
      const result = component({ size: "small" });
      expect(result).toBe("base-class size-small");
    });

    test("should apply default variant classes", () => {
      const component = cva({
        base: "base-class",
        variants: {
          size: {
            small: "size-small",
            medium: "size-medium"
          }
        },
        defaultVariants: {
          size: "medium"
        }
      });
      const result = component({});
      expect(result).toBe("base-class size-medium");
    });

    test("should apply compound variant classes", () => {
      const component = cva({
        base: "base-class",
        variants: {
          size: {
            small: "size-small",
            medium: "size-medium"
          },
          variant: {
            primary: "variant-primary",
            secondary: "variant-secondary"
          }
        },
        compoundVariants: [
          {
            size: "small",
            variant: "primary",
            class: "compound-small-primary"
          }
        ]
      });
      const result = component({ size: "small", variant: "primary" });
      expect(result).toBe("base-class size-small variant-primary compound-small-primary");
    });

    test("should merge class and className props", () => {
      const component = cva({ base: "base-class" });
      // @ts-expect-error
      const result = component({ class: "extra-class", className: "another-class" });
      expect(result).toBe("base-class extra-class another-class");
    });

    test("should return empty string if base is empty string or undefined", () => {
      const result = cva({ base: "" });
      expect(result()).toBe("");

      const result2 = cva({});
      expect(result2()).toBe("");
    });
  });

  describe("cx - default", () => {
    const cva = createCVA();

    test("should return a function", () => {
      expect(typeof cva).toBe("function");
    });

    test("should apply base classes", () => {
      const result = cva({ base: "base-class" });
      expect(result()).toBe("base-class");
    });

    test("should apply variant classes", () => {
      const component = cva({
        base: "base-class",
        variants: {
          size: {
            small: "size-small",
            medium: "size-medium"
          }
        }
      });
      const result = component({ size: "small" });
      expect(result).toBe("base-class size-small");
    });

    test("should apply default variant classes", () => {
      const component = cva({
        base: "base-class",
        variants: {
          size: {
            small: "size-small",
            medium: "size-medium"
          }
        },
        defaultVariants: {
          size: "medium"
        }
      });
      const result = component({});
      expect(result).toBe("base-class size-medium");
    });

    test("should apply compound variant classes", () => {
      const component = cva({
        base: "base-class",
        variants: {
          size: {
            small: "size-small",
            medium: "size-medium"
          },
          variant: {
            primary: "variant-primary",
            secondary: "variant-secondary"
          }
        },
        compoundVariants: [
          {
            size: "small",
            variant: "primary",
            class: "compound-small-primary"
          }
        ]
      });
      const result = component({ size: "small", variant: "primary" });
      expect(result).toBe("base-class size-small variant-primary compound-small-primary");
    });

    test("should merge class and className props", () => {
      const component = cva({ base: "base-class" });
      // @ts-expect-error
      const result = component({ class: "extra-class", className: "another-class" });
      expect(result).toBe("base-class extra-class another-class");
    });

    test("should handle deeply nested arrays and objects", () => {
      const menu = cva({
        base: ["base--styles-1", ["base--styles-2", ["base--styles-3"]]]
      });
      expect(menu()).toBe("base--styles-1 base--styles-2 base--styles-3");

      const complex = cva({
        base: {
          class1: true,
          class2: {
            class3: true,
            class4: false,
            class5: ["class6", { class7: true }]
          }
        }
      });
      expect(complex()).toBe("class1 class2");
    });

    test("should return empty string if base is empty string or undefined", () => {
      const result = cva({ base: "" });
      expect(result()).toBe("");

      const result2 = cva({});
      expect(result2()).toBe("");
    });
  });

  describe("twMerge", () => {
    const cva = createCVA(tm as MergeClassFn);

    test("should return a function", () => {
      expect(typeof cva).toBe("function");
    });

    test("should apply base classes", () => {
      const result = cva({ base: "base-class" });
      expect(result()).toBe("base-class");
    });

    test("should apply variant classes", () => {
      const component = cva({
        base: "base-class",
        variants: {
          size: {
            small: "size-small",
            medium: "size-medium"
          }
        }
      });
      const result = component({ size: "small" });
      expect(result).toBe("base-class size-small");
    });

    test("should apply default variant classes", () => {
      const component = cva({
        base: "base-class",
        variants: {
          size: {
            small: "size-small",
            medium: "size-medium"
          }
        },
        defaultVariants: {
          size: "medium"
        }
      });
      const result = component({});
      expect(result).toBe("base-class size-medium");
    });

    test("should apply compound variant classes", () => {
      const component = cva({
        base: "base-class",
        variants: {
          size: {
            small: "size-small",
            medium: "size-medium"
          },
          variant: {
            primary: "variant-primary",
            secondary: "variant-secondary"
          }
        },
        compoundVariants: [
          {
            size: "small",
            variant: "primary",
            class: "compound-small-primary"
          }
        ]
      });
      const result = component({ size: "small", variant: "primary" });
      expect(result).toBe("base-class size-small variant-primary compound-small-primary");
    });

    test("should merge class and className props", () => {
      const component = cva({ base: "base-class" });
      // @ts-expect-error
      const result = component({ class: "extra-class", className: "another-class" });
      expect(result).toBe("base-class extra-class another-class");
    });

    test("should return empty string if base is empty string or undefined", () => {
      const result = cva({ base: "" });
      expect(result()).toBe("");

      const result2 = cva({});
      expect(result2()).toBe("");
    });

    test("should correctly merge tailwind classes", () => {
      const component = cva({
        base: "text-lg font-bold",
        variants: {
          color: {
            red: "text-red-500",
            blue: "text-blue-500"
          },
          size: {
            sm: "p-2",
            lg: "p-4"
          }
        },
        compoundVariants: [
          {
            color: "red",
            size: "sm",
            class: "m-1"
          }
        ]
      });
      const result = component({ color: "red", size: "sm", className: "p-8" });
      expect(result).toBe("text-lg font-bold text-red-500 m-1 p-8");
    });

    test("should correctly merge and remove duplicate tailwind classes", () => {
      const h1 = cva({
        base: "text-3xl font-bold text-blue-400 text-xl text-blue-200"
      });
      expect(h1()).toBe("font-bold text-xl text-blue-200");

      const complexTailwind = cva({
        base: "p-4 m-2 p-2 m-1 flex items-center flex-col"
      });
      expect(complexTailwind()).toBe("p-2 m-1 flex items-center flex-col");
    });
  });
});
