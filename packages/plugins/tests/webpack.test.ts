import { beforeEach, describe, expect, test } from "bun:test";
import { existsSync, readFileSync, rmdirSync } from "node:fs";
import { cloneDeep } from "es-toolkit";
import webpackPlugin from "unplugin-jade-garden/webpack";
import * as webpack from "webpack";
import type { Options } from "../src/lib/types";
import { buttonConfig, noBaseCVA } from "./fixtures/jade-garden/cva";
import { alertConfig, noSlotsSVA } from "./fixtures/jade-garden/sva";
import { configs, cvaConfig, noBaseAndSlots, noNames, svaConfig, throwsConfig, writeTestCases } from "./mocks/configs";
import { entryDir, outputDir, rootDir } from "./mocks/dirPaths";
import { getPath } from "./utils";

describe("webpack", async () => {
  beforeEach(() => {
    const outputDir = getPath(`${rootDir}/jade-garden`);
    if (existsSync(outputDir)) rmdirSync(outputDir, { recursive: true });
  });

  const webpackBuild = async (config: Options) => {
    const build: typeof webpack.webpack = webpack.webpack || (webpack as any).default || webpack;

    await new Promise((resolve) => {
      build(
        {
          entry: entryDir,
          plugins: [webpackPlugin(config)],
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
      const { opts: _opts } = writeTestCases[0];
      const opts = cloneDeep(_opts);
      opts.styleConfigs = configs;
      await webpackBuild(opts);

      expect(existsSync(`${outputDir}/alert.css`)).toBe(true);
      expect(existsSync(`${outputDir}/button.css`)).toBe(true);
      expect(existsSync(`${outputDir}/index.css`)).toBe(true);

      opts.build = { clean: true };
      opts.styleConfigs = { components: { cva: [buttonConfig], sva: [alertConfig] } };
      await webpackBuild(opts);

      // Deleted files
      expect(existsSync(`${outputDir}/alert.css`)).toBe(false);
      expect(existsSync(`${outputDir}/button.css`)).toBe(false);
      expect(existsSync(`${outputDir}/index.css`)).toBe(false);

      // Written files
      expect(existsSync(`${outputDir}/cva/button.css`)).toBe(true);
      expect(existsSync(`${outputDir}/cva/index.css`)).toBe(true);
      expect(existsSync(`${outputDir}/sva/alert.css`)).toBe(true);
      expect(existsSync(`${outputDir}/sva/index.css`)).toBe(true);
    });

    test("override `maxDepth`", async () => {
      const { opts: _opts } = writeTestCases[0];
      const opts = cloneDeep(_opts);
      opts.styleConfigs = throwsConfig;
      opts.build = { maxDepth: 10 };
      await webpackBuild(opts);

      const output = getPath(`${rootDir}/jade-garden/1/2/3/4/5/configs/components`);
      expect(existsSync(`${output}/alert.css`)).toBe(true);
      expect(existsSync(`${output}/button.css`)).toBe(true);
      expect(existsSync(`${output}/index.css`)).toBe(true);
    });

    test("prevents name conflicts", async () => {
      const { opts: _opts } = writeTestCases[0];
      const opts = cloneDeep(_opts);
      opts.styleConfigs = { components: [alertConfig, alertConfig, buttonConfig, buttonConfig] };
      await webpackBuild(opts);

      expect(existsSync(`${outputDir}/alert.css`)).toBe(true);
      expect(existsSync(`${outputDir}/alert-1.css`)).toBe(false);
      expect(existsSync(`${outputDir}/button.css`)).toBe(true);
      expect(existsSync(`${outputDir}/button-1.css`)).toBe(false);
      expect(existsSync(`${outputDir}/index.css`)).toBe(true);
    });
  });

  describe("no writes", () => {
    test("no names", async () => {
      const { opts: _opts } = writeTestCases[0];
      const opts = cloneDeep(_opts);
      opts.styleConfigs = noNames;
      await webpackBuild(opts);

      expect(existsSync(`${outputDir}/index.css`)).toBe(true);

      const file = readFileSync(`${outputDir}/index.css`);
      expect(file.length).toBe(0);
    });

    test("no base", async () => {
      const { opts: _opts } = writeTestCases[0];
      const opts = cloneDeep(_opts);
      opts.styleConfigs = { components: [noBaseCVA] };
      await webpackBuild(opts);

      expect(existsSync(`${outputDir}/index.css`)).toBe(true);

      const file = readFileSync(`${outputDir}/index.css`);
      expect(file.length).toBe(0);
    });

    test("no slots", async () => {
      const { opts: _opts } = writeTestCases[0];
      const opts = cloneDeep(_opts);
      opts.styleConfigs = { components: [noSlotsSVA] };
      await webpackBuild(opts);

      expect(existsSync(`${outputDir}/index.css`)).toBe(true);

      const file = readFileSync(`${outputDir}/index.css`);
      expect(file.length).toBe(0);
    });

    test("no base and no slots", async () => {
      const { opts: _opts } = writeTestCases[0];
      const opts = cloneDeep(_opts);
      opts.styleConfigs = noBaseAndSlots;
      await webpackBuild(opts);

      expect(existsSync(`${outputDir}/index.css`)).toBe(true);

      const file = readFileSync(`${outputDir}/index.css`);
      expect(file.length).toBe(0);
    });
  });

  describe("throws", () => {
    test("`configs` is not valid", async () => {
      const { opts: _opts } = writeTestCases[0];
      const opts = cloneDeep(_opts);
      // @ts-expect-error: Type 'string' is not assignable to type.
      opts.styleConfigs = "";
      try {
        await webpackBuild(opts);
      } catch (error) {
        expect(error).toMatch("error");
      }
    });

    test("exceeds `maxDepth`", async () => {
      const { opts: _opts } = writeTestCases[0];
      const opts = cloneDeep(_opts);
      opts.styleConfigs = throwsConfig;
      try {
        await webpackBuild(opts);
      } catch (error) {
        expect(error).toMatch("error");
      }
    });

    test("invalid config value", async () => {
      const { opts: _opts } = writeTestCases[0];
      const opts = cloneDeep(_opts);
      // @ts-expect-error: Type 'undefined' is not assignable to type.
      opts.styleConfigs = { 1: { 2: undefined } };
      try {
        await webpackBuild(opts);
      } catch (error) {
        expect(error).toMatch("error");
      }
    });
  });

  describe("writes", () => {
    test.each(writeTestCases)("cva file $label", async ({ opts }) => {
      opts.styleConfigs = cvaConfig;
      await webpackBuild(opts);

      const buttonFile = `${outputDir}/cva/button.css`;
      const indexFile = `${outputDir}/cva/index.css`;

      expect(readFileSync(buttonFile, { encoding: "utf-8" })).toMatchSnapshot();
      expect(readFileSync(indexFile, { encoding: "utf-8" })).toMatchSnapshot();

      expect(existsSync(buttonFile)).toBe(true);
      expect(existsSync(indexFile)).toBe(true);
    });

    test.each(writeTestCases)("sva file $label", async ({ opts }) => {
      opts.styleConfigs = svaConfig;
      await webpackBuild(opts);

      const alertFile = `${outputDir}/sva/alert.css`;
      const indexFile = `${outputDir}/sva/index.css`;

      expect(readFileSync(alertFile, { encoding: "utf-8" })).toMatchSnapshot();
      expect(readFileSync(indexFile, { encoding: "utf-8" })).toMatchSnapshot();

      expect(existsSync(alertFile)).toBe(true);
      expect(existsSync(indexFile)).toBe(true);
    });

    test.each(writeTestCases)("cva and sva files $label", async ({ opts }) => {
      opts.styleConfigs = configs;
      await webpackBuild(opts);

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
