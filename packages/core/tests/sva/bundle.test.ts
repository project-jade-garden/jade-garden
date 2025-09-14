import { describe, expect, test } from "bun:test";
import { getBundleSize } from "../utils";

describe("sva bundle size", () => {
  test("jade-garden", async () => {
    const bundleSize = await getBundleSize("jade-garden", "sva");
    expect(bundleSize).toMatchInlineSnapshot("2771");
  });

  test("tailwind-variants", async () => {
    const bundleSize = await getBundleSize("tailwind-variants", "tv");
    expect(bundleSize).toMatchInlineSnapshot("31171");
  });

  test("tailwind-variants/lite", async () => {
    const bundleSize = await getBundleSize("tailwind-variants/lite", "tv");
    expect(bundleSize).toMatchInlineSnapshot("5547");
  });
});
