import { describe, expect, test } from "bun:test";
import { camelCase } from "es-toolkit";
import * as srcComponents from "../src";
import { components as dataComponents } from "./data";

const components = Object.keys(dataComponents);

describe("@base-ui-components/react@1.0.0-alpha.8", () => {
  test.each(components)("'%s' matches current anatomy", async (component) => {
    // @ts-expect-error: Element implicitly has an 'any' type because expression of type '`${string}Slots`' can't be used to index type 'typeof srcComponents'.
    const srcSlots = srcComponents[`${camelCase(component)}Slots`];
    // @ts-expect-error: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'components'.
    const dataSlots = dataComponents[component];

    if (typeof dataSlots === "object" && Array.isArray(dataSlots)) {
      expect(dataSlots).toContainAllValues(srcSlots);
    } else {
      expect(dataSlots).toEqual(srcSlots);
    }
  });
});
