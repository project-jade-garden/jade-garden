import { beforeEach, describe, expect, test } from "bun:test";
import { existsSync, readFileSync, rmdirSync } from "node:fs";
import { cloneDeep } from "es-toolkit";
import rspackPlugin from "unplugin-jade-garden/rspack";
import type { Options } from "../src/lib/types";
import { buttonConfig, noBaseCVA } from "./fixtures/jade-garden/cva";
import { alertConfig, noSlotsSVA } from "./fixtures/jade-garden/sva";
import { configs, cssTestCases, cvaConfig, noBaseAndSlots, noNames, svaConfig } from "./mocks/configs";
import { entryDir, outputDir, rootDir } from "./mocks/dirPaths";
import { build, getPath } from "./utils";

const targetDir = getPath(`${rootDir}/jade-garden`);

describe("rspack", () => {
  beforeEach(() => {
    if (existsSync(targetDir)) rmdirSync(targetDir, { recursive: true });
  });

  const rspackBuild = async (config: Options) => {
    await new Promise((resolve) => {
      build.rspack(
        {
          entry: entryDir,
          plugins: [rspackPlugin(config)],
          module: {
            rules: [
              {
                test: /\.css$/,
                use: [
                  "css-loader",
                  {
                    loader: "postcss-loader",
                    options: {
                      postcssOptions: {
                        plugins: ["@tailwindcss/postcss"]
                      }
                    }
                  }
                ]
              }
            ]
          },
          output: {
            path: getPath("./dist")
          }
        },
        resolve
      );
    });
  };

  describe("edge cases", () => {
    test("empties `outDir`", async () => {
      const { opts: _opts } = cssTestCases[0];
      const opts = cloneDeep(_opts);
      opts.styleConfigs = configs;
      await rspackBuild(opts);

      expect(existsSync(`${outputDir}/alert.css`)).toBe(true);
      expect(existsSync(`${outputDir}/button.css`)).toBe(true);
      expect(existsSync(`${outputDir}/index.css`)).toBe(true);

      opts.clean = true;
      opts.styleConfigs = { cva: [buttonConfig], sva: [alertConfig] };
      await rspackBuild(opts);

      // Deleted files
      expect(existsSync(`${outputDir}/alert.css`)).toBe(false);
      expect(existsSync(`${outputDir}/button.css`)).toBe(false);
      expect(existsSync(`${outputDir}/index.css`)).toBe(false);

      // Written files
      expect(existsSync(`${targetDir}/cva/button.css`)).toBe(true);
      expect(existsSync(`${targetDir}/cva/index.css`)).toBe(true);
      expect(existsSync(`${targetDir}/sva/alert.css`)).toBe(true);
      expect(existsSync(`${targetDir}/sva/index.css`)).toBe(true);
    });

    test("prevents name conflicts", async () => {
      const { opts: _opts } = cssTestCases[0];
      const opts = cloneDeep(_opts);
      opts.styleConfigs = { components: [alertConfig, alertConfig, buttonConfig, buttonConfig] };
      await rspackBuild(opts);

      expect(existsSync(`${outputDir}/alert.css`)).toBe(true);
      expect(existsSync(`${outputDir}/alert-1.css`)).toBe(false);
      expect(existsSync(`${outputDir}/button.css`)).toBe(true);
      expect(existsSync(`${outputDir}/button-1.css`)).toBe(false);
      expect(existsSync(`${outputDir}/index.css`)).toBe(true);
    });
  });

  describe("no writes", () => {
    test("no names", async () => {
      const { opts: _opts } = cssTestCases[0];
      const opts = cloneDeep(_opts);
      opts.styleConfigs = noNames;
      await rspackBuild(opts);

      expect(existsSync(outputDir)).toBe(false);
    });

    test("no base", async () => {
      const { opts: _opts } = cssTestCases[0];
      const opts = cloneDeep(_opts);
      opts.styleConfigs = { components: [noBaseCVA] };
      await rspackBuild(opts);

      expect(existsSync(outputDir)).toBe(false);
    });

    test("no slots", async () => {
      const { opts: _opts } = cssTestCases[0];
      const opts = cloneDeep(_opts);
      opts.styleConfigs = { components: [noSlotsSVA] };
      await rspackBuild(opts);

      expect(existsSync(outputDir)).toBe(false);
    });

    test("no base and no slots", async () => {
      const { opts: _opts } = cssTestCases[0];
      const opts = cloneDeep(_opts);
      opts.styleConfigs = noBaseAndSlots;
      await rspackBuild(opts);

      expect(existsSync(outputDir)).toBe(false);
    });
  });

  describe("throws", () => {
    test("`configs` is not valid", async () => {
      const { opts: _opts } = cssTestCases[0];
      const opts = cloneDeep(_opts);
      // @ts-expect-error: Type 'string' is not assignable to type.
      opts.styleConfigs = "";
      try {
        await rspackBuild(opts);
      } catch (error) {
        expect(error).toMatch("error");
      }
    });

    test("invalid config value", async () => {
      const { opts: _opts } = cssTestCases[0];
      const opts = cloneDeep(_opts);
      // @ts-expect-error: Type 'undefined' is not assignable to type.
      opts.styleConfigs = { 1: { 2: undefined } };
      try {
        await rspackBuild(opts);
      } catch (error) {
        expect(error).toMatch("error");
      }
    });
  });

  describe("writes", () => {
    test.each(cssTestCases)("cva file $label", async ({ opts }) => {
      opts.styleConfigs = cvaConfig;
      await rspackBuild(opts);

      const buttonFile = `${targetDir}/cva/button.css`;
      const indexFile = `${targetDir}/cva/index.css`;

      expect(readFileSync(buttonFile, { encoding: "utf-8" })).toMatchSnapshot();
      expect(readFileSync(indexFile, { encoding: "utf-8" })).toMatchSnapshot();

      expect(existsSync(buttonFile)).toBe(true);
      expect(existsSync(indexFile)).toBe(true);
    });

    test.each(cssTestCases)("sva file $label", async ({ opts }) => {
      opts.styleConfigs = svaConfig;
      await rspackBuild(opts);

      const alertFile = `${targetDir}/sva/alert.css`;
      const indexFile = `${targetDir}/sva/index.css`;

      expect(readFileSync(alertFile, { encoding: "utf-8" })).toMatchSnapshot();
      expect(readFileSync(indexFile, { encoding: "utf-8" })).toMatchSnapshot();

      expect(existsSync(alertFile)).toBe(true);
      expect(existsSync(indexFile)).toBe(true);
    });

    test.each(cssTestCases)("cva and sva files $label", async ({ opts }) => {
      opts.styleConfigs = configs;
      await rspackBuild(opts);

      const alertFile = `${outputDir}/alert.css`;
      const buttonFile = `${outputDir}/button.css`;
      const indexFile = `${outputDir}/index.css`;

      expect(readFileSync(alertFile, { encoding: "utf-8" })).toMatchSnapshot();
      expect(readFileSync(buttonFile, { encoding: "utf-8" })).toMatchSnapshot();
      expect(readFileSync(indexFile, { encoding: "utf-8" })).toMatchSnapshot();

      expect(existsSync(`${outputDir}/alert.css`)).toBe(true);
      expect(existsSync(`${outputDir}/button.css`)).toBe(true);
      expect(existsSync(`${outputDir}/index.css`)).toBe(true);
    });
  });
});
