import { describe, expect, test } from "bun:test";
import { twMerge } from "tailwind-merge";
import { type ClassValue, cn, createSVA, cx, svaRecipe } from "../../src";

type TWMergeFn = (...inputs: ClassValue[]) => string;

describe("svaRecipe", () => {
  describe("default", () => {
    const sva = createSVA();

    test("should override slot base classes", () => {
      const baseSVA = sva({ slots: { root: "root-class" } });
      const recipe = svaRecipe(baseSVA)({ slots: { root: "override-root-class" } });
      const slotFunctions = recipe({});
      expect(slotFunctions.root()).toBe("override-root-class");
    });

    test("should merge slot variants", () => {
      const baseSVA = sva({
        slots: { root: "root-class" },
        variants: {
          size: {
            small: { root: "size-small" }
          }
        }
      });
      const recipe = svaRecipe(baseSVA)({
        variants: {
          size: {
            medium: { root: "size-medium" }
          }
        }
      });
      const slotFunctions = recipe({ size: "medium" });
      expect(slotFunctions.root()).toBe("root-class size-medium");
    });

    test("should override default slot variants", () => {
      const baseSVA = sva({
        slots: { root: "root-class" },
        variants: {
          size: {
            small: { root: "size-small" },
            medium: { root: "size-medium" }
          }
        },
        defaultVariants: { size: "small" }
      });
      const recipe = svaRecipe(baseSVA)({
        defaultVariants: { size: "medium" }
      });
      const slotFunctions = recipe({});
      expect(slotFunctions.root()).toBe("root-class size-medium");
    });

    test("should merge compound slot variants", () => {
      const baseSVA = sva({
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
      const recipe = svaRecipe(baseSVA)({
        compoundVariants: [{ size: "medium", variant: "secondary", class: { root: "compound-medium-secondary" } }]
      });
      const slotFunctions = recipe({ size: "medium", variant: "secondary" });
      expect(slotFunctions.root()).toBe("root-class size-medium variant-secondary compound-medium-secondary");
    });
  });

  describe("cn", () => {
    const sva = createSVA(cn);

    test("should override slot base classes", () => {
      const baseSVA = sva({ slots: { root: "root-class" } });
      const recipe = svaRecipe(baseSVA)({ slots: { root: "override-root-class" } });
      const slotFunctions = recipe({});
      expect(slotFunctions.root()).toBe("override-root-class");
    });

    test("should merge slot variants", () => {
      const baseSVA = sva({
        slots: { root: "root-class" },
        variants: {
          size: {
            small: { root: "size-small" }
          }
        }
      });
      const recipe = svaRecipe(baseSVA)({
        variants: {
          size: {
            medium: { root: "size-medium" }
          }
        }
      });
      const slotFunctions = recipe({ size: "medium" });
      expect(slotFunctions.root()).toBe("root-class size-medium");
    });

    test("should override default slot variants", () => {
      const baseSVA = sva({
        slots: { root: "root-class" },
        variants: {
          size: {
            small: { root: "size-small" },
            medium: { root: "size-medium" }
          }
        },
        defaultVariants: { size: "small" }
      });
      const recipe = svaRecipe(baseSVA)({
        defaultVariants: { size: "medium" }
      });
      const slotFunctions = recipe({});
      expect(slotFunctions.root()).toBe("root-class size-medium");
    });

    test("should merge compound slot variants", () => {
      const baseSVA = sva({
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
      const recipe = svaRecipe(baseSVA)({
        compoundVariants: [{ size: "medium", variant: "secondary", class: { root: "compound-medium-secondary" } }]
      });
      const slotFunctions = recipe({ size: "medium", variant: "secondary" });
      expect(slotFunctions.root()).toBe("root-class size-medium variant-secondary compound-medium-secondary");
    });
  });

  describe("cx", () => {
    const sva = createSVA(cx);

    test("should override slot base classes", () => {
      const baseSVA = sva({ slots: { root: "root-class" } });
      const recipe = svaRecipe(baseSVA)({ slots: { root: "override-root-class" } });
      const slotFunctions = recipe({});
      expect(slotFunctions.root()).toBe("override-root-class");
    });

    test("should merge slot variants", () => {
      const baseSVA = sva({
        slots: { root: "root-class" },
        variants: {
          size: {
            small: { root: "size-small" }
          }
        }
      });
      const recipe = svaRecipe(baseSVA)({
        variants: {
          size: {
            medium: { root: "size-medium" }
          }
        }
      });
      const slotFunctions = recipe({ size: "medium" });
      expect(slotFunctions.root()).toBe("root-class size-medium");
    });

    test("should override default slot variants", () => {
      const baseSVA = sva({
        slots: { root: "root-class" },
        variants: {
          size: {
            small: { root: "size-small" },
            medium: { root: "size-medium" }
          }
        },
        defaultVariants: { size: "small" }
      });
      const recipe = svaRecipe(baseSVA)({
        defaultVariants: { size: "medium" }
      });
      const slotFunctions = recipe({});
      expect(slotFunctions.root()).toBe("root-class size-medium");
    });

    test("should merge compound slot variants", () => {
      const baseSVA = sva({
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
      const recipe = svaRecipe(baseSVA)({
        compoundVariants: [{ size: "medium", variant: "secondary", class: { root: "compound-medium-secondary" } }]
      });
      const slotFunctions = recipe({ size: "medium", variant: "secondary" });
      expect(slotFunctions.root()).toBe("root-class size-medium variant-secondary compound-medium-secondary");
    });
  });

  describe("twMerge", () => {
    const sva = createSVA(twMerge as TWMergeFn);

    test("should override slot base classes", () => {
      const baseSVA = sva({ slots: { root: "root-class" } });
      const recipe = svaRecipe(baseSVA)({ slots: { root: "override-root-class" } });
      const slotFunctions = recipe({});
      expect(slotFunctions.root()).toBe("override-root-class");
    });

    test("should merge slot variants", () => {
      const baseSVA = sva({
        slots: { root: "root-class" },
        variants: {
          size: {
            small: { root: "size-small" }
          }
        }
      });
      const recipe = svaRecipe(baseSVA)({
        variants: {
          size: {
            medium: { root: "size-medium" }
          }
        }
      });
      const slotFunctions = recipe({ size: "medium" });
      expect(slotFunctions.root()).toBe("root-class size-medium");
    });

    test("should override default slot variants", () => {
      const baseSVA = sva({
        slots: { root: "root-class" },
        variants: {
          size: {
            small: { root: "size-small" },
            medium: { root: "size-medium" }
          }
        },
        defaultVariants: { size: "small" }
      });
      const recipe = svaRecipe(baseSVA)({
        defaultVariants: { size: "medium" }
      });
      const slotFunctions = recipe({});
      expect(slotFunctions.root()).toBe("root-class size-medium");
    });

    test("should merge compound slot variants", () => {
      const baseSVA = sva({
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
      const recipe = svaRecipe(baseSVA)({
        compoundVariants: [{ size: "medium", variant: "secondary", class: { root: "compound-medium-secondary" } }]
      });
      const slotFunctions = recipe({ size: "medium", variant: "secondary" });
      expect(slotFunctions.root()).toBe("root-class size-medium variant-secondary compound-medium-secondary");
    });
  });
});
