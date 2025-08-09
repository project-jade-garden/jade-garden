import { describe, expect, test } from "bun:test";
import { rawCVA } from "../../src/cva";

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
