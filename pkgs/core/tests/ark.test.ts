import { describe, expect, test } from "bun:test";
import arkSlots from "./data/ark-slots.json";

describe("Ark components", () => {
  const components = Object.keys(arkSlots);

  test.each(components)("'%s' anatomy matches existing Ark anatomy", async (component) => {
    const anatomies = await import("./data/ark-anatomies");

    // @ts-expect-error: Element implicitly has an 'any' type because expression of type 'string' can't be used to index JSON type
    expect(anatomies[`${component}`]).toEqual(arkSlots[component]);
  });
});
