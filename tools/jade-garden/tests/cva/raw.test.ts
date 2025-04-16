import { describe, expect, test } from "bun:test";
import { createRawCVA, cx, rawCVA } from "../../src";

describe("createRawCVA", () => {
  describe("camel case", () => {
    const rawCVA = createRawCVA(cx, { prefix: "ui", caseConvention: "camel" });

    test("should generate base class name with prefix and default case convention", () => {
      const component = rawCVA({
        name: "button",
        base: "base-class"
      });

      expect(component()).toBe("uiButton");
    });

    test("should generate variant class names with prefix and default case convention", () => {
      const component = rawCVA({
        name: "button",
        variants: {
          size: {
            small: "size-small",
            medium: "size-medium"
          }
        }
      });

      expect(component({ size: "small" })).toBe("uiButton uiButton__size--small");
    });

    test("should generate class names with custom case convention", () => {
      const component = rawCVA({
        name: "myButton",
        base: "base-class"
      });

      expect(component()).toBe("uiMyButton");
    });

    test("should generate class names with compound variants", () => {
      const component = rawCVA({
        name: "button",
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
        compoundVariants: [{ size: "small", variant: "primary", class: "compound-small-primary" }]
      });

      expect(component({ size: "small", variant: "primary" })).toBe(
        "uiButton uiButton__size--small uiButton__variant--primary"
      );
    });
  });

  describe("kebab case - default", () => {
    const rawCVA = createRawCVA(cx, { prefix: "ui" });

    test("should generate base class name with prefix and default case convention", () => {
      const component = rawCVA({
        name: "button",
        base: "base-class"
      });

      expect(component()).toBe("ui-button");
    });

    test("should generate variant class names with prefix and default case convention", () => {
      const component = rawCVA({
        name: "button",
        variants: {
          size: {
            small: "size-small",
            medium: "size-medium"
          }
        }
      });

      expect(component({ size: "small" })).toBe("ui-button ui-button__size--small");
    });

    test("should generate class names with custom case convention", () => {
      const component = rawCVA({
        name: "myButton",
        base: "base-class"
      });

      expect(component()).toBe("ui-my-button");
    });

    test("should generate class names with compound variants", () => {
      const component = rawCVA({
        name: "button",
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
        compoundVariants: [{ size: "small", variant: "primary", class: "compound-small-primary" }]
      });

      expect(component({ size: "small", variant: "primary" })).toBe(
        "ui-button ui-button__size--small ui-button__variant--primary"
      );
    });
  });

  describe("pascal case", () => {
    const rawCVA = createRawCVA(cx, { prefix: "ui", caseConvention: "pascal" });

    test("should generate base class name with prefix and default case convention", () => {
      const component = rawCVA({
        name: "button",
        base: "base-class"
      });

      expect(component()).toBe("UiButton");
    });

    test("should generate variant class names with prefix and default case convention", () => {
      const component = rawCVA({
        name: "button",
        variants: {
          size: {
            small: "size-small",
            medium: "size-medium"
          }
        }
      });

      expect(component({ size: "small" })).toBe("UiButton UiButton__Size--Small");
    });

    test("should generate class names with custom case convention", () => {
      const component = rawCVA({
        name: "myButton",
        base: "base-class"
      });

      expect(component()).toBe("UiMyButton");
    });

    test("should generate class names with compound variants", () => {
      const component = rawCVA({
        name: "button",
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
        compoundVariants: [{ size: "small", variant: "primary", class: "compound-small-primary" }]
      });

      expect(component({ size: "small", variant: "primary" })).toBe(
        "UiButton UiButton__Size--Small UiButton__Variant--Primary"
      );
    });
  });

  describe("snake case", () => {
    const rawCVA = createRawCVA(cx, { prefix: "ui", caseConvention: "snake" });

    test("should generate base class name with prefix and default case convention", () => {
      const component = rawCVA({
        name: "button",
        base: "base-class"
      });

      expect(component()).toBe("ui_button");
    });

    test("should generate variant class names with prefix and default case convention", () => {
      const component = rawCVA({
        name: "button",
        variants: {
          size: {
            small: "size-small",
            medium: "size-medium"
          }
        }
      });

      expect(component({ size: "small" })).toBe("ui_button ui_button__size--small");
    });

    test("should generate class names with custom case convention", () => {
      const component = rawCVA({
        name: "myButton",
        base: "base-class"
      });

      expect(component()).toBe("ui_my_button");
    });

    test("should generate class names with compound variants", () => {
      const component = rawCVA({
        name: "button",
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
        compoundVariants: [{ size: "small", variant: "primary", class: "compound-small-primary" }]
      });

      expect(component({ size: "small", variant: "primary" })).toBe(
        "ui_button ui_button__size--small ui_button__variant--primary"
      );
    });
  });
});

describe("rawCVA", () => {
  test("should generate base class name with prefix and default case convention", () => {
    const component = rawCVA({
      name: "button",
      base: "base-class"
    });

    expect(component()).toBe("button");
  });

  test("should generate variant class names with prefix and default case convention", () => {
    const component = rawCVA({
      name: "button",
      variants: {
        size: {
          small: "size-small",
          medium: "size-medium"
        }
      }
    });

    expect(component({ size: "small" })).toBe("button button__size--small");
  });

  test("should generate class names with custom case convention", () => {
    const component = rawCVA({
      name: "myButton",
      base: "base-class"
    });

    expect(component()).toBe("my-button");
  });

  test("should generate class names with compound variants", () => {
    const component = rawCVA({
      name: "button",
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
      compoundVariants: [{ size: "small", variant: "primary", class: "compound-small-primary" }]
    });

    expect(component({ size: "small", variant: "primary" })).toBe(
      "button button__size--small button__variant--primary"
    );
  });

  test("should return empty string if name is not defined", () => {
    const component = rawCVA({
      base: "base-class"
    });

    expect(component()).toBe("");
  });
});
