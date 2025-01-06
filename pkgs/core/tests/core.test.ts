import { describe, expect, test } from "bun:test";
import type { createAnatomy } from "@zag-js/anatomy";
import { kebabCase } from "es-toolkit";
import arkSlots from "./data/ark-slots.json";
import generatedSlots from "./data/generated-slots.json";

describe("@zag-js/anatomy@0.78.3", () => {
  const components = Object.keys(generatedSlots);

  test.each(components)("'%s' anatomy matches current version of @zag-js/anatomy", async (component) => {
    const anatomies = await import(`@zag-js/${kebabCase(component)}`);
    const anatomy: ReturnType<typeof createAnatomy> = anatomies.anatomy;

    // @ts-expect-error: Element implicitly has an 'any' type because expression of type 'string' can't be used to index JSON type
    expect(anatomy.keys()).toEqual(generatedSlots[component]);
  });
});

describe("Ark components", () => {
  const components = Object.keys(arkSlots);

  test.each(components)("'%s' anatomy matches existing Ark anatomy", async (component) => {
    const anatomies = await import("./data/ark-anatomies");

    // @ts-expect-error: Element implicitly has an 'any' type because expression of type 'string' can't be used to index JSON type
    expect(anatomies[`${component}`]).toEqual(arkSlots[component]);
  });
});
