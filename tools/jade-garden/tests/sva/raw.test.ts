import { describe, expect, test } from "bun:test";
import { createRawSVA, cx, rawSVA } from "../../src";

describe("createRawSVA", () => {
  describe("camel case", () => {
    const rawSVA = createRawSVA(cx, { prefix: "ui", caseConvention: "camel" });

    test("should generate slot class names with prefix and default case convention", () => {
      const component = rawSVA({
        name: "button",
        slots: {
          root: "root-class",
          inner: "inner-class"
        }
      });

      const slots = component();
      expect(slots.root()).toBe("uiButton--root");
      expect(slots.inner()).toBe("uiButton--inner");
    });

    test("should generate slot variant class names with prefix and default case convention", () => {
      const component = rawSVA({
        name: "button",
        slots: { root: "root-class" },
        variants: {
          size: {
            small: { root: "size-small" },
            medium: { root: "size-medium" }
          }
        }
      });

      const slots = component({ size: "small" });
      expect(slots.root()).toBe("uiButton--root uiButton--root__size--small");
    });

    test("should generate slot class names with custom case convention", () => {
      const component = rawSVA({
        name: "myButton",
        slots: { root: "root-class" }
      });

      const slots = component();
      expect(slots.root()).toBe("uiMyButton--root");
    });

    test("should generate class names with compound variants", () => {
      const component = rawSVA({
        name: "button",
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

      const slots = component({ size: "small", variant: "primary" });
      expect(slots.root()).toBe("uiButton--root uiButton--root__size--small uiButton--root__variant--primary");
    });
  });

  describe("kebab case - default", () => {
    const rawSVA = createRawSVA(cx, { prefix: "ui" });

    test("should generate slot class names with prefix and default case convention", () => {
      const component = rawSVA({
        name: "button",
        slots: {
          root: "root-class",
          inner: "inner-class"
        }
      });

      const slots = component();
      expect(slots.root()).toBe("ui-button--root");
      expect(slots.inner()).toBe("ui-button--inner");
    });

    test("should generate slot variant class names with prefix and default case convention", () => {
      const component = rawSVA({
        name: "button",
        slots: { root: "root-class" },
        variants: {
          size: {
            small: { root: "size-small" },
            medium: { root: "size-medium" }
          }
        }
      });

      const slots = component({ size: "small" });
      expect(slots.root()).toBe("ui-button--root ui-button--root__size--small");
    });

    test("should generate slot class names with custom case convention", () => {
      const component = rawSVA({
        name: "myButton",
        slots: { root: "root-class" }
      });

      const slots = component();
      expect(slots.root()).toBe("ui-my-button--root");
    });

    test("should generate class names with compound variants", () => {
      const component = rawSVA({
        name: "button",
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

      const slots = component({ size: "small", variant: "primary" });
      expect(slots.root()).toBe("ui-button--root ui-button--root__size--small ui-button--root__variant--primary");
    });
  });

  describe("pascal case", () => {
    const rawSVA = createRawSVA(cx, { prefix: "ui", caseConvention: "pascal" });

    test("should generate slot class names with prefix and default case convention", () => {
      const component = rawSVA({
        name: "button",
        slots: {
          root: "root-class",
          inner: "inner-class"
        }
      });

      const slots = component();
      expect(slots.root()).toBe("UiButton--Root");
      expect(slots.inner()).toBe("UiButton--Inner");
    });

    test("should generate slot variant class names with prefix and default case convention", () => {
      const component = rawSVA({
        name: "button",
        slots: { root: "root-class" },
        variants: {
          size: {
            small: { root: "size-small" },
            medium: { root: "size-medium" }
          }
        }
      });

      const slots = component({ size: "small" });
      expect(slots.root()).toBe("UiButton--Root UiButton--Root__Size--Small");
    });

    test("should generate slot class names with custom case convention", () => {
      const component = rawSVA({
        name: "myButton",
        slots: { root: "root-class" }
      });

      const slots = component();
      expect(slots.root()).toBe("UiMyButton--Root");
    });

    test("should generate class names with compound variants", () => {
      const component = rawSVA({
        name: "button",
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

      const slots = component({ size: "small", variant: "primary" });
      expect(slots.root()).toBe("UiButton--Root UiButton--Root__Size--Small UiButton--Root__Variant--Primary");
    });
  });

  describe("snake case", () => {
    const rawSVA = createRawSVA(cx, { prefix: "ui", caseConvention: "snake" });

    test("should generate slot class names with prefix and default case convention", () => {
      const component = rawSVA({
        name: "button",
        slots: {
          root: "root-class",
          inner: "inner-class"
        }
      });

      const slots = component();
      expect(slots.root()).toBe("ui_button--root");
      expect(slots.inner()).toBe("ui_button--inner");
    });

    test("should generate slot variant class names with prefix and default case convention", () => {
      const component = rawSVA({
        name: "button",
        slots: { root: "root-class" },
        variants: {
          size: {
            small: { root: "size-small" },
            medium: { root: "size-medium" }
          }
        }
      });

      const slots = component({ size: "small" });
      expect(slots.root()).toBe("ui_button--root ui_button--root__size--small");
    });

    test("should generate slot class names with custom case convention", () => {
      const component = rawSVA({
        name: "myButton",
        slots: { root: "root-class" }
      });

      const slots = component();
      expect(slots.root()).toBe("ui_my_button--root");
    });

    test("should generate class names with compound variants", () => {
      const component = rawSVA({
        name: "button",
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

      const slots = component({ size: "small", variant: "primary" });
      expect(slots.root()).toBe("ui_button--root ui_button--root__size--small ui_button--root__variant--primary");
    });
  });
});

describe("rawSVA", () => {
  test("should generate slot class names with prefix and default case convention", () => {
    const component = rawSVA({
      name: "button",
      slots: {
        root: "root-class",
        inner: "inner-class"
      }
    });

    const slots = component();
    expect(slots.root()).toBe("button--root");
    expect(slots.inner()).toBe("button--inner");
  });

  test("should generate slot variant class names with prefix and default case convention", () => {
    const component = rawSVA({
      name: "button",
      slots: { root: "root-class" },
      variants: {
        size: {
          small: { root: "size-small" },
          medium: { root: "size-medium" }
        }
      }
    });

    const slots = component({ size: "small" });
    expect(slots.root()).toBe("button--root button--root__size--small");
  });

  test("should generate slot class names with custom case convention", () => {
    const component = rawSVA({
      name: "myButton",
      slots: { root: "root-class" }
    });

    const slots = component();
    expect(slots.root()).toBe("my-button--root");
  });

  test("should generate class names with compound variants", () => {
    const component = rawSVA({
      name: "button",
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

    const slots = component({ size: "small", variant: "primary" });
    expect(slots.root()).toBe("button--root button--root__size--small button--root__variant--primary");
  });

  test("should return empty string if name is not defined", () => {
    const component = rawSVA({
      slots: { root: "root-class" }
    });

    const slots = component();
    expect(slots.root()).toBe("");
  });
});
