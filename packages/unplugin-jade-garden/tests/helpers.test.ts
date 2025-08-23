import { describe, expect, test } from "bun:test";
import type { CVATraits } from "../src/helpers";
import { convertCVA, convertSVA, traits } from "../src/helpers";

describe("convertCVA", () => {
  test("should generate base class name with prefix and default case convention", () => {
    const component = convertCVA({
      name: "button",
      base: "base-class"
    });

    expect(component()).toBe("button");
  });

  test("should generate variant class names with prefix and default case convention", () => {
    const component = convertCVA({
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
    const component = convertCVA({
      name: "myButton",
      base: "base-class"
    });

    expect(component()).toBe("my-button");
  });

  test("should generate class names with compound variants", () => {
    const component = convertCVA({
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
    const component = convertCVA({
      base: "base-class"
    });

    expect(component()).toBe("");
  });
});

describe("convertSVA", () => {
  test("should generate slot class names with prefix and default case convention", () => {
    const component = convertSVA({
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
    const component = convertSVA({
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
    const component = convertSVA({
      name: "myButton",
      slots: { root: "root-class" }
    });

    const slots = component();
    expect(slots.root()).toBe("my-button--root");
  });

  test("should generate class names with compound variants", () => {
    const component = convertSVA({
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
    const component = convertSVA({
      slots: { root: "root-class" }
    });

    const slots = component();
    expect(slots.root()).toBe("");
  });
});

describe("traits", () => {
  test("return class and className when data is empty or invalid", () => {
    const propsWithNoData: CVATraits<{}> = { class: "base-class", className: "extra-class" };
    const data: CVATraits<{}> = {};

    expect(traits({ ...propsWithNoData, data })).toBe("base-class extra-class");
    expect(traits({ ...propsWithNoData, data: [] as any })).toBe("base-class extra-class");
    expect(traits({ ...propsWithNoData })).toBe("base-class extra-class");
  });

  test("generate data attributes for simple string values", () => {
    const data: CVATraits<{ scope: "avatar"; part: "fallback" }> = {
      scope: { avatar: "avatar" },
      part: { fallback: "fallback" }
    };
    expect(traits({ data })).toBe("data-[scope=avatar]:avatar data-[part=fallback]:fallback");
  });

  test("generate data attributes for array values", () => {
    const data: CVATraits<{ roles: "admin" | "moderator" }> = {
      roles: {
        admin: "admin",
        moderator: "moderator"
      }
    };
    expect(traits({ data })).toBe("data-[roles=admin]:admin data-[roles=moderator]:moderator");
  });

  test("conditional data attributes for object values", () => {
    const data: CVATraits<{ state: "open" | "closed" }> = {
      state: {
        open: "is-open",
        closed: "is-closed"
      }
    };
    expect(traits({ data })).toBe("data-[state=open]:is-open data-[state=closed]:is-closed");
  });

  test("mix of class names and data attributes", () => {
    const data: CVATraits<{ size: "small" | "large"; loading: "true" | "false" }> = {
      size: { small: "button-small", large: "button-large" },
      loading: { true: "button-loading" }
    };

    // @ts-expect-error
    expect(traits({ class: "base-button", className: ["primary", "animated"], data })).toBe(
      "base-button primary animated data-[size=small]:button-small data-[size=large]:button-large data-[loading=true]:button-loading"
    );
  });

  test("boolean data attributes", () => {
    const data: CVATraits<{ disabled: "true" | "false" }> = {
      disabled: { true: "is-disabled", false: "is-enabled" }
    };
    expect(traits({ data })).toBe("data-[disabled=true]:is-disabled data-[disabled=false]:is-enabled");
  });

  test("empty string literal data attributes", () => {
    const data: CVATraits<{ focus: "" }> = {
      focus: "is-focused"
    };
    expect(traits({ data })).toBe("data-[focus]:is-focused");

    const dataArr: CVATraits<{ focus: "" }> = {
      focus: ["is-focused", "active"]
    };
    expect(traits({ data: dataArr })).toBe("data-[focus]:is-focused data-[focus]:active");
  });

  test("empty string data value", () => {
    const data: CVATraits<{ name: ""; id: "" }> = {
      name: "John Doe",
      id: ""
    };
    expect(traits({ data })).toBe("data-[name]:John Doe");
  });

  test("undefined data value", () => {
    // @ts-expect-error
    const data: CVATraits<{ name: ""; id: "" }> = {
      name: "John Doe",
      id: undefined
    };
    expect(traits({ data })).toBe("data-[name]:John Doe");
  });
});
