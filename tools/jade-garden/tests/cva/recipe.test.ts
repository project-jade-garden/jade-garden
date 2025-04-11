import { describe, expect, test } from "bun:test";
import { twMerge } from "tailwind-merge";
import { type ClassValue, cn, createCVA, cvaRecipe, cx } from "../../src";

type TWMergeFn = (...inputs: ClassValue[]) => string;

describe("cvaRecipe", () => {
  describe("default", () => {
    const cva = createCVA();

    test("should override base classes", () => {
      const baseCVA = cva({ base: "base-class" });
      const recipe = cvaRecipe(baseCVA)({ base: "override-class" });
      const result = recipe({});
      expect(result).toBe("override-class");
    });

    test("should merge variants", () => {
      const baseCVA = cva({
        base: "base-class",
        variants: {
          size: {
            small: "size-small"
          }
        }
      });
      const recipe = cvaRecipe(baseCVA)({
        variants: {
          size: {
            medium: "size-medium"
          }
        }
      });
      const result = recipe({ size: "medium" });
      expect(result).toBe("base-class size-medium");
    });

    test("should override default variants", () => {
      const baseCVA = cva({
        base: "base-class",
        variants: {
          size: {
            small: "size-small",
            medium: "size-medium"
          }
        },
        defaultVariants: {
          size: "small"
        }
      });
      const recipe = cvaRecipe(baseCVA)({
        defaultVariants: {
          size: "medium"
        }
      });
      const result = recipe({});
      expect(result).toBe("base-class size-medium");
    });

    test("should merge compound variants", () => {
      const baseCVA = cva({
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
      const recipe = cvaRecipe(baseCVA)({
        compoundVariants: [
          {
            size: "medium",
            variant: "secondary",
            class: "compound-medium-secondary"
          }
        ]
      });
      const result = recipe({ size: "medium", variant: "secondary" });
      expect(result).toBe("base-class size-medium variant-secondary compound-medium-secondary");
    });
  });

  describe("cn", () => {
    const cva = createCVA(cn);

    test("should override base classes", () => {
      const baseCVA = cva({ base: "base-class" });
      const recipe = cvaRecipe(baseCVA)({ base: "override-class" });
      const result = recipe({});
      expect(result).toBe("override-class");
    });

    test("should merge variants", () => {
      const baseCVA = cva({
        base: "base-class",
        variants: {
          size: {
            small: "size-small"
          }
        }
      });
      const recipe = cvaRecipe(baseCVA)({
        variants: {
          size: {
            medium: "size-medium"
          }
        }
      });
      const result = recipe({ size: "medium" });
      expect(result).toBe("base-class size-medium");
    });

    test("should override default variants", () => {
      const baseCVA = cva({
        base: "base-class",
        variants: {
          size: {
            small: "size-small",
            medium: "size-medium"
          }
        },
        defaultVariants: {
          size: "small"
        }
      });
      const recipe = cvaRecipe(baseCVA)({
        defaultVariants: {
          size: "medium"
        }
      });
      const result = recipe({});
      expect(result).toBe("base-class size-medium");
    });

    test("should merge compound variants", () => {
      const baseCVA = cva({
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
      const recipe = cvaRecipe(baseCVA)({
        compoundVariants: [
          {
            size: "medium",
            variant: "secondary",
            class: "compound-medium-secondary"
          }
        ]
      });
      const result = recipe({ size: "medium", variant: "secondary" });
      expect(result).toBe("base-class size-medium variant-secondary compound-medium-secondary");
    });
  });

  describe("cx", () => {
    const cva = createCVA(cx);

    test("should override base classes", () => {
      const baseCVA = cva({ base: "base-class" });
      const recipe = cvaRecipe(baseCVA)({ base: "override-class" });
      const result = recipe({});
      expect(result).toBe("override-class");
    });

    test("should merge variants", () => {
      const baseCVA = cva({
        base: "base-class",
        variants: {
          size: {
            small: "size-small"
          }
        }
      });
      const recipe = cvaRecipe(baseCVA)({
        variants: {
          size: {
            medium: "size-medium"
          }
        }
      });
      const result = recipe({ size: "medium" });
      expect(result).toBe("base-class size-medium");
    });

    test("should override default variants", () => {
      const baseCVA = cva({
        base: "base-class",
        variants: {
          size: {
            small: "size-small",
            medium: "size-medium"
          }
        },
        defaultVariants: {
          size: "small"
        }
      });
      const recipe = cvaRecipe(baseCVA)({
        defaultVariants: {
          size: "medium"
        }
      });
      const result = recipe({});
      expect(result).toBe("base-class size-medium");
    });

    test("should merge compound variants", () => {
      const baseCVA = cva({
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
      const recipe = cvaRecipe(baseCVA)({
        compoundVariants: [
          {
            size: "medium",
            variant: "secondary",
            class: "compound-medium-secondary"
          }
        ]
      });
      const result = recipe({ size: "medium", variant: "secondary" });
      expect(result).toBe("base-class size-medium variant-secondary compound-medium-secondary");
    });
  });

  describe("twMerge", () => {
    const cva = createCVA(twMerge as TWMergeFn);

    test("should override base classes", () => {
      const baseCVA = cva({ base: "base-class" });
      const recipe = cvaRecipe(baseCVA)({ base: "override-class" });
      const result = recipe({});
      expect(result).toBe("override-class");
    });

    test("should merge variants", () => {
      const baseCVA = cva({
        base: "base-class",
        variants: {
          size: {
            small: "size-small"
          }
        }
      });
      const recipe = cvaRecipe(baseCVA)({
        variants: {
          size: {
            medium: "size-medium"
          }
        }
      });
      const result = recipe({ size: "medium" });
      expect(result).toBe("base-class size-medium");
    });

    test("should override default variants", () => {
      const baseCVA = cva({
        base: "base-class",
        variants: {
          size: {
            small: "size-small",
            medium: "size-medium"
          }
        },
        defaultVariants: {
          size: "small"
        }
      });
      const recipe = cvaRecipe(baseCVA)({
        defaultVariants: {
          size: "medium"
        }
      });
      const result = recipe({});
      expect(result).toBe("base-class size-medium");
    });

    test("should merge compound variants", () => {
      const baseCVA = cva({
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
      const recipe = cvaRecipe(baseCVA)({
        compoundVariants: [
          {
            size: "medium",
            variant: "secondary",
            class: "compound-medium-secondary"
          }
        ]
      });
      const result = recipe({ size: "medium", variant: "secondary" });
      expect(result).toBe("base-class size-medium variant-secondary compound-medium-secondary");
    });
  });
});
