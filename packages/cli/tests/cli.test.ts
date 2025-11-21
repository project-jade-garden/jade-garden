import { beforeEach, describe, expect, test } from "bun:test";
import { existsSync, readFileSync, rmdirSync } from "node:fs";
import { resolve } from "node:path";
import { writeConfigs } from "../src/configs";
import type { Config } from "../src/types";
import { animations, components, elements, styles } from "./fixtures/design";
import { duplicates, errors, misconfigured, none, reserved } from "./fixtures/errors";

// * Paths
const getPath = (entry: string) => resolve(__dirname, entry);
const rootDir = "./fixtures";
const outDir = getPath(`${rootDir}/jade-garden`);

const defaultConfig = {
  configOutput: "ts",
  metaConfig: {},
  outDir,
  silent: false
} satisfies Required<Omit<Config, "styles">>;

describe("cli", () => {
  beforeEach(() => {
    if (existsSync(outDir)) rmdirSync(outDir, { recursive: true });
  });

  // TODO: Write tests for `getConfig.ts`

  describe("writeConfigs", () => {
    test("default config does not output directory", () => {
      writeConfigs(
        {
          ...defaultConfig,
          styles: {}
        },
        outDir
      );

      expect(existsSync(outDir)).toBe(false);
    });

    test.each([
      {
        label: "files for reserved names",
        styles: {
          reserved
        }
      },
      {
        label: "files for no names",
        styles: {
          none
        }
      },
      {
        label: "misconfigured style configs",
        styles: {
          misconfigured
        }
      },
      {
        label: "misconfigured styles",
        styles: {
          iBreak: {}
        }
      },
      {
        label: "directories",
        styles: errors
      }
    ])("does not output $label", ({ styles }) => {
      writeConfigs(
        {
          ...defaultConfig,
          // @ts-expect-error: from "misconfigured styles"
          styles
        },
        outDir
      );

      expect(existsSync(outDir)).toBe(false);
    });

    test("writes files for duplicate names", () => {
      const prefix = `${outDir}/duplicates`;
      writeConfigs(
        {
          ...defaultConfig,
          styles: {
            duplicates
          }
        },
        outDir
      );

      // * Snapshots
      for (const file of duplicates) {
        const fileName = file.styleConfig.name;
        expect(readFileSync(getPath(`${prefix}/${fileName}.ts`), { encoding: "utf-8" })).toMatchSnapshot();
      }

      expect(readFileSync(getPath(`${prefix}/exports.ts`), { encoding: "utf-8" })).toMatchSnapshot();
      expect(readFileSync(getPath(`${prefix}/index.ts`), { encoding: "utf-8" })).toMatchSnapshot();

      expect(existsSync(outDir)).toBe(true);
    });

    test.each([
      {
        label: "animations",
        styles: {
          animations
        }
      },
      {
        label: "components",
        styles: {
          components
        }
      },
      {
        label: "elements",
        styles: {
          elements
        }
      },
      {
        label: "all styles",
        styles
      }
    ])("$label outputs directories and files", ({ styles }) => {
      writeConfigs(
        {
          ...defaultConfig,
          styles
        },
        outDir
      );

      // * Snapshots
      for (const directory of Object.keys(styles)) {
        const files = styles[directory as keyof typeof styles];

        if (files) {
          for (const file of files) {
            const fileName = file.styleConfig.name;
            expect(
              readFileSync(getPath(`${outDir}/${directory}/${fileName}.ts`), { encoding: "utf-8" })
            ).toMatchSnapshot();
          }

          expect(readFileSync(getPath(`${outDir}/${directory}/exports.ts`), { encoding: "utf-8" })).toMatchSnapshot();
          expect(readFileSync(getPath(`${outDir}/${directory}/index.ts`), { encoding: "utf-8" })).toMatchSnapshot();
        }
      }

      expect(existsSync(outDir)).toBe(true);
    });
  });
});
