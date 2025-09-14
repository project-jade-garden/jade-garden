import { describe, expect, test } from "bun:test";
import { getBundleSize } from "./utils";

describe("clsx bundle size", () => {
  test("jade-garden", async () => {
    const bundleSize = await getBundleSize("jade-garden", "cx");
    expect(bundleSize).toMatchInlineSnapshot("326");
  });

  test("clsx", async () => {
    const bundleSize = await getBundleSize("clsx", "clsx");
    expect(bundleSize).toMatchInlineSnapshot("385");
  });
});

describe("clsx/lite bundle size", () => {
  test("jade-garden", async () => {
    const bundleSize = await getBundleSize("jade-garden", "cn");
    expect(bundleSize).toMatchInlineSnapshot("139");
  });

  test("clsx/lite", async () => {
    const bundleSize = await getBundleSize("clsx/lite", "clsx");
    expect(bundleSize).toMatchInlineSnapshot("149");
  });
});
