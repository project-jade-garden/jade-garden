import { describe, expect, test } from "bun:test";
import { getBundleSize } from "../utils";

describe("cva bundle size", () => {
  test("class-variance-authority", async () => {
    const bundleSize = await getBundleSize("class-variance-authority", "cva");
    expect(bundleSize).toMatchInlineSnapshot("1020");
  });

  test("cva", async () => {
    const bundleSize = await getBundleSize("cva", "cva");
    expect(bundleSize).toMatchInlineSnapshot("1609");
  });

  test("jade-garden", async () => {
    const bundleSize = await getBundleSize("jade-garden", "cva");
    expect(bundleSize).toMatchInlineSnapshot("1599");
  });
});
