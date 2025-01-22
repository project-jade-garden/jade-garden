import { describe, expect, test } from "bun:test";
import { camelCase, kebabCase, pascalCase, snakeCase } from "es-toolkit";

// * Tests taken from source: https://github.com/toss/es-toolkit/tree/main/src/string

describe("transformStr function", () => {
  describe("camelCase", () => {
    test("changes camel case to camel case", () => {
      expect(camelCase("transformStr")).toEqual("transformStr");
    });

    test("changes space to camel case", () => {
      expect(camelCase("some whitespace")).toEqual("someWhitespace");
    });

    test("changes hyphen to camel case", () => {
      expect(camelCase("hyphen-text")).toEqual("hyphenText");
    });

    test("changes Acronyms to small letter", () => {
      expect(camelCase("HTTPRequest")).toEqual("httpRequest");
    });

    test("handles leading and trailing whitespace", () => {
      expect(camelCase("    leading and trailing whitespace    ")).toEqual("leadingAndTrailingWhitespace");
    });

    test("handles special characters correctly", () => {
      expect(camelCase("special@characters!")).toEqual("specialCharacters");
    });

    test("works with an empty string", () => {
      expect(camelCase("")).toEqual("");
    });

    test("works with screaming camel case", () => {
      expect(camelCase("FOO_BAR")).toEqual("fooBar");
    });

    test("supports emojis", () => {
      expect(camelCase("Keep unicode 😅")).toEqual("keepUnicode😅");
    });
  });

  describe("kebabCase", () => {
    test("changes camel case to kebab case", () => {
      expect(kebabCase("camelCase")).toEqual("camel-case");
    });

    test("changes space to dash", () => {
      expect(kebabCase("some whitespace")).toEqual("some-whitespace");
    });

    test("changes hyphen to dash", () => {
      expect(kebabCase("hyphen-text")).toEqual("hyphen-text");
    });

    test("changes Acronyms to small letter", () => {
      expect(kebabCase("HTTPRequest")).toEqual("http-request");
    });

    test("handles leading and trailing whitespace", () => {
      expect(kebabCase("    leading and trailing whitespace    ")).toEqual("leading-and-trailing-whitespace");
    });

    test("handles special characters correctly", () => {
      expect(kebabCase("special@characters!")).toEqual("special-characters");
    });

    test("handles strings that are already in snake_case", () => {
      expect(kebabCase("snake_case")).toEqual("snake-case");
    });

    test("works with an empty string", () => {
      expect(kebabCase("")).toEqual("");
    });

    test("works with an leading and trailing underscores", () => {
      expect(kebabCase("__foo_bar___")).toEqual("foo-bar");
    });

    test("works with screaming snake case", () => {
      expect(kebabCase("FOO_BAR")).toEqual("foo-bar");
    });

    test("works with capitalized words", () => {
      expect(kebabCase("Foo Bar")).toEqual("foo-bar");
    });
  });

  describe("PascalCase", () => {
    test("changes space to pascal case", () => {
      expect(pascalCase("some whitespace")).toEqual("SomeWhitespace");
    });

    test("changes hyphen to pascal case", () => {
      expect(pascalCase("hyphen-text")).toEqual("HyphenText");
    });

    test("changes Acronyms to small letter", () => {
      expect(pascalCase("HTTPRequest")).toEqual("HttpRequest");
    });

    test("handles leading and trailing whitespace", () => {
      expect(pascalCase("    leading and trailing whitespace    ")).toEqual("LeadingAndTrailingWhitespace");
    });

    test("handles special characters correctly", () => {
      expect(pascalCase("special@characters!")).toEqual("SpecialCharacters");
    });

    test("handles strings that are already in PascalCase", () => {
      expect(pascalCase("PascalCase")).toEqual("PascalCase");
    });

    test("works with an empty string", () => {
      expect(pascalCase("")).toEqual("");
    });

    test("works with screaming camel case", () => {
      expect(pascalCase("FOO_BAR")).toEqual("FooBar");
    });
  });

  describe("snakeCase", () => {
    test("changes camel case to snake case", () => {
      expect(snakeCase("camelCase")).toEqual("camel_case");
    });

    test("changes space to underscore", () => {
      expect(snakeCase("some whitespace")).toEqual("some_whitespace");
    });

    test("changes hyphen to underscore", () => {
      expect(snakeCase("hyphen-text")).toEqual("hyphen_text");
    });

    test("changes Acronyms to small letter", () => {
      expect(snakeCase("HTTPRequest")).toEqual("http_request");
    });

    test("handles leading and trailing whitespace", () => {
      expect(snakeCase("    leading and trailing whitespace    ")).toEqual("leading_and_trailing_whitespace");
    });

    test("handles special characters correctly", () => {
      expect(snakeCase("special@characters!")).toEqual("special_characters");
    });

    test("handles strings that are already in snake_case", () => {
      expect(snakeCase("snake_case")).toEqual("snake_case");
    });

    test("works with an empty string", () => {
      expect(snakeCase("")).toEqual("");
    });

    test("works with screaming snake case", () => {
      expect(snakeCase("FOO_BAR")).toEqual("foo_bar");
    });
  });
});
