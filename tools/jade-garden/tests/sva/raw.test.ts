import { describe, expect, test } from "bun:test";
import { rawSVA } from "../../src/sva";

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
