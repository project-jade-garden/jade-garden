import { describe, expect, test } from "bun:test";
import { cm, cn, cx, getClasses, prefixClasses, type Traits, traits } from "../src";

describe("class-utils", () => {
  describe("cm", () => {
    test("returns the input when no exclude or include is provided", () => {
      // @ts-expect-error: Expected 2 arguments, but got 1.
      expect(cm("class1 class2")).toBe("class1 class2");
      // @ts-expect-error: Expected 2 arguments, but got 1.
      expect(cm(["class1", "class2"])).toBe("class1 class2");
      // @ts-expect-error: Expected 2 arguments, but got 1.
      expect(cm({ class1: true, class2: false })).toBe("class1");
      // @ts-expect-error: Expected 2 arguments, but got 1.
      expect(cm(123)).toBe("123");
    });

    test("removes specified classes when prop is a string", () => {
      const props = { exclude: "class2" };
      expect(cm("class1 class2 class3", props)).toBe("class1 class3");
      expect(cm(["class1", "class2", "class3"], props)).toBe("class1 class3");
      expect(cm({ class1: true, class2: true, class3: true }, props)).toBe("class1 class3");
    });

    test("excludes specified classes when prop is an array", () => {
      const props = { exclude: ["class2", "class3"] };
      expect(cm("class1 class2 class3", props)).toBe("class1");
      expect(cm(["class1", "class2", "class3"], props)).toBe("class1");
      expect(cm({ class1: true, class2: true, class3: true }, props)).toBe("class1");
    });

    test("adds specified classes when prop is a string", () => {
      const props = { include: "class3" };
      expect(cm("class1 class2", props)).toBe("class1 class2 class3");
      expect(cm(["class1", "class2"], props)).toBe("class1 class2 class3");
      expect(cm({ class1: true, class2: true }, props)).toBe("class1 class2 class3");
    });

    test("includes specified classes when include is an array", () => {
      const props = { include: ["class3", "class4"] };
      expect(cm("class1 class2", props)).toBe("class1 class2 class3 class4");
      expect(cm(["class1", "class2"], props)).toBe("class1 class2 class3 class4");
      expect(cm({ class1: true, class2: true }, props)).toBe("class1 class2 class3 class4");
    });

    test("handles both exclude and include correctly", () => {
      expect(cm("class1 class2 class3", { include: "class4", exclude: "class2" })).toBe("class1 class3 class4");
      expect(cm(["class1", "class2", "class3"], { include: ["class4", "class5"], exclude: ["class2"] })).toBe(
        "class1 class3 class4 class5"
      );
      expect(cm({ class1: true, class2: true, class3: true }, { include: ["class4"], exclude: ["class2"] })).toBe(
        "class1 class3 class4"
      );
    });

    test("removes duplicate classes", () => {
      expect(cm("class1 class2 class1", { include: "class2" })).toBe("class1 class2");
      expect(cm(["class1", "class2", "class1"], { include: ["class2", "class3"] })).toBe("class1 class2 class3");
      // @ts-expect-error
      // biome-ignore lint/suspicious/noDuplicateObjectKeys:for testing purposes
      expect(cm({ class1: true, class2: true, class1: true }, { include: ["class2", "class3"] })).toBe(
        "class1 class2 class3"
      );
    });

    test("works with empty strings and arrays", () => {
      expect(cm("", { include: "class1" })).toBe("class1");
      expect(cm([], { include: "class1" })).toBe("class1");
      expect(cm("class1", { include: "class2", exclude: [] })).toBe("class1 class2");
      expect(cm("class1", { include: [], exclude: "class1" })).toBe("");
      expect(cm("", { include: [], exclude: [] })).toBe("");
    });
  });

  describe("cn", () => {
    test("strings", () => {
      expect(cn("")).toBe("");
      expect(cn("foo")).toBe("foo");
      expect(cn(true && "foo")).toBe("foo");
      expect(cn(false && "foo")).toBe("");
    });

    test("strings (variadic)", () => {
      expect(cn("foo", "bar")).toBe("foo bar");
      expect(cn(true && "foo", false && "bar", "baz")).toBe("foo baz");
      expect(cn(false && "foo", "bar", "baz", "")).toBe("bar baz");
    });

    test("falsy values return empty string", () => {
      expect(cn(undefined)).toBe("");
      expect(cn(null)).toBe("");
      expect(cn(0)).toBe("");
    });

    test("numbers return empty string", () => {
      expect(cn(1)).toBe("");
      expect(cn(1, 2)).toBe("");
      expect(cn(Number.POSITIVE_INFINITY)).toBe("");
      expect(cn(Number.NaN)).toBe("");
      expect(cn(0)).toBe("");
    });

    test("objects return empty string", () => {
      expect(cn({})).toBe("");
      expect(cn(null)).toBe("");
      expect(cn({ a: 1 })).toBe("");
      expect(cn({ a: 1 }, { b: 2 })).toBe("");
    });

    test("arrays return empty string", () => {
      expect(cn([])).toBe("");
      expect(cn(["foo"])).toBe("");
      expect(cn(["foo", "bar"])).toBe("");
    });

    test("functions return empty string", () => {
      expect(cn(cn)).toBe("");
      expect(cn(cn, cn)).toBe("");
    });
  });

  describe("cx", () => {
    test("strings", () => {
      expect(cx("")).toBe("");
      expect(cx("foo")).toBe("foo");
      expect(cx(true && "foo")).toBe("foo");
      expect(cx(false && "foo")).toBe("");
    });

    test("strings (variadic)", () => {
      expect(cx("")).toBe("");
      expect(cx("foo", "bar")).toBe("foo bar");
      expect(cx(true && "foo", false && "bar", "baz")).toBe("foo baz");
      expect(cx(false && "foo", "bar", "baz", "")).toBe("bar baz");
    });

    test("arrays", () => {
      expect(cx([])).toBe("");
      expect(cx(["foo"])).toBe("foo");
      expect(cx(["foo", "bar"])).toBe("foo bar");
      expect(cx(["foo", 0 && "bar", 1 && "baz"])).toBe("foo baz");
    });

    test("arrays (nested)", () => {
      expect(cx([[[]]])).toBe("");
      expect(cx([[["foo"]]])).toBe("foo");
      expect(cx([false, [["foo"]]])).toBe("foo");
      expect(cx(["foo", ["bar", ["", [["baz"]]]]])).toBe("foo bar baz");
    });

    test("arrays (variadic)", () => {
      expect(cx([], [])).toBe("");
      expect(cx(["foo"], ["bar"])).toBe("foo bar");
      expect(cx(["foo"], null, ["baz", ""], false, "", [])).toBe("foo baz");
    });
  });

  describe("getClasses", () => {
    test("should generate base class name with prefix and default case convention", () => {
      const component = getClasses({
        name: "button",
        base: "base-class"
      });

      expect(component()).toBe("button");
    });

    test("should generate variant class name with prefix and default case convention", () => {
      const component = getClasses({
        name: "button",
        base: "base-class",
        variants: {
          size: {
            small: "size-small",
            medium: "size-medium"
          }
        }
      });

      expect(component({ size: "small" })).toBe("button button__size--small");
    });

    test("should generate class name with custom case convention", () => {
      const component = getClasses({
        name: "myButton",
        base: "base-class"
      });

      expect(component()).toBe("my-button");
    });

    test("should generate class name with compound variants", () => {
      const component = getClasses({
        name: "button",
        base: "",
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
      const component = getClasses({
        base: "base-class"
      });

      expect(component()).toBe("");
    });

    test("should generate slot class name with prefix and default case convention", () => {
      const component = getClasses({
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

    test("should generate slot variant class name with prefix and default case convention", () => {
      const component = getClasses({
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

    test("should generate slot class name with custom case convention", () => {
      const component = getClasses({
        name: "myButton",
        slots: { root: "root-class" }
      });

      const slots = component();
      expect(slots.root()).toBe("my-button--root");
    });

    test("should generate class name with compound variants", () => {
      const component = getClasses({
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
      const component = getClasses({
        slots: { root: "root-class" }
      });

      const slots = component();
      expect(slots.root()).toBe("");
    });
  });

  describe("prefixClasses", () => {
    test("should apply a prefix to a single string input", () => {
      expect(prefixClasses("has-checked", ["bg-indigo-50"])).toBe("has-checked:bg-indigo-50");
    });

    test("should apply a prefix to multiple string inputs", () => {
      expect(prefixClasses("has-checked", ["bg-indigo-50", "text-indigo-900"])).toBe(
        "has-checked:bg-indigo-50 has-checked:text-indigo-900"
      );
    });

    test("should apply a prefix to an object with a variant and single class string", () => {
      expect(prefixClasses("has-checked", [{ variant: "dark", classes: "bg-indigo-950" }])).toBe(
        "dark:has-checked:bg-indigo-950"
      );
    });

    test("should apply a prefix to an object with a variant and multiple class strings", () => {
      expect(prefixClasses("has-checked", [{ variant: "dark", classes: ["bg-indigo-950", "text-indigo-200"] }])).toBe(
        "dark:has-checked:bg-indigo-950 dark:has-checked:text-indigo-200"
      );
    });

    test("should combine prefixed strings and prefixed variants", () => {
      expect(
        prefixClasses("has-checked", [
          "bg-indigo-50",
          "text-indigo-900",
          { variant: "dark", classes: ["bg-indigo-950", "text-indigo-200"] }
        ])
      ).toBe(
        "has-checked:bg-indigo-50 has-checked:text-indigo-900 dark:has-checked:bg-indigo-950 dark:has-checked:text-indigo-200"
      );
    });

    test("should return an empty string for an empty input array", () => {
      expect(prefixClasses("has-checked", [])).toBe("");
    });

    test("should handle an empty prefix", () => {
      expect(prefixClasses("", ["bg-indigo-50"])).toBe("bg-indigo-50");
    });

    test("should handle an empty class string input", () => {
      expect(prefixClasses("has-checked", ["", "bg-indigo-50"])).toBe("has-checked:bg-indigo-50");
    });

    test("should handle empty class strings within a variant object", () => {
      expect(prefixClasses("has-checked", [{ variant: "dark", classes: ["", "bg-indigo-950"] }])).toBe(
        "dark:has-checked:bg-indigo-950"
      );
    });
  });

  describe("traits", () => {
    test("return class and className when data is empty or invalid", () => {
      const propsWithNoData: Traits<{}> = { class: "base-class", className: "extra-class" };
      const data: Traits<{}> = {};

      expect(traits({ ...propsWithNoData, data })).toBe("base-class extra-class");
      expect(traits({ ...propsWithNoData, data: [] as any })).toBe("base-class extra-class");
      expect(traits({ ...propsWithNoData })).toBe("base-class extra-class");
    });

    test("generate data attributes for simple string values", () => {
      const data: Traits<{ scope: "avatar"; part: "fallback" }> = {
        scope: { avatar: "avatar" },
        part: { fallback: "fallback" }
      };
      expect(traits({ data })).toBe("data-[scope=avatar]:avatar data-[part=fallback]:fallback");
    });

    test("generate data attributes for array values", () => {
      const data: Traits<{ roles: "admin" | "moderator" }> = {
        roles: {
          admin: ["admin", "manager"],
          moderator: ["moderator", "ic"]
        }
      };
      expect(traits({ data })).toBe(
        "data-[roles=admin]:admin data-[roles=admin]:manager data-[roles=moderator]:moderator data-[roles=moderator]:ic"
      );
    });

    test("conditional data attributes for object values", () => {
      const data: Traits<{ state: "open" | "closed" }> = {
        state: {
          open: "is-open",
          closed: "is-closed"
        }
      };
      expect(traits({ data })).toBe("data-[state=open]:is-open data-[state=closed]:is-closed");
    });

    test("mix of class name and data attributes", () => {
      const data: Traits<{ size: "small" | "large"; loading: "true" | "false" }> = {
        size: { small: "button-small", large: "button-large" },
        loading: { true: "button-loading" }
      };

      // @ts-expect-error
      expect(traits({ class: "base-button", className: ["primary", "animated"], data })).toBe(
        "base-button primary animated data-[size=small]:button-small data-[size=large]:button-large data-[loading=true]:button-loading"
      );
    });

    test("boolean data attributes", () => {
      const data: Traits<{ disabled: boolean }> = {
        disabled: { true: "is-disabled", false: "is-enabled" }
      };
      expect(traits({ data })).toBe("data-[disabled=true]:is-disabled data-[disabled=false]:is-enabled");
    });

    test("empty string literal data attributes", () => {
      const data: Traits<{ focus: boolean }> = {
        focus: "is-focused"
      };
      expect(traits({ data })).toBe("data-[focus]:is-focused");

      const dataArr: Traits<{ focus: boolean }> = {
        focus: ["is-focused", "active"]
      };
      expect(traits({ data: dataArr })).toBe("data-[focus]:is-focused data-[focus]:active");
    });

    test("empty string data value", () => {
      const data: Traits<{ name: boolean; id: boolean }> = {
        name: "John Doe",
        id: ""
      };
      expect(traits({ data })).toBe("data-[name]:John Doe");
    });

    test("undefined data value", () => {
      // @ts-expect-error
      const data: Traits<{ name: boolean; id: boolean }> = {
        name: "John Doe",
        id: undefined
      };
      expect(traits({ data })).toBe("data-[name]:John Doe");
    });
  });
});
