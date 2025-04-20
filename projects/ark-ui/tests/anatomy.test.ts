import { describe, expect, test } from "bun:test";
import { camelCase } from "es-toolkit";
import * as srcComponents from "../src";
import { components as dataComponents } from "./data";

const components = Object.keys(dataComponents);
const customArkComponents = ["colorPicker", "checkbox", "field", "fieldset", "segmentGroup", "toggle", "tour"];

describe("@ark-ui/*@5.x", () => {
  describe("Ark UI anatomy", () => {
    test.each(customArkComponents)("'%s' matches current anatomy", async (component) => {
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

  describe("@zag-js/anatomy@1.10.0", () => {
    test.each(components.filter((component) => !customArkComponents.includes(component)))(
      "'%s' matches current anatomy of @zag-js",
      async (component) => {
        // @ts-expect-error: Element implicitly has an 'any' type because expression of type '`${string}Slots`' can't be used to index type 'typeof srcComponents'.
        const srcSlots = srcComponents[`${camelCase(component)}Slots`];
        // @ts-expect-error: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'components'.
        const dataSlots = dataComponents[component];

        if (typeof dataSlots === "object" && Array.isArray(dataSlots)) {
          expect(dataSlots).toContainAllValues(srcSlots);
        } else {
          expect(dataSlots).toEqual(srcSlots);
        }
      }
    );
  });
});
