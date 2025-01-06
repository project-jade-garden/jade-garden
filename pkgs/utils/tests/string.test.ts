import { describe, expect, test } from "bun:test";
import { transformStr } from "../src";

// * Tests taken from source: https://github.com/toss/es-toolkit/tree/main/src/string

describe("transformStr function", () => {
  describe("camelCase", () => {
    test("changes camel case to camel case", () => {
      expect(transformStr("transformStr", "camel")).toEqual("transformStr");
    });

    test("changes space to camel case", () => {
      expect(transformStr("some whitespace", "camel")).toEqual("someWhitespace");
    });

    test("changes hyphen to camel case", () => {
      expect(transformStr("hyphen-text", "camel")).toEqual("hyphenText");
    });

    test("changes Acronyms to small letter", () => {
      expect(transformStr("HTTPRequest", "camel")).toEqual("httpRequest");
    });

    test("handles leading and trailing whitespace", () => {
      expect(transformStr("    leading and trailing whitespace    ", "camel")).toEqual("leadingAndTrailingWhitespace");
    });

    test("handles special characters correctly", () => {
      expect(transformStr("special@characters!", "camel")).toEqual("specialCharacters");
    });

    test("works with an empty string", () => {
      expect(transformStr("", "camel")).toEqual("");
    });

    test("works with screaming camel case", () => {
      expect(transformStr("FOO_BAR", "camel")).toEqual("fooBar");
    });

    test("supports emojis", () => {
      expect(transformStr("Keep unicode 😅", "camel")).toEqual("keepUnicode😅");
    });
  });

  describe("kebabCase", () => {
    test("changes camel case to kebab case", () => {
      expect(transformStr("camelCase", "kebab")).toEqual("camel-case");
    });

    test("changes space to dash", () => {
      expect(transformStr("some whitespace", "kebab")).toEqual("some-whitespace");
    });

    test("changes hyphen to dash", () => {
      expect(transformStr("hyphen-text", "kebab")).toEqual("hyphen-text");
    });

    test("changes Acronyms to small letter", () => {
      expect(transformStr("HTTPRequest", "kebab")).toEqual("http-request");
    });

    test("handles leading and trailing whitespace", () => {
      expect(transformStr("    leading and trailing whitespace    ", "kebab")).toEqual(
        "leading-and-trailing-whitespace"
      );
    });

    test("handles special characters correctly", () => {
      expect(transformStr("special@characters!", "kebab")).toEqual("special-characters");
    });

    test("handles strings that are already in snake_case", () => {
      expect(transformStr("snake_case", "kebab")).toEqual("snake-case");
    });

    test("works with an empty string", () => {
      expect(transformStr("", "kebab")).toEqual("");
    });

    test("works with an leading and trailing underscores", () => {
      expect(transformStr("__foo_bar___", "kebab")).toEqual("foo-bar");
    });

    test("works with screaming snake case", () => {
      expect(transformStr("FOO_BAR", "kebab")).toEqual("foo-bar");
    });

    test("works with capitalized words", () => {
      expect(transformStr("Foo Bar", "kebab")).toEqual("foo-bar");
    });
  });

  describe("PascalCase", () => {
    test("changes space to pascal case", () => {
      expect(transformStr("some whitespace", "pascal")).toEqual("SomeWhitespace");
    });

    test("changes hyphen to pascal case", () => {
      expect(transformStr("hyphen-text", "pascal")).toEqual("HyphenText");
    });

    test("changes Acronyms to small letter", () => {
      expect(transformStr("HTTPRequest", "pascal")).toEqual("HttpRequest");
    });

    test("handles leading and trailing whitespace", () => {
      expect(transformStr("    leading and trailing whitespace    ", "pascal")).toEqual("LeadingAndTrailingWhitespace");
    });

    test("handles special characters correctly", () => {
      expect(transformStr("special@characters!", "pascal")).toEqual("SpecialCharacters");
    });

    test("handles strings that are already in PascalCase", () => {
      expect(transformStr("PascalCase", "pascal")).toEqual("PascalCase");
    });

    test("works with an empty string", () => {
      expect(transformStr("", "pascal")).toEqual("");
    });

    test("works with screaming camel case", () => {
      expect(transformStr("FOO_BAR", "pascal")).toEqual("FooBar");
    });
  });

  describe("snakeCase", () => {
    test("changes camel case to snake case", () => {
      expect(transformStr("camelCase", "snake")).toEqual("camel_case");
    });

    test("changes space to underscore", () => {
      expect(transformStr("some whitespace", "snake")).toEqual("some_whitespace");
    });

    test("changes hyphen to underscore", () => {
      expect(transformStr("hyphen-text", "snake")).toEqual("hyphen_text");
    });

    test("changes Acronyms to small letter", () => {
      expect(transformStr("HTTPRequest", "snake")).toEqual("http_request");
    });

    test("handles leading and trailing whitespace", () => {
      expect(transformStr("    leading and trailing whitespace    ", "snake")).toEqual(
        "leading_and_trailing_whitespace"
      );
    });

    test("handles special characters correctly", () => {
      expect(transformStr("special@characters!", "snake")).toEqual("special_characters");
    });

    test("handles strings that are already in snake_case", () => {
      expect(transformStr("snake_case", "snake")).toEqual("snake_case");
    });

    test("works with an empty string", () => {
      expect(transformStr("", "snake")).toEqual("");
    });

    test("works with screaming snake case", () => {
      expect(transformStr("FOO_BAR", "snake")).toEqual("foo_bar");
    });
  });

  describe("unset `caseConvention` defaults to kebab case", () => {
    test("changes camel case to kebab case", () => {
      expect(transformStr("camelCase")).toEqual("camel-case");
    });

    test("changes space to dash", () => {
      expect(transformStr("some whitespace")).toEqual("some-whitespace");
    });

    test("changes hyphen to dash", () => {
      expect(transformStr("hyphen-text")).toEqual("hyphen-text");
    });

    test("changes Acronyms to small letter", () => {
      expect(transformStr("HTTPRequest")).toEqual("http-request");
    });

    test("handles leading and trailing whitespace", () => {
      expect(transformStr("    leading and trailing whitespace    ")).toEqual("leading-and-trailing-whitespace");
    });

    test("handles special characters correctly", () => {
      expect(transformStr("special@characters!")).toEqual("special-characters");
    });

    test("handles strings that are already in snake_case", () => {
      expect(transformStr("snake_case")).toEqual("snake-case");
    });

    test("works with an empty string", () => {
      expect(transformStr("")).toEqual("");
    });

    test("works with an leading and trailing underscores", () => {
      expect(transformStr("__foo_bar___")).toEqual("foo-bar");
    });

    test("works with screaming snake case", () => {
      expect(transformStr("FOO_BAR")).toEqual("foo-bar");
    });

    test("works with capitalized words", () => {
      expect(transformStr("Foo Bar")).toEqual("foo-bar");
    });
  });
});
