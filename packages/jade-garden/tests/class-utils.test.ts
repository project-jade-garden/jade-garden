import { describe, expect, test } from "bun:test";
import { cm, cn, cx } from "../src";

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
});
