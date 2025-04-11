import { describe, expect, test } from "bun:test";
import { twMerge as tw } from "tailwind-merge";
import { type ClassValue, cn, createSVA, cx } from "../../src";

type TWMergeFn = (...inputs: ClassValue[]) => string;

describe("createSVA", () => {
  describe("default", () => {
    const sva = createSVA();

    test("should return a function that returns an object of slot functions", () => {
      const result = sva({ slots: { root: "root-class" } });
      expect(typeof result).toBe("function");
      const slotFunctions = result({});
      expect(typeof slotFunctions.root).toBe("function");
    });

    test("should apply slot base classes", () => {
      const result = sva({ slots: { root: "root-class" } });
      const slotFunctions = result({});
      expect(slotFunctions.root()).toBe("root-class");
    });

    test("should apply slot variant classes", () => {
      const components = sva({
        slots: { root: "root-class" },
        variants: {
          size: {
            small: { root: "size-small" },
            medium: { root: "size-medium" }
          }
        }
      });
      const slotFunctions = components({ size: "small" });
      expect(slotFunctions.root()).toBe("root-class size-small");
    });

    test("should apply default slot variant classes", () => {
      const components = sva({
        slots: { root: "root-class" },
        variants: {
          size: {
            small: { root: "size-small" },
            medium: { root: "size-medium" }
          }
        },
        defaultVariants: { size: "medium" }
      });
      const slotFunctions = components({});
      expect(slotFunctions.root()).toBe("root-class size-medium");
    });

    test("should apply compound variant classes to slots", () => {
      const components = sva({
        slots: { root: "root-class" },
        variants: {
          size: {
            small: { root: "size-small" },
            medium: { root: "size-medium" }
          },
          variant: {
            primary: { root: "variant-primary" },
            secondary: { root: "variant-secondary" }
          }
        },
        compoundVariants: [{ size: "small", variant: "primary", class: { root: "compound-small-primary" } }]
      });
      const slotFunctions = components({ size: "small", variant: "primary" });
      expect(slotFunctions.root()).toBe("root-class size-small variant-primary compound-small-primary");
    });

    test("should apply compound slot classes", () => {
      const components = sva({
        slots: { root: "root-class", inner: "inner-class" },
        variants: {
          size: {
            small: { root: "size-small", inner: "size-inner-small" },
            medium: { root: "size-medium", inner: "size-inner-medium" }
          }
        },
        compoundSlots: [{ slots: ["root", "inner"], size: "small", class: "compound-slot-small" }]
      });
      const slotFunctions = components({ size: "small" });
      expect(slotFunctions.root()).toBe("root-class size-small compound-slot-small");
      expect(slotFunctions.inner()).toBe("inner-class size-inner-small compound-slot-small");
    });

    test("should merge class and className props for slots", () => {
      const components = sva({ slots: { root: "root-class" } });
      const slotFunctions = components({});
      // @ts-expect-error
      expect(slotFunctions.root({ class: "extra-class", className: "another-class" })).toBe(
        "root-class extra-class another-class"
      );
    });
  });

  describe("cn", () => {
    const sva = createSVA(cn);

    test("should return a function that returns an object of slot functions", () => {
      const result = sva({ slots: { root: "root-class" } });
      expect(typeof result).toBe("function");
      const slotFunctions = result({});
      expect(typeof slotFunctions.root).toBe("function");
    });

    test("should apply slot base classes", () => {
      const result = sva({ slots: { root: "root-class" } });
      const slotFunctions = result({});
      expect(slotFunctions.root()).toBe("root-class");
    });

    test("should apply slot variant classes", () => {
      const components = sva({
        slots: { root: "root-class" },
        variants: {
          size: {
            small: { root: "size-small" },
            medium: { root: "size-medium" }
          }
        }
      });
      const slotFunctions = components({ size: "small" });
      expect(slotFunctions.root()).toBe("root-class size-small");
    });

    test("should apply default slot variant classes", () => {
      const components = sva({
        slots: { root: "root-class" },
        variants: {
          size: {
            small: { root: "size-small" },
            medium: { root: "size-medium" }
          }
        },
        defaultVariants: { size: "medium" }
      });
      const slotFunctions = components({});
      expect(slotFunctions.root()).toBe("root-class size-medium");
    });

    test("should apply compound variant classes to slots", () => {
      const components = sva({
        slots: { root: "root-class" },
        variants: {
          size: {
            small: { root: "size-small" },
            medium: { root: "size-medium" }
          },
          variant: {
            primary: { root: "variant-primary" },
            secondary: { root: "variant-secondary" }
          }
        },
        compoundVariants: [{ size: "small", variant: "primary", class: { root: "compound-small-primary" } }]
      });
      const slotFunctions = components({ size: "small", variant: "primary" });
      expect(slotFunctions.root()).toBe("root-class size-small variant-primary compound-small-primary");
    });

    test("should apply compound slot classes", () => {
      const components = sva({
        slots: { root: "root-class", inner: "inner-class" },
        variants: {
          size: {
            small: { root: "size-small", inner: "size-inner-small" },
            medium: { root: "size-medium", inner: "size-inner-medium" }
          }
        },
        compoundSlots: [{ slots: ["root", "inner"], size: "small", class: "compound-slot-small" }]
      });
      const slotFunctions = components({ size: "small" });
      expect(slotFunctions.root()).toBe("root-class size-small compound-slot-small");
      expect(slotFunctions.inner()).toBe("inner-class size-inner-small compound-slot-small");
    });

    test("should merge class and className props for slots", () => {
      const components = sva({ slots: { root: "root-class" } });
      const slotFunctions = components({});
      // @ts-expect-error
      expect(slotFunctions.root({ class: "extra-class", className: "another-class" })).toBe(
        "root-class extra-class another-class"
      );
    });
  });

  describe("cx", () => {
    const sva = createSVA(cx);

    test("should return a function that returns an object of slot functions", () => {
      const result = sva({ slots: { root: "root-class" } });
      expect(typeof result).toBe("function");
      const slotFunctions = result({});
      expect(typeof slotFunctions.root).toBe("function");
    });

    test("should apply slot base classes", () => {
      const result = sva({ slots: { root: "root-class" } });
      const slotFunctions = result({});
      expect(slotFunctions.root()).toBe("root-class");
    });

    test("should apply slot variant classes", () => {
      const components = sva({
        slots: { root: "root-class" },
        variants: {
          size: {
            small: { root: "size-small" },
            medium: { root: "size-medium" }
          }
        }
      });
      const slotFunctions = components({ size: "small" });
      expect(slotFunctions.root()).toBe("root-class size-small");
    });

    test("should apply default slot variant classes", () => {
      const components = sva({
        slots: { root: "root-class" },
        variants: {
          size: {
            small: { root: "size-small" },
            medium: { root: "size-medium" }
          }
        },
        defaultVariants: { size: "medium" }
      });
      const slotFunctions = components({});
      expect(slotFunctions.root()).toBe("root-class size-medium");
    });

    test("should apply compound variant classes to slots", () => {
      const components = sva({
        slots: { root: "root-class" },
        variants: {
          size: {
            small: { root: "size-small" },
            medium: { root: "size-medium" }
          },
          variant: {
            primary: { root: "variant-primary" },
            secondary: { root: "variant-secondary" }
          }
        },
        compoundVariants: [{ size: "small", variant: "primary", class: { root: "compound-small-primary" } }]
      });
      const slotFunctions = components({ size: "small", variant: "primary" });
      expect(slotFunctions.root()).toBe("root-class size-small variant-primary compound-small-primary");
    });

    test("should apply compound slot classes", () => {
      const components = sva({
        slots: { root: "root-class", inner: "inner-class" },
        variants: {
          size: {
            small: { root: "size-small", inner: "size-inner-small" },
            medium: { root: "size-medium", inner: "size-inner-medium" }
          }
        },
        compoundSlots: [{ slots: ["root", "inner"], size: "small", class: "compound-slot-small" }]
      });
      const slotFunctions = components({ size: "small" });
      expect(slotFunctions.root()).toBe("root-class size-small compound-slot-small");
      expect(slotFunctions.inner()).toBe("inner-class size-inner-small compound-slot-small");
    });

    test("should merge class and className props for slots", () => {
      const components = sva({ slots: { root: "root-class" } });
      const slotFunctions = components({});
      // @ts-expect-error
      expect(slotFunctions.root({ class: "extra-class", className: "another-class" })).toBe(
        "root-class extra-class another-class"
      );
    });
  });

  describe("twMerge", () => {
    const sva = createSVA(tw as TWMergeFn);

    test("should return a function that returns an object of slot functions", () => {
      const result = sva({ slots: { root: "root-class" } });
      expect(typeof result).toBe("function");
      const slotFunctions = result({});
      expect(typeof slotFunctions.root).toBe("function");
    });

    test("should apply slot base classes", () => {
      const result = sva({ slots: { root: "root-class" } });
      const slotFunctions = result({});
      expect(slotFunctions.root()).toBe("root-class");
    });

    test("should apply slot variant classes", () => {
      const components = sva({
        slots: { root: "root-class" },
        variants: {
          size: {
            small: { root: "size-small" },
            medium: { root: "size-medium" }
          }
        }
      });
      const slotFunctions = components({ size: "small" });
      expect(slotFunctions.root()).toBe("root-class size-small");
    });

    test("should apply default slot variant classes", () => {
      const components = sva({
        slots: { root: "root-class" },
        variants: {
          size: {
            small: { root: "size-small" },
            medium: { root: "size-medium" }
          }
        },
        defaultVariants: { size: "medium" }
      });
      const slotFunctions = components({});
      expect(slotFunctions.root()).toBe("root-class size-medium");
    });

    test("should apply compound variant classes to slots", () => {
      const components = sva({
        slots: { root: "root-class" },
        variants: {
          size: {
            small: { root: "size-small" },
            medium: { root: "size-medium" }
          },
          variant: {
            primary: { root: "variant-primary" },
            secondary: { root: "variant-secondary" }
          }
        },
        compoundVariants: [{ size: "small", variant: "primary", class: { root: "compound-small-primary" } }]
      });
      const slotFunctions = components({ size: "small", variant: "primary" });
      expect(slotFunctions.root()).toBe("root-class size-small variant-primary compound-small-primary");
    });

    test("should apply compound slot classes", () => {
      const components = sva({
        slots: { root: "root-class", inner: "inner-class" },
        variants: {
          size: {
            small: { root: "size-small", inner: "size-inner-small" },
            medium: { root: "size-medium", inner: "size-inner-medium" }
          }
        },
        compoundSlots: [{ slots: ["root", "inner"], size: "small", class: "compound-slot-small" }]
      });
      const slotFunctions = components({ size: "small" });
      expect(slotFunctions.root()).toBe("root-class size-small compound-slot-small");
      expect(slotFunctions.inner()).toBe("inner-class size-inner-small compound-slot-small");
    });

    test("should merge class and className props for slots", () => {
      const components = sva({ slots: { root: "root-class" } });
      const slotFunctions = components({});
      // @ts-expect-error
      expect(slotFunctions.root({ class: "extra-class", className: "another-class" })).toBe(
        "root-class extra-class another-class"
      );
    });
  });
});
