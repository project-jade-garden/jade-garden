import { describe, expect, test } from "bun:test";
import { twMerge as tw } from "tailwind-merge";
import { type ClassValue, cn, createCVA, cx } from "../../src";

type TWMergeFn = (...inputs: ClassValue[]) => string;

describe("createCVA", () => {
  describe("default", () => {
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

    test("should return empty string if base is empty string or undefined", () => {
      const result = cva({ base: "" });
      expect(result()).toBe("");

      const result2 = cva({});
      expect(result2()).toBe("");
    });
  });

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

  describe("cx", () => {
    const cva = createCVA(cx);

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

  describe("twMerge", () => {
    const cva = createCVA(tw as TWMergeFn);

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
});
