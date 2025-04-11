import { describe, expect, test } from "bun:test";
import postcss from "rollup-plugin-postcss";
import jpg from "../src/rollup";
import { build, getPath } from "./utils/build-utils";

describe("rollup", async () => {
  await build.rollup({
    input: getPath("./fixtures/plain-css/index.js"),
    plugins: [
      jpg({ entry: getPath("./fixtures/plain-css/app.css") }),
      postcss({ config: { path: getPath("./utils/postcss.config.js"), ctx: {} } })
    ]
  });
});
