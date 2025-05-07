import { describe, expect, test } from "bun:test";
import { type CVATraits, cm, cn, cx, traits } from "../src";

describe("class-utils", () => {
  describe("cm", () => {
    test("returns the input when no exclude or include is provided", () => {
      expect(cm("class1 class2")).toBe("class1 class2");
      expect(cm(["class1", "class2"])).toBe("class1 class2");
      expect(cm({ class1: true, class2: false })).toBe("class1");
      expect(cm(123)).toBe("123");
    });

    test("excludes specified classes when exclude is a string", () => {
      expect(cm("class1 class2 class3", "class2")).toBe("class1 class3");
      expect(cm(["class1", "class2", "class3"], "class2")).toBe("class1 class3");
      expect(cm({ class1: true, class2: true, class3: true }, "class2")).toBe("class1 class3");
    });

    test("excludes specified classes when exclude is an array", () => {
      expect(cm("class1 class2 class3", ["class2", "class3"])).toBe("class1");
      expect(cm(["class1", "class2", "class3"], ["class2", "class3"])).toBe("class1");
      expect(cm({ class1: true, class2: true, class3: true }, ["class2", "class3"])).toBe("class1");
    });

    test("includes specified classes when include is a string", () => {
      expect(cm("class1 class2", undefined, "class3")).toBe("class1 class2 class3");
      expect(cm(["class1", "class2"], undefined, "class3")).toBe("class1 class2 class3");
      expect(cm({ class1: true, class2: true }, undefined, "class3")).toBe("class1 class2 class3");
    });

    test("includes specified classes when include is an array", () => {
      expect(cm("class1 class2", undefined, ["class3", "class4"])).toBe("class1 class2 class3 class4");
      expect(cm(["class1", "class2"], undefined, ["class3", "class4"])).toBe("class1 class2 class3 class4");
      expect(cm({ class1: true, class2: true }, undefined, ["class3", "class4"])).toBe("class1 class2 class3 class4");
    });

    test("handles both exclude and include correctly", () => {
      expect(cm("class1 class2 class3", "class2", "class4")).toBe("class1 class3 class4");
      expect(cm(["class1", "class2", "class3"], ["class2"], ["class4", "class5"])).toBe("class1 class3 class4 class5");
      expect(cm({ class1: true, class2: true, class3: true }, ["class2"], ["class4"])).toBe("class1 class3 class4");
    });

    test("removes duplicate classes", () => {
      expect(cm("class1 class2 class1", undefined, "class2")).toBe("class1 class2");
      expect(cm(["class1", "class2", "class1"], undefined, ["class2", "class3"])).toBe("class1 class2 class3");
      // @ts-expect-error
      // biome-ignore lint/suspicious/noDuplicateObjectKeys:for testing purposes
      expect(cm({ class1: true, class2: true, class1: true }, undefined, ["class2", "class3"])).toBe(
        "class1 class2 class3"
      );
    });

    test("works with empty strings and arrays", () => {
      expect(cm("", undefined, "class1")).toBe("class1");
      expect(cm([], undefined, "class1")).toBe("class1");
      expect(cm("class1", [], "class2")).toBe("class1 class2");
      expect(cm("class1", "class1", [])).toBe("");
      expect(cm("", [], [])).toBe("");
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

    test("undefined data values", () => {
      const data: CVATraits<{ name: ""; id: "" }> = {
        name: "John Doe",
        // @ts-expect-error
        id: undefined
      };
      expect(traits({ data })).toBe("data-[name]:John Doe");
    });
  });
});
